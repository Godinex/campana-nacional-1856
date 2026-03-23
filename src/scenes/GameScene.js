// ============================================================
// GAME SCENE — Líneas de tiempo paralelas + Trivia
// ============================================================
import Phaser from 'phaser';
import { NODES_PRIMARIA, NODES_SECUNDARIA, WALKER_PHRASES, ALLIED_PHRASES } from '../data/campaign.js';
import { getRandomQuestion, CATEGORY_BONUS_TYPE } from '../data/trivia.js';

const WALKER_COLOR  = 0xc03030;
const ALLIED_COLOR  = 0x3060c0;
const NODE_DONE_W   = 0x8a1010;
const NODE_DONE_A   = 0x104080;
const NODE_ACTIVE   = 0xffe060;
const NODE_IDLE     = 0x3a2a10;

export class GameScene extends Phaser.Scene {
  constructor() { super({ key: 'GameScene' }); }

  init(data) {
    this.level = data.level || 'secundaria';
    const nodes = this.level === 'primaria' ? NODES_PRIMARIA : NODES_SECUNDARIA;
    this.walkerNodes = nodes.walker;
    this.alliedNodes = nodes.aliados;
    this.walkerPos   = 0; // índice del nodo actual de Walker
    this.alliedPos   = 0; // índice del nodo actual de Aliados
    this.turn        = 1;
    this.phase       = 'walker_question'; // walker_question | allied_question | result
    this.gameOver    = false;
  }

  create() {
    const W = this.scale.width;
    const H = this.scale.height;
    this.W = W; this.H = H;

    this.cameras.main.fadeIn(600, 0, 0, 0);

    // Fondo
    this._drawBackground();

    // Líneas de tiempo
    this._buildTimelines();

    // Panel central de info
    this._buildInfoPanel();

    // Panel de turno
    this._buildTurnPanel();

    // Iniciar primer turno
    this.time.delayedCall(800, () => this._startWalkerQuestion());
  }

  // ──────────────────────────────────────────────────────────
  // FONDO
  // ──────────────────────────────────────────────────────────
  _drawBackground() {
    const { W, H } = this;
    const bg = this.add.graphics();
    bg.fillGradientStyle(0x080400, 0x080400, 0x140a00, 0x140a00, 1);
    bg.fillRect(0, 0, W, H);

    // Textura de grabado
    const lines = this.add.graphics();
    lines.lineStyle(1, 0x3a2000, 0.18);
    for (let y = 0; y < H; y += 14) {
      lines.beginPath(); lines.moveTo(0, y); lines.lineTo(W, y); lines.strokePath();
    }

    // Título
    this.add.text(W / 2, 22, 'LA CAMPAÑA NACIONAL 1856–1857', {
      fontFamily: 'Georgia', fontSize: '18px', color: '#d4a843',
      stroke: '#000', strokeThickness: 4, letterSpacing: 3,
    }).setOrigin(0.5).setDepth(10);

    // Nivel
    this.add.text(W / 2, 46, `Nivel: ${this.level === 'primaria' ? '📚 Primaria' : '🎓 Secundaria'} · Turno `, {
      fontFamily: 'Georgia', fontSize: '12px', color: '#906030',
    }).setOrigin(0.5).setDepth(10);

    this._turnLabel = this.add.text(W / 2 + 80, 46, '1', {
      fontFamily: 'Georgia', fontSize: '12px', color: '#d4a843',
    }).setOrigin(0, 0.5).setDepth(10);
  }

