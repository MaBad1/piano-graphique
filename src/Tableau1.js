
class Tableau1 extends Phaser.Scene{

    preload(){
        this.load.image('bg', 'assets/bg.jpg');
        for(let q=2;q<=5;q++){
            this.load.image('mush'+q, 'assets/mush/mush'+q+'.jpg');
        }
        this.load.image('mush1', 'assets/mush/mush1.png');
        for(let q=1;q<=4;q++){
            this.load.image('fleur'+q, 'assets/fleurs/fleur'+q+'.jpg');
        }
        this.load.image('fleur5', 'assets/fleurs/fleur5.png');

    }

    create(){
        let background=this.add.image(0,0, 'bg').setOrigin(0,0);
        background.scale=0.7;

        let mush1=this.add.image(800,500, 'mush1').setOrigin(0,0);
        mush1.scale=0.05;
        let mush2=this.add.image(700,600, 'mush2').setOrigin(0,0);
        mush2.scale=0.09;
        let mush3=this.add.image(900,610, 'mush3').setOrigin(0,0);
        mush3.scale=0.1;
        let mush4=this.add.image(1100,550, 'mush4').setOrigin(0,0);
        mush4.scale=0.05;
        let mush5=this.add.image(900,560, 'mush5').setOrigin(0,0);
        mush5.scale=0.1;
    }
}
