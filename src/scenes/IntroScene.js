// ============================================================
// INTRO SCENE — Selección de nivel + nombre del jugador
// ============================================================
import Phaser from 'phaser';
import { getRecords } from '../systems/Records.js';

export class IntroScene extends Phaser.Scene {
  constructor() { super({ key: 'IntroScene' }); }

  create() {
    const W = this.scale.width;
    const H = this.scale.height;
    this.W = W; this.H = H;

    this._drawBg();
    this._drawTitle();
    this._drawNameForm();
    this._drawLevelButtons();
    this._drawRecordsBtn();

    this.cameras.main.fadeIn(800, 0, 0, 0);
  }

  _drawBg() {
    const { W, H } = this;
    // Imagen histórica de fondo (mapa 1856 LOC)
    const bgImg = this.add.image(W / 2, H / 2, 'map_bg').setDisplaySize(W, H).setAlpha(0.18).setDepth(0);

    const bg = this.add.graphics().setDepth(1);
    bg.fillGradientStyle(0x0a0500, 0x0a0500, 0x180900, 0x180900, 0.92);
    bg.fillRect(0, 0, W, H);

    const deco = this.add.graphics().setDepth(2);
    deco.lineStyle(1, 0x5a3a10, 0.25);
    for (let y = 0; y < H; y += 18) {
      deco.beginPath(); deco.moveTo(0, y); deco.lineTo(W, y); deco.strokePath();
    }

    const frame = this.add.graphics().setDepth(2);
    frame.lineStyle(2, 0xd4a843, 0.7);
    frame.strokeRect(30, 30, W - 60, H - 60);
    frame.lineStyle(1, 0x8a6020, 0.4);
    frame.strokeRect(38, 38, W - 76, H - 76);
  }

  _drawTitle() {
    const { W, H } = this;
    this.add.text(W / 2, H * 0.12, 'LA CAMPAÑA NACIONAL', {
      fontFamily: 'Georgia', fontSize: '42px', color: '#d4a843',
      stroke: '#000', strokeThickness: 6,
      shadow: { offsetX: 3, offsetY: 3, color: '#000', blur: 8, fill: true },
    }).setOrigin(0.5).setDepth(5);

    this.add.text(W / 2, H * 0.21, '1856 – 1857', {
      fontFamily: 'Georgia', fontSize: '26px', color: '#a07830',
      stroke: '#000', strokeThickness: 4,
    }).setOrigin(0.5).setDepth(5);

    this.add.text(W / 2, H * 0.28, 'Centroamérica contra los Filibusteros', {
      fontFamily: 'Georgia', fontSize: '14px', color: '#806020', letterSpacing: 4,
    }).setOrigin(0.5).setDepth(5);

    const sep = this.add.graphics().setDepth(5);
    sep.lineStyle(1, 0xd4a843, 0.5);
    sep.beginPath(); sep.moveTo(W/2 - 180, H * 0.32); sep.lineTo(W/2 + 180, H * 0.32); sep.strokePath();
  }

  _drawNameForm() {
    const { W, H } = this;

    this.add.text(W / 2, H * 0.37, 'Tu nombre antes de marchar:', {
      fontFamily: 'Georgia', fontSize: '14px', color: '#c8a060',
    }).setOrigin(0.5).setDepth(5);

    // Input DOM
    const input = document.createElement('input');
    input.id = 'player-name-input';
    input.type = 'text';
    input.placeholder = 'Escribe tu nombre...';
    input.maxLength = 30;
    input.style.cssText = `
      position:absolute;
      left:50%; top:${H * 0.42}px;
      transform:translateX(-50%);
      width:280px; padding:10px 16px;
      background:#100800; border:1px solid #6a4010;
      border-radius:6px; color:#f0e0a0;
      font-family:Georgia,serif; font-size:15px;
      text-align:center; outline:none; z-index:10;
    `;
    input.onfocus = () => { input.style.borderColor = '#d4a843'; };
    input.onblur  = () => { input.style.borderColor = '#6a4010'; };
    document.body.appendChild(input);
    this._nameInput = input;

    this.events.on('shutdown', () => input.remove());
    this.events.on('destroy',  () => input.remove());
  }

  _drawLevelButtons() {
    const { W, H } = this;

    this.add.text(W / 2, H * 0.55, 'Elige tu nivel:', {
      fontFamily: 'Georgia', fontSize: '13px', color: '#806020', letterSpacing: 2,
    }).setOrigin(0.5).setDepth(5);

    this._makeBtn(W / 2 - 140, H * 0.65,
      '📚  PRIMARIA', '4to – 6to grado · 8 batallas', 0x0d2008, 0x60b060,
      () => this._startGame('primaria'));

    this._makeBtn(W / 2 + 140, H * 0.65,
      '🎓  SECUNDARIA', '7mo – 9no grado · 12 batallas', 0x081428, 0x4080c0,
      () => this._startGame('secundaria'));

    this.add.text(W / 2, H * 0.88,
      'Basado en hechos históricos reales · MEP · MINED · SEP · MINEDUC', {
      fontFamily: 'Georgia', fontSize: '11px', color: '#604820', align: 'center',
    }).setOrigin(0.5).setDepth(5);
  }