  // ──────────────────────────────────────────────────────────
  // LÍNEAS DE TIEMPO
  // ──────────────────────────────────────────────────────────
  _buildTimelines() {
    const { W, H } = this;
    const totalNodes = this.walkerNodes.length;

    // Dimensiones
    const lineY_W = H * 0.30;  // línea Walker (arriba)
    const lineY_A = H * 0.70;  // línea Aliados (abajo)
    const nodeSpacing = (W - 120) / (totalNodes - 1);
    const startX = 60;
    const nodeR  = 22;

    this._nodeSpacing = nodeSpacing;
    this._startX      = startX;
    this._lineY_W     = lineY_W;
    this._lineY_A     = lineY_A;
    this._nodeR       = nodeR;

    // Labels de línea
    this.add.text(startX - 10, lineY_W - 55, '🔴  WALKER', {
      fontFamily: 'Georgia', fontSize: '14px', color: '#ff7070',
      stroke: '#000', strokeThickness: 3,
    }).setOrigin(0, 0.5).setDepth(5);

    this.add.text(startX - 10, lineY_A + 55, '🔵  EJÉRCITOS ALIADOS', {
      fontFamily: 'Georgia', fontSize: '14px', color: '#70a0ff',
      stroke: '#000', strokeThickness: 3,
    }).setOrigin(0, 0.5).setDepth(5);

    // Líneas de conexión
    const lineGfx = this.add.graphics().setDepth(2);
    lineGfx.lineStyle(3, WALKER_COLOR, 0.4);
    lineGfx.beginPath();
    lineGfx.moveTo(startX, lineY_W);
    lineGfx.lineTo(startX + nodeSpacing * (totalNodes - 1), lineY_W);
    lineGfx.strokePath();

    lineGfx.lineStyle(3, ALLIED_COLOR, 0.4);
    lineGfx.beginPath();
    lineGfx.moveTo(startX, lineY_A);
    lineGfx.lineTo(startX + nodeSpacing * (totalNodes - 1), lineY_A);
    lineGfx.strokePath();

    // Dibujar nodos
    this._walkerNodeGfx  = [];
    this._walkerNodeText = [];
    this._alliedNodeGfx  = [];
    this._alliedNodeText = [];

    for (let i = 0; i < totalNodes; i++) {
      const nx = startX + nodeSpacing * i;
      this._drawNode(nx, lineY_W, i, 'walker');
      this._drawNode(nx, lineY_A, i, 'aliado');
    }

    // Íconos de fichas (actuales)
    this._walkerToken = this.add.graphics().setDepth(8);
    this._alliedToken = this.add.graphics().setDepth(8);
    this._updateTokens();
  }

  _drawNode(x, y, idx, side) {
    const isWalker  = side === 'walker';
    const nodes     = isWalker ? this.walkerNodes : this.alliedNodes;
    const node      = nodes[idx];
    const isFinal   = node.isFinal;

    const gfx = this.add.graphics().setDepth(3);
    const r   = isFinal ? this._nodeR + 6 : this._nodeR;

    gfx.fillStyle(NODE_IDLE, 1);
    gfx.fillCircle(x, y, r);
    gfx.lineStyle(2, isWalker ? WALKER_COLOR : ALLIED_COLOR, 0.6);
    gfx.strokeCircle(x, y, r);

    if (isFinal) {
      gfx.lineStyle(2, 0xffd060, 0.8);
      gfx.strokeCircle(x, y, r + 4);
    }

    // Ícono
    const icon = isFinal ? '🏆' : isWalker ? '🔴' : '🔵';
    const iconTxt = this.add.text(x, y - 4, icon, {
      fontSize: '14px',
    }).setOrigin(0.5).setDepth(4);

    // Fecha
    this.add.text(x, y + r + 6, node.date, {
      fontFamily: 'Georgia', fontSize: '10px',
      color: isWalker ? '#ff9090' : '#7090ff',
      stroke: '#000', strokeThickness: 2,
    }).setOrigin(0.5, 0).setDepth(4);

    // Título (rotado para los intermedios)
    const titleY = isWalker ? y - r - 22 : y + r + 22;
    this.add.text(x, titleY, node.title.replace('⚔ ', '').replace('🏆 ', ''), {
      fontFamily: 'Georgia', fontSize: '10px',
      color: isWalker ? '#ffa0a0' : '#a0b8ff',
      stroke: '#000', strokeThickness: 2,
      align: 'center', wordWrap: { width: 80 },
    }).setOrigin(0.5, isWalker ? 1 : 0).setDepth(4);

    if (isWalker) {
      this._walkerNodeGfx.push(gfx);
      this._walkerNodeText.push(iconTxt);
    } else {
      this._alliedNodeGfx.push(gfx);
      this._alliedNodeText.push(iconTxt);
    }
  }

