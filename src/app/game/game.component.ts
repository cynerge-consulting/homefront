declare var Phaser;
import { Component, OnInit } from '@angular/core';

// phaser vars
let game;
let player;
let bg;
let cursors;
let that;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  constructor() {
    game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game', {
      preload: this.preload,
      create: this.create,
      update: this.update,
      render: this.render
    });
    that = Object.create(this.constructor.prototype);
  }

  ngOnInit() {
  }

  preload() {
    game.load.spritesheet('character', 'assets/images/character24x24x8.png', 24, 24);
    game.load.image('bg', 'assets/images/bg.png');
  }

  create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // background sprite
    bg = game.add.tileSprite(0, 0, window.innerWidth, window.innerHeight, 'bg');

    // player sprite
    player = game.add.sprite(window.innerWidth / 2, window.innerHeight / 2, 'character', 1);
    player.animations.add('up', [0, 1], 2, true);
    player.animations.add('right', [2, 3], 2, true);
    player.animations.add('left', [4, 5], 2, true);
    player.animations.add('down', [6, 7], 2, true);
    player.play('down');
    player.anchor.setTo(0.5, 0.5);
    game.physics.enable(player, Phaser.Physics.ARCADE);

    // phaser input
    cursors = game.input.keyboard.createCursorKeys();
  }

  update() {
    if (player.alive) {
      player.body.velocity.setTo(0, 0);
      if (cursors.left.isDown) {
        player.play('left');
        player.body.velocity.x += -200;
      }
      if (cursors.right.isDown) {
        player.play('right')
        player.body.velocity.x += 200;
      }
      if (cursors.up.isDown) {
        player.play('up')
        player.body.velocity.y += -200;
      }
      if (cursors.down.isDown) {
        player.play('down')
        player.body.velocity.y += 200;
      }
    }
  }

  render() {}

}
