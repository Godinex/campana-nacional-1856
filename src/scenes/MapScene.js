import Phaser from 'phaser';
import { HEX_MAP_DATA, TERRAIN_COLORS, LOCATIONS } from '../../data/hexmap.js';
import { TurnManager, PHASES, PHASE_LABELS } from '../systems/TurnManager.js';
import { HexPathfinder } from '../systems/HexPathfinder.js';
import { AIController } from '../systems/AIController.js';

// ============================================================
// HEX GEOMETRY
// ============================================================
const HEX_SIZE = 34;
const HEX_W    = Math.sqrt(3) * HEX_SIZE;
const HEX_H    = HEX_SIZE * 2;

function hexToPixel(col, row) {
  const x = HEX_W * col + (row % 2 === 1 ? HEX_W / 2 : 0);
  const y = HEX_H * 0.75 * row;
  return { x: x + 60, y: y + 60 };
}

function hexVertices(cx, cy, size) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30);
    pts.push(cx + size * Math.cos(angle), cy + size * Math.sin(angle));
  }
  return pts;
}

function vertsToPoints(verts) {
  const pts = [];
  for (let i = 0; i < verts.length; i += 2)
    pts.push(new Phaser.Geom.Point(verts[i], verts[i + 1]));
  return pts;
}

// ============================================================
export class MapScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MapScene' });
    this.hexData      = {};
    this.fogGraphics  = {};
    this.peons        = [];
    this.selectedUnit = null;
    this.reachableOverlay = [];
    this.hoverGfx     = null;
    this.selectGfx    = null;
  }

  create() {
    // Systems
    this.tm          = new TurnManager();
    this.pathfinder  = null; // built after hexData is ready
    this.ai          = null;

    // Build world
    this.createBackground();
    this.buildHexGrid();
    this.buildFogLayer();
    this.drawRepublicLabels();

    // Now we can build pathfinder
    this.pathfinder = new HexPathfinder(this.hexData);
    this.ai         = new AIController(this.tm, this.pathfinder);

    // Units
    this.spawnInitialUnits();

    // Camera & input
    this.setupCamera();
    this.setupInput();

    // UI
    this.buildUI();
    this.syncUI();

    // Wire TurnManager events
    this.tm.on('phaseChange',    (ph) => this.onPhaseChange(ph));
    this.tm.on('bonusUpdated',   (b)  => this.syncBonusUI(b));
    this.tm.on('movesUpdated',   (m)  => this.syncMovesUI(m));
    this.tm.on('movesExhausted', ()   => this.onMovesExhausted());
    this.tm.on('logUpdated',     (l)  => this.syncLogUI(l));

    // Reveal starting zones
    this.revealArea(4, 12, 3);
    this.revealArea(7, 13, 2);
    this.revealArea(4,  8, 2);
    this.revealArea(7,  7, 2);

    // Start first turn
    this.time.delayedCall(600, () => this.startFilibusteroTurn());
  }

  // ──────────────────────────────────────────────────────────
  // WORLD BUILDING
  // ──────────────────────────────────────────────────────────
  createBackground() {
    const g = this.add.graphics();
    g.fillGradientStyle(0x061030, 0x061030, 0x0a2050, 0x0a2050, 1);
    g.fillRect(0, 0, 1200, 750);
  }

  buildHexGrid() {
    for (const [col, row, terrain, locationKey] of HEX_MAP_DATA) {
      const { x, y } = hexToPixel(col, row);
      const tc = TERRAIN_COLORS[terrain] || TERRAIN_COLORS.jungle;
      const hexKey = `${col},${row}`;

      // Base hex
      const gfx = this.add.graphics().setDepth(1);
      gfx.fillStyle(tc.base, 1);
      gfx.fillPoints(vertsToPoints(hexVertices(x, y, HEX_SIZE - 1)), true);
      gfx.lineStyle(1, tc.border, 0.7);
      gfx.strokePoints(vertsToPoints(hexVertices(x, y, HEX_SIZE - 1)), true);

      // Terrain detail
      if (terrain === 'jungle' || terrain === 'swamp') this.addForestDetail(gfx, x, y);
      if (terrain === 'mountain')                       this.addMountainDetail(gfx, x, y);
      if (terrain === 'river')                          this.addRiverDetail(gfx, x, y);

      // City marker
      if (terrain === 'city' || terrain === 'port') {
        const m = this.add.graphics().setDepth(4);
        m.fillStyle(terrain === 'city' ? 0xffe080 : 0x80c0ff, 1);
        m.fillCircle(x, y - 8, 4);
        m.lineStyle(1, 0x000000, 0.9);
        m.strokeCircle(x, y - 8, 4);
      }

      // Location name
      let labelObj = null;
      if (locationKey && LOCATIONS[locationKey]) {
        labelObj = this.add.text(x, y + 8, LOCATIONS[locationKey].name, {
          fontFamily: 'Georgia',
          fontSize: '8px',
          color: terrain === 'city' ? '#ffe8a0' : '#c8d8ff',
          stroke: '#000', strokeThickness: 2,
          align: 'center',
        }).setOrigin(0.5, 0).setDepth(5);
      }

      // Hit zone
      const hz = this.add.zone(x, y, HEX_W - 2, HEX_H * 0.75 - 2).setInteractive({ useHandCursor: true });
      hz.on('pointerover', () => this.onHexHover(col, row));
      hz.on('pointerout',  () => this.onHexOut());
      hz.on('pointerdown', () => this.onHexClick(col, row));

      this.hexData[hexKey] = { col, row, terrain, locationKey, gfx, labelObj, x, y };
    }
  }

  addForestDetail(gfx, cx, cy) {
    gfx.fillStyle(0x1a4010, 0.45);
    for (let i = 0; i < 4; i++) {
      const ox = (Math.random() - 0.5) * HEX_W * 0.55;
      const oy = (Math.random() - 0.5) * HEX_H * 0.35;
      gfx.fillTriangle(cx+ox, cy+oy-5, cx+ox-4, cy+oy+3, cx+ox+4, cy+oy+3);
    }
  }

  addMountainDetail(gfx, cx, cy) {
    gfx.fillStyle(0x8a7a5a, 0.55);
    gfx.fillTriangle(cx, cy - 10, cx - 8, cy + 4, cx + 8, cy + 4);
    gfx.fillStyle(0xffffff, 0.2);
    gfx.fillTriangle(cx, cy - 10, cx - 3, cy - 3, cx + 3, cy - 3);
  }

  addRiverDetail(gfx, cx, cy) {
    gfx.lineStyle(2, 0x60a0d0, 0.6);
    gfx.beginPath();
    gfx.moveTo(cx - 10, cy);
    gfx.lineTo(cx + 10, cy);
    gfx.strokePath();
  }

  buildFogLayer() {
    for (const [col, row] of HEX_MAP_DATA) {
      const hexKey = `${col},${row}`;
      const { x, y } = hexToPixel(col, row);
      const fog = this.add.graphics().setDepth(20);
      fog.fillStyle(0x000000, 0.78);
      fog.fillPoints(vertsToPoints(hexVertices(x, y, HEX_SIZE - 1)), true);
      this.fogGraphics[hexKey] = { gfx: fog, revealed: false, edge: false };
    }
  }

  revealArea(col, row, radius) {
    for (const [c, r] of HEX_MAP_DATA) {
      const key = `${c},${r}`;
      const fog = this.fogGraphics[key];
      if (!fog || fog.revealed) continue;

      const dx = c - col, dr = r - row;
      const dist = Math.max(Math.abs(dx), Math.abs(dr), Math.abs(dx + dr));

      if (dist <= radius) {
        fog.gfx.destroy();
        fog.revealed = true;
      } else if (dist === radius + 1 && !fog.edge) {
        fog.gfx.destroy();
        const { x, y } = hexToPixel(c, r);
        const newFog = this.add.graphics().setDepth(20);
        newFog.fillStyle(0x000000, 0.45);
        newFog.fillPoints(vertsToPoints(hexVertices(x, y, HEX_SIZE - 1)), true);
        fog.gfx = newFog;
        fog.edge = true;
      }
    }
  }

  drawRepublicLabels() {
    const labels = [
      { text: 'GUATEMALA',    x: 195, y: 105 },
      { text: 'EL SALVADOR',  x: 305, y: 208 },
      { text: 'HONDURAS',     x: 445, y: 238 },
      { text: 'NICARAGUA',    x: 375, y: 355 },
      { text: 'COSTA RICA',   x: 258, y: 520 },
    ];
    for (const l of labels) {
      this.add.text(l.x, l.y, l.text, {
        fontFamily: 'Georgia', fontSize: '11px',
        color: '#c8c890', alpha: 0.55, letterSpacing: 4,
      }).setOrigin(0.5).setDepth(3).setAlpha(0.5);
    }
    this.add.text(75, 400, 'OCÉANO\nPACÍFICO',
      { fontFamily: 'Georgia', fontSize: '12px', color: '#4080a0', align: 'center' })
      .setOrigin(0.5).setDepth(3).setAlpha(0.45);
    this.add.text(620, 200, 'MAR\nCARIBE',
      { fontFamily: 'Georgia', fontSize: '12px', color: '#4080a0', align: 'center' })
      .setOrigin(0.5).setDepth(3).setAlpha(0.45);
  }

  // ──────────────────────────────────────────────────────────
  // UNITS
  // ──────────────────────────────────────────────────────────
  spawnInitialUnits() {
    const defs = [
      // Filibusteros (rojo)
      { col:4, row:8, side:'filibustero', type:'battalion',
        name:'Walker — 1er Batallón',  color:0xbb2222, symbol:'W', id:'walker' },
      { col:7, row:7, side:'filibustero', type:'battalion',
        name:'Guardia de Granada',      color:0x992222, symbol:'F', id:'fili_granada' },
      // Aliados (azul)
      { col:4, row:12, side:'aliado', type:'battalion',
        name:'Ejército CR — Vanguardia', color:0x2255bb, symbol:'V', id:'cr_van' },
      { col:7, row:13, side:'aliado', type:'general',
        name:'Pres. Juan Rafael Mora',   color:0x1133aa, symbol:'★', id:'mora' },
    ];

    for (const d of defs) {
      this.createPeon(d);
    }
  }

  createPeon(cfg) {
    const { x, y } = hexToPixel(cfg.col, cfg.row);
    const g = this.add.graphics().setDepth(10);
    this.drawUnitGfx(g, x, y, cfg);

    const lbl = this.add.text(x, y, cfg.symbol, {
      fontFamily: 'Georgia',
      fontSize: cfg.type === 'general' ? '12px' : '10px',
      color: '#ffffff',
      stroke: '#000', strokeThickness: 2,
    }).setOrigin(0.5, 0.5).setDepth(11);

    const peon = { ...cfg, gfx: g, labelGfx: lbl, pixelX: x, pixelY: y };
    this.peons.push(peon);
    return peon;
  }

  drawUnitGfx(g, x, y, cfg) {
    g.clear();
    const s = cfg.type === 'general' ? 12 : 10;
    g.fillStyle(cfg.color, 1);
    if (cfg.type === 'general') {
      g.fillCircle(x, y, s);
      g.lineStyle(2, 0xffffff, 0.9);
      g.strokeCircle(x, y, s);
    } else {
      g.fillRect(x - s, y - s, s * 2, s * 2);
      g.lineStyle(2, 0xffffff, 0.9);
      g.strokeRect(x - s, y - s, s * 2, s * 2);
    }
  }

  // ──────────────────────────────────────────────────────────
  // MOVEMENT
  // ──────────────────────────────────────────────────────────
  showReachable(unit) {
    this.clearReachable();
    const movePoints = this.tm.movesLeft;
    const reachable  = this.pathfinder.getReachable(unit.col, unit.row, movePoints * 2);

    for (const [c, r] of reachable) {
      const { x, y } = hexToPixel(c, r);
      const ov = this.add.graphics().setDepth(18);
      ov.fillStyle(0x44ff88, 0.22);
      ov.fillPoints(vertsToPoints(hexVertices(x, y, HEX_SIZE - 2)), true);
      ov.lineStyle(1, 0x44ff88, 0.5);
      ov.strokePoints(vertsToPoints(hexVertices(x, y, HEX_SIZE - 2)), true);
      this.reachableOverlay.push(ov);
    }

    this.tm.addLog(`${unit.name} seleccionado — ${movePoints} mov. disponibles`);
  }

  clearReachable() {
    for (const ov of this.reachableOverlay) ov.destroy();
    this.reachableOverlay = [];
  }

  async moveUnitAlongPath(unit, path) {
    if (path.length === 0) return;

    // Cost check
    let totalCost = 0;
    for (const [c, r] of path) {
      const hex = this.hexData[`${c},${r}`];
      const tc  = hex ? TERRAIN_COLORS[hex.terrain] : null;
      totalCost += tc ? tc.moveCost : 1;
    }
    const steps = Math.min(path.length, this.tm.movesLeft);

    for (let i = 0; i < steps; i++) {
      const [tc, tr] = path[i];
      const { x, y } = hexToPixel(tc, tr);

      await new Promise(resolve => {
        this.tweens.add({
          targets: [unit.gfx, unit.labelGfx],
          x: { value: x, duration: 280, ease: 'Power2' },
          y: { value: y, duration: 280, ease: 'Power2' },
          onComplete: resolve,
        });
      });

      unit.col    = tc;
      unit.row    = tr;
      unit.pixelX = x;
      unit.pixelY = y;

      // Redraw at new position
      this.drawUnitGfx(unit.gfx, x, y, unit);
      unit.labelGfx.setPosition(x, y);

      this.revealArea(tc, tr, 2);
      this.tm.useMove();
    }

    this.tm.addLog(`${unit.name} → [${unit.col},${unit.row}]`);
  }

  // ──────────────────────────────────────────────────────────
  // AI TURN
  // ──────────────────────────────────────────────────────────
  async startFilibusteroTurn() {
    this.showPhasePopup('Turno Filibustero', 'Walker avanza...');
    this.setPhaseLabel('filibustero_move');

    await this.sleep(1200);

    const actions = await this.ai.executeTurn(this.peons, this.hexData);

    for (const action of actions) {
      this.tm.addLog(`⚔ IA: ${action.note || action.unit.name + ' se mueve'}`);
      await this.moveUnitAlongPath(action.unit, action.path);
      await this.sleep(400);
    }

    await this.sleep(800);
    this.hidePhasePopup();
    this.tm.nextPhase(); // → TRIVIA
    this.startTriviaPhase();
  }

  // ──────────────────────────────────────────────────────────
  // TRIVIA PHASE (placeholder para Sprint 3)
  // ──────────────────────────────────────────────────────────
  startTriviaPhase() {
    this.showPhasePopup('Pregunta de Batalla', 'Gana bonos para tus tiradas');
    this.setPhaseLabel('trivia');

    // Simular respuesta por ahora — Sprint 3 abrirá el modal real
    this.time.delayedCall(1800, () => {
      const bonus = Math.floor(Math.random() * 3) + 1; // +1, +2 o +3
      this.tm.addBonus('combat', bonus);
      this.tm.addLog(`📚 Trivia: bono +${bonus} a combate obtenido`);
      this.hidePhasePopup();
      this.tm.nextPhase(); // → PLAYER_MOVE
      this.startPlayerMoveTurn();
    });
  }

  // ──────────────────────────────────────────────────────────
  // PLAYER MOVE PHASE
  // ──────────────────────────────────────────────────────────
  startPlayerMoveTurn() {
    this.showPhasePopup('Tu Turno', `${this.tm.movesLeft} movimientos — selecciona una unidad aliada`, 2000);
    this.setPhaseLabel('player_move');
    this.syncUI();
    this.tm.addLog('🔵 Turno aliado — selecciona una unidad');
  }

  onMovesExhausted() {
    this.clearReachable();
    this.selectedUnit = null;
    this.tm.addLog('Sin movimientos — avanzando a combate');
    this.time.delayedCall(600, () => {
      this.tm.nextPhase(); // → COMBAT
      this.startCombatPhase();
    });
  }

  // ──────────────────────────────────────────────────────────
  // COMBAT PHASE (placeholder para Sprint 3)
  // ──────────────────────────────────────────────────────────
  startCombatPhase() {
    this.setPhaseLabel('combat');
    const bonus  = this.tm.bonusBank.combat;
    const result = this.tm.rollD20(bonus);
    const consumed = this.tm.consumeCombatBonus();

    this.showPhasePopup(
      '⚔ Combate',
      `D20: ${result.roll} + ${consumed} bono = ${result.total}`,
      2500
    );

    this.time.delayedCall(3000, () => {
      this.hidePhasePopup();
      this.tm.nextPhase(); // → RESOLUTION
      this.startResolutionPhase();
    });
  }

  startResolutionPhase() {
    this.setPhaseLabel('resolution');
    this.tm.addLog(`✅ Turno ${this.tm.turn} resuelto`);
    this.showPhasePopup('Resolución', 'Turno completado', 1500);

    this.time.delayedCall(2000, () => {
      this.hidePhasePopup();
      this.tm.nextPhase(); // → FILIBUSTERO_MOVE (nuevo turno)
      this.syncUI();
      this.startFilibusteroTurn();
    });
  }

  // ──────────────────────────────────────────────────────────
  // INPUT
  // ──────────────────────────────────────────────────────────
  onHexHover(col, row) {
    const key = `${col},${row}`;
    const hex = this.hexData[key];
    if (!hex) return;

    if (!this.hoverGfx) this.hoverGfx = this.add.graphics().setDepth(15);
    this.hoverGfx.clear();
    this.hoverGfx.lineStyle(2, 0xffd060, 0.9);
    this.hoverGfx.strokePoints(vertsToPoints(hexVertices(hex.x, hex.y, HEX_SIZE - 1)), true);

    const tc = TERRAIN_COLORS[hex.terrain] || {};
    const infoEl = document.getElementById('hex-info');
    infoEl.style.display = 'block';
    document.getElementById('hex-name').textContent =
      hex.locationKey && LOCATIONS[hex.locationKey]
        ? LOCATIONS[hex.locationKey].name
        : tc.label || hex.terrain;
    document.getElementById('hex-terrain').textContent  = `Terreno: ${tc.label || '—'}`;
    document.getElementById('hex-movement').textContent = `Costo mov.: ${tc.moveCost === 99 ? 'Intransitable' : tc.moveCost}`;
    document.getElementById('hex-note').textContent     =
      hex.locationKey && LOCATIONS[hex.locationKey]
        ? LOCATIONS[hex.locationKey].note : '';
  }

  onHexOut() {
    if (this.hoverGfx) this.hoverGfx.clear();
    document.getElementById('hex-info').style.display = 'none';
  }

  onHexClick(col, row) {
    const key = `${col},${row}`;
    const hex = this.hexData[key];
    if (!hex) return;

    // Check if there's an allied unit here
    const unitHere = this.peons.find(p => p.col === col && p.row === row && p.side === 'aliado');

    if (this.tm.phase === PHASES.PLAYER_MOVE) {
      if (unitHere && !this.selectedUnit) {
        // Select unit
        this.selectedUnit = unitHere;
        this.showReachable(unitHere);
        this.highlightUnit(unitHere, true);
        document.getElementById('status-left').textContent =
          `${unitHere.name} seleccionado — clic en destino`;
        return;
      }

      if (this.selectedUnit && !unitHere) {
        // Move selected unit to clicked hex
        const path = this.pathfinder.findPath(
          this.selectedUnit.col, this.selectedUnit.row,
          col, row,
          this.tm.movesLeft * 2
        );
        if (path.length > 0) {
          this.clearReachable();
          this.highlightUnit(this.selectedUnit, false);
          this.moveUnitAlongPath(this.selectedUnit, path).then(() => {
            this.selectedUnit = null;
            this.syncUI();
          });
        }
        return;
      }
    }

    // Default: reveal + info
    this.revealArea(col, row, 2);
    document.getElementById('status-left').textContent =
      `[${col},${row}] ${hex.locationKey ? LOCATIONS[hex.locationKey]?.name : TERRAIN_COLORS[hex.terrain]?.label}`;
  }

  highlightUnit(unit, on) {
    const { x, y } = hexToPixel(unit.col, unit.row);
    if (on) {
      if (!this.unitSelectGfx) this.unitSelectGfx = this.add.graphics().setDepth(17);
      this.unitSelectGfx.clear();
      this.unitSelectGfx.lineStyle(3, 0xffffff, 1);
      this.unitSelectGfx.strokeCircle(x, y, 18);
      this.tweens.add({
        targets: this.unitSelectGfx,
        alpha: { from: 1, to: 0.4 },
        duration: 600, yoyo: true, repeat: -1,
      });
    } else {
      if (this.unitSelectGfx) {
        this.tweens.killTweensOf(this.unitSelectGfx);
        this.unitSelectGfx.clear();
      }
    }
  }

  setupCamera() {
    this.cameras.main.setZoom(1);
    this.cameras.main.setBounds(-100, -100, 1400, 1000);
    this.input.on('pointermove', (ptr) => {
      if (ptr.isDown && ptr.buttons === 2) {
        this.cameras.main.scrollX -= ptr.velocity.x / 3;
        this.cameras.main.scrollY -= ptr.velocity.y / 3;
      }
    });
    this.input.on('wheel', (ptr, over, dx, dy) => {
      const z = this.cameras.main.zoom;
      this.cameras.main.setZoom(Phaser.Math.Clamp(z - dy * 0.001, 0.5, 2.5));
    });
  }

  setupInput() {
    this.input.mouse.disableContextMenu();
  }

  // ──────────────────────────────────────────────────────────
  // UI
  // ──────────────────────────────────────────────────────────
  buildUI() {
    // Inject log panel HTML
    const existing = document.getElementById('log-panel');
    if (!existing) {
      const logDiv = document.createElement('div');
      logDiv.id = 'log-panel';
      logDiv.style.cssText = `
        position:absolute; bottom:38px; left:20px;
        background:rgba(20,10,0,0.82); border:1px solid #5a3a10;
        border-radius:4px; padding:8px 12px; min-width:200px; max-width:260px;
        max-height:130px; overflow-y:auto; font-family:Georgia,serif;
        font-size:10px; color:#a89060; z-index:100;
      `;
      document.getElementById('game-container').appendChild(logDiv);
    }

    // "End Turn" button
    const btn = document.getElementById('end-turn-btn') || document.createElement('button');
    btn.id = 'end-turn-btn';
    btn.textContent = 'Terminar Movimiento';
    btn.style.cssText = `
      position:absolute; bottom:38px; right:20px;
      background:#3a1a00; border:1px solid #d4a843; border-radius:4px;
      color:#d4a843; font-family:Georgia,serif; font-size:12px;
      padding:8px 16px; cursor:pointer; letter-spacing:1px;
      z-index:100; transition:background 0.2s;
    `;
    btn.onmouseover = () => btn.style.background = '#5a2a00';
    btn.onmouseout  = () => btn.style.background = '#3a1a00';
    btn.onclick     = () => {
      if (this.tm.phase === PHASES.PLAYER_MOVE) {
        this.clearReachable();
        this.selectedUnit = null;
        this.tm.movesLeft = 0;
        this.onMovesExhausted();
      }
    };
    if (!document.getElementById('end-turn-btn'))
      document.getElementById('game-container').appendChild(btn);
  }

  syncUI() {
    this.syncBonusUI(this.tm.bonusBank);
    this.syncMovesUI(this.tm.movesLeft);
  }

  syncBonusUI(b) {
    document.getElementById('bonus-combat').textContent = `+${b.combat}`;
    document.getElementById('bonus-move').textContent   = `+${b.move}`;
    document.getElementById('bonus-estetic').textContent = b.estetic;
    document.getElementById('turn-num').textContent     = this.tm.turn;
  }

  syncMovesUI(m) {
    document.getElementById('phase-label').textContent =
      PHASE_LABELS[this.tm.phase] || this.tm.phase;
    const movEl = document.getElementById('moves-left');
    if (movEl) movEl.textContent = m;
  }

  syncLogUI(log) {
    const el = document.getElementById('log-panel');
    if (el) el.innerHTML = log.map(l => `<div style="margin:2px 0">${l}</div>`).join('');
  }

  setPhaseLabel(phase) {
    document.getElementById('phase-label').textContent = PHASE_LABELS[phase] || phase;
  }

  onPhaseChange(phase) {
    this.setPhaseLabel(phase);
    this.syncUI();
  }

  showPhasePopup(title, subtitle, autoHideMs = 0) {
    const el = document.getElementById('turn-indicator');
    if (el) {
      el.style.display = 'block';
      el.innerHTML = `${title}<span>${subtitle}</span>`;
      if (autoHideMs > 0) {
        setTimeout(() => { el.style.display = 'none'; }, autoHideMs);
      }
    }
  }

  hidePhasePopup() {
    const el = document.getElementById('turn-indicator');
    if (el) el.style.display = 'none';
  }

  // ──────────────────────────────────────────────────────────
  sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  update() {}
}
