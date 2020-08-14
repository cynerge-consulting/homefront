import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene {

  constructor() {
    super('preloader')
  }

  preload() {
    // character sprite
    this.load.spritesheet('character', 'assets/images/character24x24x8.png', { frameWidth: 24, frameHeight: 24 });
    // tunnel tiles
    this.load.image('tiles', 'assets/maps/tunnel.png');
    // tunnel map in json format
    this.load.tilemapTiledJSON('tunnel_1', 'assets/maps/tunnel_1.json');
  }

  create() {
    this.scene.start('game')
  }

}