  _updateTokens() {
    const { _startX: sx, _nodeSpacing: ns, _lineY_W: ly_w, _lineY_A: ly_a, _nodeR: r } = this;

    // Actualizar colores de nodos completados
    for (let i = 0; i < this._walkerNodeGfx.length; i++) {
      const gfx = this._walkerNodeGfx[i];
      gfx.clear();
      const node = this.walkerNodes[i];
      const isFinal = node.isFinal;
      const nr = isFinal ? r + 6 : r;
      const x  = sx + ns * i;

      if (i < this.walkerPos) {
        gfx.fillStyle(NODE_DONE_W, 1);
      } else if (i === this.walkerPos) {
        gfx.fillStyle(NODE_ACTIVE, 1);
      } else {
        gfx.fillStyle(NODE_IDLE, 1);
      }
      gfx.fillCircle(x, ly_w, nr);
      gfx.lineStyle(2, WALKER_COLOR, i === this.walkerPos ? 1 : 0.5);
      gfx.strokeCircle(x, ly_w, nr);
      if (isFinal) {
        gfx.lineStyle(2, 0xffd060, 0.8);
        gfx.strokeCircle(x, ly_w, nr + 4);
      }
    }

    for (let i = 0; i < this._alliedNodeGfx.length; i++) {
      const gfx = this._alliedNodeGfx[i];
      gfx.clear();
      const node = this.alliedNodes[i];
      const isFinal = node.isFinal;
      const nr = isFinal ? r + 6 : r;
      const x  = sx + ns * i;

      if (i < this.alliedPos) {
        gfx.fillStyle(NODE_DONE_A, 1);
      } else if (i === this.alliedPos) {
        gfx.fillStyle(NODE_ACTIVE, 1);
      } else {
        gfx.fillStyle(NODE_IDLE, 1);
      }
      gfx.fillCircle(x, ly_a, nr);
      gfx.lineStyle(2, ALLIED_COLOR, i === this.alliedPos ? 1 : 0.5);
      gfx.strokeCircle(x, ly_a, nr);
      if (isFinal) {
        gfx.lineStyle(2, 0xffd060, 0.8);
        gfx.strokeCircle(x, ly_a, nr + 4);
      }
    }

    // Token Walker
    this._walkerToken.clear();
    const wx = sx + ns * this.walkerPos;
    this._walkerToken.fillStyle(0xff2020, 1);
    this._walkerToken.fillTriangle(wx - 10, ly_w - r - 18, wx + 10, ly_w - r - 18, wx, ly_w - r - 4);
    this._walkerToken.lineStyle(1, 0xffa0a0, 0.8);
    this._walkerToken.strokeTriangle(wx - 10, ly_w - r - 18, wx + 10, ly_w - r - 18, wx, ly_w - r - 4);

    // Token Aliados
    this._alliedToken.clear();
    const ax = sx + ns * this.alliedPos;
    this._alliedToken.fillStyle(0x2060ff, 1);
    this._alliedToken.fillTriangle(ax - 10, ly_a + r + 4, ax + 10, ly_a + r + 4, ax, ly_a + r + 18);
    this._alliedToken.lineStyle(1, 0xa0c0ff, 0.8);
    this._alliedToken.strokeTriangle(ax - 10, ly_a + r + 4, ax + 10, ly_a + r + 4, ax, ly_a + r + 18);
  }

