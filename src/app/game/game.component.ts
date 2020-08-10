import Phaser from 'phaser';
import { Component, OnInit } from '@angular/core';
import Preloader from './scenes/Preloader'
import Game from './scenes/Game'

// phaser vars
let game;
let config;
let that;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  constructor() {
    config = {
      type: Phaser.AUTO,
      parent: 'content',
      width: window.innerWidth,
      height: window.innerHeight,
      disableContextMenu: true,
      physics: {
        default: 'arcade',
        arcade: {
          timeScale: 1,
          fps: 60,
          gravity: {
            y: 0
          },
          debug: false // set to true to view zones
        }
      },
      scene: [Preloader, Game]
    };

    game = new Phaser.Game(config);

    that = Object.create(this.constructor.prototype);
  }

  ngOnInit() {
  }

}
