import Phaser from 'phaser'

let player

export default class Game extends Phaser.Scene {

  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys

  constructor(
  ) {
    super('game')
  }

  preload() {
    this.cursors = this.input.keyboard.createCursorKeys()
  }

  create() {

    // background sprite
    let bg = this.add.tileSprite(0, 0, window.innerWidth * 2, window.innerHeight * 2, 'bg');

    // player sprite
    player = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'character');
    this.physics.world.enable(player)
    this.physics.world.enableBody(player, Phaser.Physics.Arcade.DYNAMIC_BODY)

    // animations
    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('character', {
        frames: [0, 1]
      }),
      frameRate: 2,
      repeat: -1
    });
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('character', {
        frames: [6, 7]
      }),
      frameRate: 2,
      repeat: -1
    });
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('character', {
        frames: [4, 5]
      }),
      frameRate: 2,
      repeat: -1
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('character', {
        frames: [2, 3]
      }),
      frameRate: 10,
      repeat: -1
    });
    player.play('down');

    // keyboard input
    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update(time: number) {
    player.body.setVelocity(0);
    // horizontal movement
    if (this.cursors.left.isDown) {
      player.body.setVelocityX(-100);
    } else if (this.cursors.right.isDown) {
      player.body.setVelocityX(100);
    }
    // vertical movement
    if (this.cursors.up.isDown) {
      player.body.setVelocityY(-100);
    } else if (this.cursors.down.isDown) {
      player.body.setVelocityY(100);
    }
    // directional animations
    if (this.cursors.left.isDown) {
      player.play('left');
    } else if (this.cursors.right.isDown) {
      player.play('right');
    } else if (this.cursors.up.isDown) {
      player.play('up');
    } else if (this.cursors.down.isDown) {
      player.play('down');
    }
  }

}
