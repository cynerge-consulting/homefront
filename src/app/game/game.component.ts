// declare var Phaser;
import { Component, OnInit } from "@angular/core";
import "phaser";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.sass"],
})
export class GameComponent implements OnInit {
  constructor() {
    let game = new Phaser.Game({
      width: window.innerWidth,
      height: window.innerHeight,
      type: Phaser.AUTO,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0, x: 0 },
        },
      },
      // name: "game",
      scene: DemoScene,
    });
  }

  ngOnInit() {}
}

class DemoScene extends Phaser.Scene {
  _player: Phaser.Physics.Arcade.Sprite;
  _cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  preload() {
    this.load.spritesheet("character", "assets/images/character24x24x8.png", {
      frameWidth: 24,
      frameHeight: 24,
    });
    this.load.image("bg", "assets/images/bg.png");
  }

  create() {
    // background sprite
    this.add.tileSprite(
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerWidth,
      window.innerHeight,
      "bg"
    );

    // player sprite
    this._player = this.physics.add.sprite(
      window.innerWidth / 2,
      window.innerHeight / 2,
      "character",
      1
    );
    this._player.setBounce(0.2);
    this._player.setCollideWorldBounds(true);

    // animations
    [
      { key: "up", start: 0, end: 1 },
      { key: "right", start: 2, end: 3 },
      { key: "left", start: 4, end: 5 },
      { key: "down", start: 6, end: 7 },
    ].forEach((frame) => {
      this.anims.create({
        key: frame.key,
        frames: this.anims.generateFrameNumbers("character", {
          start: frame.start,
          end: frame.end,
        }),
        frameRate: 2,
        repeat: -1,
      });
    });
    this._player.play("down");
    this._player.originX = 0.5;
    this._player.originY = 0.5;
    this._cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this._player.active) {
      this._player.body.velocity.setTo(0, 0);
      if (this._cursors.left.isDown) {
        this._player.play("left");
        this._player.body.velocity.x += -200;
      }
      if (this._cursors.right.isDown) {
        this._player.play("right");
        this._player.body.velocity.x += 200;
      }
      if (this._cursors.up.isDown) {
        this._player.play("up");
        this._player.body.velocity.y += -200;
      }
      if (this._cursors.down.isDown) {
        this._player.play("down");
        this._player.body.velocity.y += 200;
      }
    }
  }

  render() {}
}
