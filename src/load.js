export default class loadState extends Phaser.State {
  preload() {
    let loadingLabel = this.game.add.text(80, 150, 'loading...',
        {font: '30px Courier', fill: '#afdfdd'});

    this.game.load.image('player', './assets/images/William_walk2.png');
    this.game.load.image('obstacle', './assets/images/boll.png');
	this.game.load.image('startButton','./assets/images/phaser.png');
  }

  create() {
    this.game.state.start('menu');
  }

}