  // ──────────────────────────────────────────────────────────
  // PANEL DE INFO (centro)
  // ──────────────────────────────────────────────────────────
  _buildInfoPanel() {
    const { W, H } = this;
    const panelW = W * 0.55, panelH = H * 0.22;
    const px = W / 2, py = H / 2;

    const bg = this.add.graphics().setDepth(6);
    bg.fillStyle(0x0a0500, 0.88);
    bg.fillRoundedRect(px - panelW/2, py - panelH/2, panelW, panelH, 8);
    bg.lineStyle(1, 0x5a3a10, 0.7);
    bg.strokeRoundedRect(px - panelW/2, py - panelH/2, panelW, panelH, 8);

    this._infoTitle = this.add.text(px, py - panelH/2 + 16, '— Iniciando campaña —', {
      fontFamily: 'Georgia', fontSize: '16px', color: '#d4a843',
      stroke: '#000', strokeThickness: 3, align: 'center',
    }).setOrigin(0.5).setDepth(7);

    this._infoDesc = this.add.text(px, py, '', {
      fontFamily: 'Georgia', fontSize: '12px', color: '#c8a060',
      align: 'center', wordWrap: { width: panelW - 30 }, lineSpacing: 6,
    }).setOrigin(0.5).setDepth(7);

    this._infoPhase = this.add.text(px, py + panelH/2 - 16, '', {
      fontFamily: 'Georgia', fontSize: '12px', color: '#806030',
      letterSpacing: 2,
    }).setOrigin(0.5).setDepth(7);
  }

  _buildTurnPanel() {
    // El panel de turno es dinámico — se actualiza con _setInfo()
  }

  _setInfo(title, desc, phase) {
    this._infoTitle.setText(title);
    this._infoDesc.setText(desc);
    this._infoPhase.setText(phase || '');
  }

  // ──────────────────────────────────────────────────────────
  // LÓGICA DE TURNO
  // ──────────────────────────────────────────────────────────
  _startWalkerQuestion() {
    if (this.gameOver) return;
    const node = this.walkerNodes[this.walkerPos];
    this._setInfo(
      `🔴 Pregunta para WALKER — Nodo ${this.walkerPos + 1}/${this.walkerNodes.length}`,
      `"${node.title}"\n${node.description}`,
      'Si fallas → Walker avanza'
    );
    this._turnLabel.setText(String(this.turn));

    this.time.delayedCall(1200, () => this._showQuestion('walker'));
  }

  _startAlliedQuestion() {
    if (this.gameOver) return;
    const node = this.alliedNodes[this.alliedPos];
    this._setInfo(
      `🔵 Pregunta para los ALIADOS — Nodo ${this.alliedPos + 1}/${this.alliedNodes.length}`,
      `"${node.title}"\n${node.description}`,
      'Si aciertas → Aliados avanzan'
    );
    this.time.delayedCall(1200, () => this._showQuestion('aliado'));
  }

  _showQuestion(side) {
    // Elegir categoría: preguntas de historia/táctica para combate
    const cats = ['historia', 'tactica', 'geografia'];
    const cat  = cats[Math.floor(Math.random() * cats.length)];
    const lv   = this.level;
    const q    = getRandomQuestion(cat, lv) || getRandomQuestion(null, lv) || getRandomQuestion();

    this._renderQuestionModal(q, side);
  }

