import Phaser from 'phaser';
import { MapScene } from './scenes/MapScene.js';
import { PreloadScene } from './scenes/PreloadScene.js';

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: '#1a0f00',
  parent: 'game-canvas',
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [PreloadScene, MapScene],
  render: {
    antialias: true,
    pixelArt: false,
  },
};

const game = new Phaser.Game(config);
export default game;
