// ============================================================
// PRELOAD SCENE — Carga de assets + barra de progreso
// ============================================================
import Phaser from 'phaser';

export class PreloadScene extends Phaser.Scene {
  constructor() { super({ key: 'PreloadScene' }); }

  preload() {
    const W = this.scale.width;
    const H = this.scale.height;

    // Fondo de carga
    const bg = this.add.graphics();
    bg.fillStyle(0x080400, 1);
    bg.fillRect(0, 0, W, H);

    // Barra de progreso
    const barBg = this.add.graphics();
    barBg.fillStyle(0x1a0c00, 1);
    barBg.fillRoundedRect(W/2 - 200, H/2 - 16, 400, 32, 6);
    barBg.lineStyle(1, 0x5a3a10, 1);
    barBg.strokeRoundedRect(W/2 - 200, H/2 - 16, 400, 32, 6);

    const bar = this.add.graphics();
    const label = this.add.text(W/2, H/2 + 32, 'Cargando...', {
      fontFamily: 'Georgia', fontSize: '14px', color: '#806030',
    }).setOrigin(0.5);

    const title = this.add.text(W/2, H/2 - 60, 'LA CAMPAÑA NACIONAL', {
      fontFamily: 'Georgia', fontSize: '28px', color: '#d4a843',
      stroke: '#000', strokeThickness: 5,
    }).setOrigin(0.5);

    this.load.on('progress', (v) => {
      bar.clear();
      bar.fillStyle(0xd4a843, 1);
      bar.fillRoundedRect(W/2 - 196, H/2 - 12, 392 * v, 24, 4);
      label.setText(`Cargando... ${Math.floor(v * 100)}%`);
    });

    // Mapa histórico 1856 — Library of Congress (dominio público)
    // Mapa de Centroamérica de J. Baily, ~1850, incluye Nicaragua, Costa Rica, etc.
    this.load.image(
      'map_bg',
      'https://tile.loc.gov/image-services/iiif/service:gmd:gmd4:g4800:g4800:ma001000/full/1200,/0/default.jpg'
    );
  }

  create() {
    this.scene.start('IntroScene');
  }
}
