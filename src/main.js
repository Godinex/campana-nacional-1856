import Phaser from 'phaser';
import { PreloadScene } from './scenes/PreloadScene.js';
import { IntroScene }   from './scenes/IntroScene.js';
import { GameScene }    from './scenes/GameScene.js';

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: '#080400',
  parent: 'game-canvas',
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [PreloadScene, IntroScene, GameScene],
  render: {
    antialias: true,
    pixelArt: false,
  },
};

const game = new Phaser.Game(config);
export default game;