  _drawRecordsBtn() {
    const { W, H } = this;
    const records = getRecords();
    if (!records.length) return;

    const lbl = this.add.text(W / 2, H * 0.80, '📋  Ver tabla de récords', {
      fontFamily: 'Georgia', fontSize: '13px', color: '#806030',
    }).setOrigin(0.5).setDepth(5).setInteractive({ useHandCursor: true });

    lbl.on('pointerover', () => lbl.setColor('#d4a843'));
    lbl.on('pointerout',  () => lbl.setColor('#806030'));
    lbl.on('pointerdown', () => this._showRecordsOverlay());
  }

  _startGame(level) {
    const name = (this._nameInput?.value || '').trim() || 'Soldado Anónimo';
    this._nameInput?.remove();
    this.cameras.main.fadeOut(400, 0, 0, 0);
    this.time.delayedCall(400, () => {
      this.scene.start('GameScene', { level, playerName: name });
    });
  }

  _makeBtn(x, y, label, sub, bgColor, borderColor, onClick) {
    const BW = 230, BH = 82;
    const container = this.add.container(x, y).setDepth(5);

    const bg = this.add.graphics();
    const draw = (hover) => {
      bg.clear();
      bg.fillStyle(bgColor, hover ? 1 : 0.85);
      bg.fillRoundedRect(-BW/2, -BH/2, BW, BH, 8);
      bg.lineStyle(hover ? 3 : 2, borderColor, hover ? 1 : 0.8);
      bg.strokeRoundedRect(-BW/2, -BH/2, BW, BH, 8);
    };
    draw(false);

    const title = this.add.text(0, -13, label, {
      fontFamily: 'Georgia', fontSize: '16px', color: '#f0e8c0',
      stroke: '#000', strokeThickness: 3,
    }).setOrigin(0.5);

    const subtitle = this.add.text(0, 16, sub, {
      fontFamily: 'Georgia', fontSize: '12px', color: '#a09060',
    }).setOrigin(0.5);

    container.add([bg, title, subtitle]);
    container.setSize(BW, BH).setInteractive({ useHandCursor: true });

    container.on('pointerover',  () => { draw(true);  this.tweens.add({ targets: container, scaleX:1.05, scaleY:1.05, duration:120 }); });
    container.on('pointerout',   () => { draw(false); this.tweens.add({ targets: container, scaleX:1,    scaleY:1,    duration:120 }); });
    container.on('pointerdown',  onClick);
  }

  _showRecordsOverlay() {
    const records = getRecords();
    const ov = document.createElement('div');
    ov.style.cssText = `
      position:fixed;inset:0;z-index:500;background:rgba(0,0,0,0.88);
      display:flex;align-items:center;justify-content:center;font-family:Georgia,serif;
    `;
    const box = document.createElement('div');
    box.style.cssText = `
      background:#0c0600;border:2px solid #d4a843;border-radius:10px;
      padding:32px 40px;max-width:700px;width:95%;max-height:80vh;overflow-y:auto;
    `;
    let html = `<h2 style="color:#d4a843;text-align:center;margin:0 0 20px;font-size:22px;">🏅 Altos Galardones — Tabla de Honor</h2>
      <table style="width:100%;border-collapse:collapse;font-size:13px;color:#c8a060;">
        <thead><tr style="color:#d4a843;border-bottom:1px solid #5a3a10;">
          <th style="padding:8px 6px;text-align:left">#</th>
          <th style="padding:8px 6px;text-align:left">Nombre</th>
          <th style="padding:8px 6px">Nivel</th>
          <th style="padding:8px 6px">Tiempo</th>
          <th style="padding:8px 6px">Puntos</th>
          <th style="padding:8px 6px">Medallas</th>
          <th style="padding:8px 6px">Fecha</th>
        </tr></thead><tbody>`;
    records.forEach((r, i) => {
      const t = Math.floor(r.timeMs/60000) + ':' + String(Math.floor((r.timeMs%60000)/1000)).padStart(2,'0');
      html += `<tr style="border-bottom:1px solid #2a1800;">
        <td style="padding:6px">${i+1}</td>
        <td style="padding:6px;font-weight:bold;color:#f0e0a0">${r.name}</td>
        <td style="padding:6px;text-align:center">${r.level === 'primaria' ? '📚' : '🎓'}</td>
        <td style="padding:6px;text-align:center">${t}</td>
        <td style="padding:6px;text-align:center;color:#ffd060">${r.points}</td>
        <td style="padding:6px;text-align:center;font-size:18px">${r.medals || '—'}</td>
        <td style="padding:6px;text-align:center;font-size:11px;color:#806030">${r.date}</td>
      </tr>`;
    });
    html += `</tbody></table>
      <div style="text-align:center;margin-top:24px;">
        <button id="close-records" style="background:#1a0c00;border:1px solid #d4a843;border-radius:6px;
          color:#d4a843;font-family:Georgia,serif;font-size:14px;padding:8px 28px;cursor:pointer;">
          Cerrar
        </button>
      </div>`;
    box.innerHTML = html;
    ov.appendChild(box);
    document.body.appendChild(ov);
    document.getElementById('close-records').onclick = () => ov.remove();
  }
}
