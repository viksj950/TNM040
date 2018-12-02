export default class loadState extends Phaser.State {
  preload() {
    this.loadingBar = this.add.sprite(112, 300, 'loadingBar');
    this.load.setPreloadSprite(this.loadingBar);

<<<<<<< HEAD
    this.game.load.image('player', './assets/images/William_walk2.png');
=======
    // let loadingLabel = this.game.add.text(80, 150, 'loading...',
    //     {font: '30px Indie Flower', fill: '#afdfdd'});

    // load assets
    this.game.load.image('player', './assets/images/epple.png');
>>>>>>> refs/remotes/origin/dev
    this.game.load.image('obstacle', './assets/images/boll.png');
    this.game.load.image('startButton','./assets/images/startbuttonup.png');

    this.game.load.image('gameBackground', './assets/images/gameBackground.png');
    this.game.load.image('floor', './assets/images/floor.png');
    this.game.load.atlasJSONHash('william', './assets/images/william.png', './assets/images/william.json');


    this.game.load.atlasJSONHash('pen', './assets/images/pen_sheet.png', './assets/images/pen_sheet.json');

    this.game.load.audio('startljud','./assets/sound/startknapptryckning.wav');
    this.game.load.audio('hurtljud','./assets/sound/hurt.wav');
  }

  create() {
    this.loadingBar.cropEnabled = false;
    this.game.state.start('menu');
  }

}