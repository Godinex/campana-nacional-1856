import Phaser from 'phaser';
import { MapScene } from './scenes/MapScene.js';
import { PreloadScene } from './scenes/PreloadScene.js';

const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 750,
  backgroundColor: '#1a0f00',
  parent: 'game-container',
  scene: [PreloadScene, MapScene],
  render: {
    antialias: true,
    pixelArt: false,
  },
};

const game = new Phaser.Game(config);
export default game;