  _renderQuestionModal(q, side) {
    const { W, H } = this;
    const isWalker = side === 'walker';
    const accent   = isWalker ? '#ff8080' : '#80a8ff';
    const accentN  = isWalker ? 0xff4040  : 0x4080ff;

    // Overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;z-index:200;
      background:rgba(5,2,0,0.90);
      display:flex;align-items:center;justify-content:center;
      font-family:Georgia,serif;
    `;

    const box = document.createElement('div');
    box.style.cssText = `
      background:#100800;
      border:2px solid ${isWalker ? '#c03030' : '#3060c0'};
      border-radius:10px;padding:28px 32px;
      max-width:580px;width:92%;
      box-shadow:0 0 40px ${isWalker ? 'rgba(200,50,50,0.3)' : 'rgba(50,80,200,0.3)'};
    `;

    // Header
    const hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;justify-content:space-between;margin-bottom:14px;';
    hdr.innerHTML = `
      <span style="font-size:12px;letter-spacing:2px;color:${isWalker?'#ff8080':'#80a0ff'};text-transform:uppercase">
        ${isWalker ? '🔴 PREGUNTA — WALKER' : '🔵 PREGUNTA — ALIADOS'}
      </span>
      <span style="font-size:11px;color:#806030">${q.category.toUpperCase()} · ${q.level === 'primaria' ? '📚' : '🎓'}</span>
    `;

    // Barra de tiempo
    const timerWrap = document.createElement('div');
    timerWrap.style.cssText = 'background:#1a0800;border-radius:4px;height:5px;margin:10px 0 14px;overflow:hidden;';
    const timerBar = document.createElement('div');
    timerBar.style.cssText = `height:100%;width:100%;background:${isWalker?'#ff4040':'#4080ff'};transition:width 0.1s linear;`;
    timerWrap.appendChild(timerBar);

    const timerLbl = document.createElement('div');
    timerLbl.style.cssText = 'text-align:right;font-size:10px;color:#705020;margin-top:2px;margin-bottom:10px;';
    timerLbl.textContent = '20s';

    // Pregunta
    const qEl = document.createElement('p');
    qEl.style.cssText = 'font-size:18px;color:#f0e0a0;line-height:1.5;margin-bottom:20px;';
    qEl.textContent = q.question;

    // Opciones
    const optsEl = document.createElement('div');
    optsEl.style.cssText = 'display:flex;flex-direction:column;gap:9px;';
    const LABELS = ['A', 'B', 'C', 'D'];

    let answered = false;
    const startMs = performance.now();
    let timerInt;

    const doAnswer = (idx) => {
      if (answered) return;
      answered = true;
      clearInterval(timerInt);
      const elapsed = performance.now() - startMs;
      const correct = idx === q.answer;
      this._resolveAnswer(correct, elapsed, side, q, overlay);
      // Highlight
      btns.forEach((btn, i) => {
        if (i === q.answer) { btn.style.background='#0a2a08'; btn.style.borderColor='#60c060'; btn.style.color='#80ff80'; }
        else if (i === idx && !correct) { btn.style.background='#2a0808'; btn.style.borderColor='#c04040'; btn.style.color='#ff8080'; }
        btn.style.cursor='default';
      });
    };

    const btns = q.options.map((opt, idx) => {
      const btn = document.createElement('button');
      btn.style.cssText = `
        background:#1a0c00;border:1px solid #4a2a08;border-radius:6px;
        color:#c8a060;font-family:Georgia,serif;font-size:14px;
        padding:10px 14px;text-align:left;cursor:pointer;transition:all 0.15s;
      `;
      btn.onmouseover = () => { if(!answered){btn.style.background='#2a1400';btn.style.borderColor=isWalker?'#c03030':'#3060c0';} };
      btn.onmouseout  = () => { if(!answered){btn.style.background='#1a0c00';btn.style.borderColor='#4a2a08';} };
      btn.textContent = `${LABELS[idx]}. ${opt}`;
      btn.addEventListener('click', () => doAnswer(idx));
      optsEl.appendChild(btn);
      return btn;
    });

    box.appendChild(hdr);
    box.appendChild(timerWrap);
    box.appendChild(timerLbl);
    box.appendChild(qEl);
    box.appendChild(optsEl);
    overlay.appendChild(box);
    document.body.appendChild(overlay);

    // Timer
    const TOTAL = 20000;
    timerInt = setInterval(() => {
      const elapsed = performance.now() - startMs;
      const rem = Math.max(0, TOTAL - elapsed);
      timerBar.style.width = `${(rem/TOTAL)*100}%`;
      timerLbl.textContent = `${Math.ceil(rem/1000)}s`;
      if (rem <= 0) {
        clearInterval(timerInt);
        if (!answered) { answered = true; this._resolveAnswer(false, TOTAL, side, q, overlay); }
      }
    }, 100);
  }

  _resolveAnswer(correct, elapsed, side, q, overlay) {
    const isWalker = side === 'walker';
    // Lógica:
    // Walker question: si ACIERTA → Walker NO avanza. Si FALLA → Walker avanza
    // Allied question: si ACIERTA → Aliados avanzan. Si FALLA → nada

    const walkerAdvances = isWalker && !correct;
    const alliedAdvances = !isWalker && correct;

    // Mostrar resultado en overlay
    const resultEl = document.createElement('div');
    let msg = '';
    if (isWalker) {
      msg = correct
        ? '✅ ¡Correcto! Walker no avanza.'
        : '✗ Incorrecto — ¡Walker avanza!';
    } else {
      msg = correct
        ? '✅ ¡Correcto! Los Aliados avanzan.'
        : '✗ Incorrecto — Sin avance.';
    }
    resultEl.style.cssText = `
      margin-top:16px;padding:10px 14px;border-radius:6px;text-align:center;
      font-size:14px;color:${correct?'#80ff80':'#ff8080'};
      background:${correct?'#082008':'#200808'};
      border:1px solid ${correct?'#40c040':'#c04040'};
    `;
    resultEl.textContent = msg;
    overlay.querySelector('div').appendChild(resultEl);

    setTimeout(() => {
      overlay.remove();
      // Avanzar posiciones
      if (walkerAdvances && this.walkerPos < this.walkerNodes.length - 1) {
        this.walkerPos++;
        this._updateTokens();
        this._showEpicPhrase('walker');
      } else if (alliedAdvances && this.alliedPos < this.alliedNodes.length - 1) {
        this.alliedPos++;
        this._updateTokens();
        this._showEpicPhrase('aliado');
      } else {
        this._nextPhase(isWalker);
      }
    }, 2000);
  }

  _nextPhase(wasWalkerQuestion) {
    if (this.gameOver) return;
    // Revisar victoria
    const walkerWon = this.walkerPos >= this.walkerNodes.length - 1;
    const alliedWon = this.alliedPos >= this.alliedNodes.length - 1;

    if (alliedWon) { this._endGame('aliados'); return; }
    if (walkerWon) { this._endGame('walker');  return; }

    if (wasWalkerQuestion) {
      // Siguiente: pregunta aliada
      this.time.delayedCall(600, () => this._startAlliedQuestion());
    } else {
      // Nuevo turno
      this.turn++;
      this._turnLabel.setText(String(this.turn));
      this.time.delayedCall(600, () => this._startWalkerQuestion());
    }
  }

  // ──────────────────────────────────────────────────────────
  // FRASES ÉPICAS
  // ──────────────────────────────────────────────────────────
  _showEpicPhrase(side) {
    const { W, H } = this;
    const isWalker = side === 'walker';
    const phrases  = isWalker ? WALKER_PHRASES : ALLIED_PHRASES;
    const phrase   = phrases[Math.floor(Math.random() * phrases.length)];

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;z-index:300;
      display:flex;align-items:center;justify-content:center;
      pointer-events:none;
    `;

    const box = document.createElement('div');
    box.style.cssText = `
      background:${isWalker ? 'rgba(40,5,5,0.96)' : 'rgba(5,10,40,0.96)'};
      border:2px solid ${isWalker ? '#c03030' : '#3060c0'};
      border-radius:10px;padding:24px 36px;
      max-width:500px;text-align:center;
      font-family:Georgia,serif;
      box-shadow:0 0 60px ${isWalker ? 'rgba(200,0,0,0.4)' : 'rgba(0,80,200,0.4)'};
      animation: fadeSlide 0.4s ease;
    `;

    box.innerHTML = `
      <div style="font-size:13px;letter-spacing:2px;color:${isWalker?'#ff6060':'#6080ff'};margin-bottom:12px;text-transform:uppercase">
        ${isWalker ? '🔴 William Walker avanza' : '🔵 ¡Los Aliados avanzan!'}
      </div>
      <div style="font-size:20px;color:${isWalker?'#ffc0c0':'#c0d8ff'};line-height:1.5;font-style:italic;margin-bottom:14px;">
        "${phrase.text}"
      </div>
      <div style="font-size:12px;color:${isWalker?'#a04040':'#4060a0'};letter-spacing:1px;">
        ${phrase.attr}
      </div>
    `;

    // Añadir estilo de animación
    if (!document.getElementById('epic-style')) {
      const style = document.createElement('style');
      style.id = 'epic-style';
      style.textContent = `@keyframes fadeSlide { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }`;
      document.head.appendChild(style);
    }

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.style.transition = 'opacity 0.4s';
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.remove();
        this._nextPhase(side === 'walker');
      }, 400);
    }, 2800);
  }

  // ──────────────────────────────────────────────────────────
  // FIN DE JUEGO
  // ──────────────────────────────────────────────────────────
  _endGame(winner) {
    this.gameOver = true;
    const { W, H } = this;
    const walkerWon = winner === 'walker';

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;z-index:500;
      background:rgba(0,0,0,0.92);
      display:flex;align-items:center;justify-content:center;
      font-family:Georgia,serif;
    `;

    const box = document.createElement('div');
    box.style.cssText = `
      background:${walkerWon ? '#1a0505' : '#050a1a'};
      border:3px solid ${walkerWon ? '#c03030' : '#3060c0'};
      border-radius:12px;padding:40px 60px;
      max-width:600px;text-align:center;
      box-shadow:0 0 80px ${walkerWon ? 'rgba(200,0,0,0.5)' : 'rgba(0,100,255,0.5)'};
    `;

    box.innerHTML = walkerWon ? `
      <div style="font-size:48px;margin-bottom:16px;">💀</div>
      <div style="font-size:28px;color:#ff4040;margin-bottom:12px;">Walker conquistó Centroamérica</div>
      <div style="font-size:15px;color:#c06060;line-height:1.6;margin-bottom:24px;">
        Los ejércitos aliados no pudieron resistir la avanzada filibustera.<br>
        La historia tomó otro rumbo...
      </div>
      <div style="font-size:13px;color:#804040;margin-bottom:28px;font-style:italic;">
        "¡Centroamérica es mía!" — William Walker
      </div>
    ` : `
      <div style="font-size:48px;margin-bottom:16px;">🏆</div>
      <div style="font-size:28px;color:#60a0ff;margin-bottom:12px;">¡Centroamérica Libre!</div>
      <div style="font-size:15px;color:#80b0ff;line-height:1.6;margin-bottom:24px;">
        Los ejércitos de Guatemala, El Salvador, Honduras, Nicaragua y Costa Rica<br>
        expulsaron a Walker y defendieron la soberanía centroamericana.
      </div>
      <div style="font-size:13px;color:#4060a0;margin-bottom:28px;font-style:italic;">
        "¡Viva Centroamérica libre!" — Coalición Aliada, Mayo 1857
      </div>
    `;

    const btnWrap = document.createElement('div');
    btnWrap.style.cssText = 'display:flex;gap:16px;justify-content:center;';

    const btnPlay = document.createElement('button');
    btnPlay.style.cssText = `
      background:${walkerWon?'#3a0808':'#081830'};
      border:1px solid ${walkerWon?'#c03030':'#3060c0'};
      border-radius:6px;color:${walkerWon?'#ff8080':'#80b0ff'};
      font-family:Georgia,serif;font-size:14px;
      padding:10px 24px;cursor:pointer;
    `;
    btnPlay.textContent = '🔄 Jugar de nuevo';
    btnPlay.onclick = () => { overlay.remove(); this.scene.start('IntroScene'); };

    btnWrap.appendChild(btnPlay);
    box.appendChild(btnWrap);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
  }
}
