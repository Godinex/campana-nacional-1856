// ============================================================
// INTRO SCENE — Pantalla de inicio con selección de nivel
// ============================================================
import Phaser from 'phaser';

export class IntroScene extends Phaser.Scene {
  constructor() { super({ key: 'IntroScene' }); }

  create() {
    const W = this.scale.width;
    const H = this.scale.height;

    // Fondo
    const bg = this.add.graphics();
    bg.fillGradientStyle(0x0a0500, 0x0a0500, 0x1a0800, 0x1a0800, 1);
    bg.fillRect(0, 0, W, H);

    // Decoración — líneas horizontales estilo grabado
    const deco = this.add.graphics();
    deco.lineStyle(1, 0x5a3a10, 0.3);
    for (let y = 0; y < H; y += 18) {
      deco.beginPath(); deco.moveTo(0, y); deco.lineTo(W, y); deco.strokePath();
    }

    // Marco ornamental
    const frame = this.add.graphics();
    frame.lineStyle(2, 0xd4a843, 0.7);
    frame.strokeRect(30, 30, W - 60, H - 60);
    frame.lineStyle(1, 0x8a6020, 0.5);
    frame.strokeRect(38, 38, W - 76, H - 76);

    // Título principal
    this.add.text(W / 2, H * 0.15, 'LA CAMPAÑA NACIONAL', {
      fontFamily: 'Georgia', fontSize: '42px', color: '#d4a843',
      stroke: '#000', strokeThickness: 6,
      shadow: { offsetX: 3, offsetY: 3, color: '#000', blur: 8, fill: true },
    }).setOrigin(0.5);

    this.add.text(W / 2, H * 0.25, '1856 – 1857', {
      fontFamily: 'Georgia', fontSize: '28px', color: '#a07830',
      stroke: '#000', strokeThickness: 4,
    }).setOrigin(0.5);

    this.add.text(W / 2, H * 0.33, 'Centroamérica contra los Filibusteros', {
      fontFamily: 'Georgia', fontSize: '16px', color: '#806020',
      letterSpacing: 4,
    }).setOrigin(0.5);

    // Separador
    const sep = this.add.graphics();
    sep.lineStyle(1, 0xd4a843, 0.5);
    sep.beginPath(); sep.moveTo(W/2 - 200, H * 0.39); sep.lineTo(W/2 + 200, H * 0.39); sep.strokePath();

    // Descripción
    this.add.text(W / 2, H * 0.44, 'Responde preguntas históricas para avanzar.\nGuía a los ejércitos aliados hacia la victoria antes que Walker.', {
      fontFamily: 'Georgia', fontSize: '14px', color: '#c8a060',
      align: 'center', lineSpacing: 8,
    }).setOrigin(0.5);

    // ── Botones de nivel ─────────────────────────────────────
    this._makeBtn(W / 2 - 130, H * 0.60, '📚  PRIMARIA', '4to – 6to grado · 8 batallas', 0x1a3010, 0x7fc47f, () => {
      this.scene.start('GameScene', { level: 'primaria' });
    });

    this._makeBtn(W / 2 + 130, H * 0.60, '🎓  SECUNDARIA', '7mo – 9no grado · 12 batallas', 0x10203a, 0x60a0ff, () => {
      this.scene.start('GameScene', { level: 'secundaria' });
    });

    // Créditos
    this.add.text(W / 2, H * 0.88,
      'Basado en hechos históricos reales · Alineado a programas del MEP, MINED, SEP, MINEDUC', {
      fontFamily: 'Georgia', fontSize: '11px', color: '#604820',
      align: 'center',
    }).setOrigin(0.5);

    // Animación de entrada
    this.cameras.main.fadeIn(800, 0, 0, 0);
  }

  _makeBtn(x, y, label, sub, bgColor, borderColor, onClick) {
    const W = 220, H = 80;
    const container = this.add.container(x, y);

    const bg = this.add.graphics();
    bg.fillStyle(bgColor, 0.85);
    bg.fillRoundedRect(-W/2, -H/2, W, H, 8);
    bg.lineStyle(2, borderColor, 0.8);
    bg.strokeRoundedRect(-W/2, -H/2, W, H, 8);

    const title = this.add.text(0, -12, label, {
      fontFamily: 'Georgia', fontSize: '16px', color: '#f0e8c0',
      stroke: '#000', strokeThickness: 3,
    }).setOrigin(0.5);

    const subtitle = this.add.text(0, 18, sub, {
      fontFamily: 'Georgia', fontSize: '12px', color: '#a09060',
    }).setOrigin(0.5);

    container.add([bg, title, subtitle]);
    container.setSize(W, H);
    container.setInteractive({ useHandCursor: true });

    container.on('pointerover', () => {
      bg.clear();
      bg.fillStyle(bgColor + 0x101010, 1);
      bg.fillRoundedRect(-W/2, -H/2, W, H, 8);
      bg.lineStyle(3, borderColor, 1);
      bg.strokeRoundedRect(-W/2, -H/2, W, H, 8);
      this.tweens.add({ targets: container, scaleX: 1.05, scaleY: 1.05, duration: 120 });
    });
    container.on('pointerout', () => {
      bg.clear();
      bg.fillStyle(bgColor, 0.85);
      bg.fillRoundedRect(-W/2, -H/2, W, H, 8);
      bg.lineStyle(2, borderColor, 0.8);
      bg.strokeRoundedRect(-W/2, -H/2, W, H, 8);
      this.tweens.add({ targets: container, scaleX: 1, scaleY: 1, duration: 120 });
    });
    container.on('pointerdown', () => {
      this.cameras.main.fadeOut(400, 0, 0, 0);
      this.time.delayedCall(400, onClick);
    });
  }
}
