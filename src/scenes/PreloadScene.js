import Phaser from 'phaser';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    // Loading bar
    const width = this.scale.width;
    const height = this.scale.height;

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x2a1800, 0.8);
    progressBox.fillRect(width / 2 - 160, height / 2 - 15, 320, 30);

    const loadingText = this.add.text(width / 2, height / 2 - 50, 'Cargando...', {
      fontFamily: 'Georgia',
      fontSize: '18px',
      color: '#d4a843',
      letterSpacing: 4,
    }).setOrigin(0.5);

    const subtitleText = this.add.text(width / 2, height / 2 + 40, 'La Campaña Nacional 1856–1857', {
      fontFamily: 'Georgia',
      fontSize: '13px',
      color: '#a07830',
      letterSpacing: 3,
    }).setOrigin(0.5);

    this.load.on('progress', (value) => {
      progressBar.clear();
      progressBar.fillStyle(0xd4a843, 1);
      progressBar.fillRect(width / 2 - 156, height / 2 - 11, 312 * value, 22);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      subtitleText.destroy();
    });

    // Generate terrain textures procedurally (no external assets needed for Sprint 1)
    this.generateTerrainTextures();
  }

  generateTerrainTextures() {
    // We'll generate hex textures via Graphics in MapScene
    // Just create a tiny placeholder key so PreloadScene has something to do
    const g = this.make.graphics({ x: 0, y: 0, add: false });
    g.fillStyle(0xffffff);
    g.fillRect(0, 0, 1, 1);
    g.generateTexture('pixel', 1, 1);
    g.destroy();
  }

  create() {
    this.scene.start('IntroScene');
  }
}
