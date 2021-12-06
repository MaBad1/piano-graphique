
class Tableau1 extends Phaser.Scene{

    preload(){
        this.load.image('bg', 'assets/bg.jpg');

    }

    create(){
        let background=this.add.image(0,0, 'bg').setOrigin(0,0);
        background.scale=0.7;
    }
}
