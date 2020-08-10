import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {

  constructor() {
    super('preloader')
  }

  preload() {
    this.load.spritesheet('character', 'assets/images/character24x24x8.png', { frameWidth: 24, frameHeight: 24 });
    this.load.image('bg', 'assets/images/bg.png');
  }

  create() {
    this.scene.start('game')
  }

}
