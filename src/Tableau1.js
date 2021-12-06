
class Tableau1 extends Phaser.Scene{

    preload(){
        /**Chargement du Background*/
        this.load.image('bg', 'assets/bg.jpg');

        for(let q=2;q<=5;q++){
            this.load.image('mush'+q, 'assets/mush/mush'+q+'.jpg');
        }
        this.load.image('mush1', 'assets/mush/mush1.png');

        for(let q=1;q<=4;q++){
            this.load.image('fleur'+q, 'assets/fleurs/fleur'+q+'.jpg');
        }
        this.load.image('fleur5', 'assets/fleurs/fleur5.png');

        this.load.image('butt1', 'assets/paps/butt1.png');
        for(let q=2;q<=4;q++){
            this.load.image('butt'+q, 'assets/paps/butt'+q+'.jpg');
        }

    }

    create(){
        let background=this.add.image(0,0, 'bg').setOrigin(0,0);
        background.scale=0.7;

        this.mush1=this.add.sprite(800,500, 'mush1').setOrigin(0,0);
        this.mush1.setVisible(false);
        this.mush1.scale=0.05;

        this.mush2=this.add.sprite(700,600, 'mush2').setOrigin(0,0);
        this.mush2.setVisible(false);
        this.mush2.scale=0.08;

        this.mush3=this.add.sprite(900,610, 'mush3').setOrigin(0,0);
        this.mush3.setVisible(false);
        this.mush3.scale=0.05;

        this.mush4=this.add.sprite(1100,510, 'mush4').setOrigin(0,0);
        this.mush4.setVisible(false);
        this.mush4.scale=0.09;

        this.mush5=this.add.sprite(900,560, 'mush5').setOrigin(0,0);
        this.mush5.setVisible(false);
        this.mush5.scale=0.1;

        this.fleur1=this.add.sprite(970,530, 'fleur1').setOrigin(0,0);
        this.fleur1.setVisible(true);
        this.fleur1.scale=0.1;

        this.fleur2=this.add.sprite(600,600, 'fleur2').setOrigin(0,0);
        this.fleur2.setVisible(true);
        this.fleur2.scale=0.1;

        this.fleur3=this.add.sprite(850, 650, 'fleur3').setOrigin(0,0);
        this.fleur3.setVisible(true);
        this.fleur3.scale=0.1;

        this.fleur4=this.add.sprite(800,560, 'fleur4').setOrigin(0,0);
        this.fleur4.setVisible(true);
        this.fleur4.scale=0.1;

        this.fleur5=this.add.sprite(680,450, 'fleur5').setOrigin(0,0);
        this.fleur5.setVisible(true);
        this.fleur5.scale=0.1;

        this.initKeyboard();

    }

    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    if (me.mush1.visible == true) {
                        me.mush1.setVisible(false)
                    }
                    else  {
                        me.mush1.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    if (me.mush2.visible == true) {
                        me.mush2.setVisible(false)
                    }
                    else  {
                        me.mush2.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    if (me.mush3.visible == true) {
                        me.mush3.setVisible(false)
                    }
                    else  {
                        me.mush3.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.R:
                    if (me.mush4.visible == true) {
                        me.mush4.setVisible(false)
                    }
                    else  {
                        me.mush4.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.T:
                    if (me.mush5.visible == true) {
                        me.mush5.setVisible(false)
                    }
                    else  {
                        me.mush5.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    if (me.fleur1.visible == true) {
                        me.fleur1.setVisible(false)
                    }
                    else  {
                        me.fleur1.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.U:
                    if (me.fleur2.visible == true) {
                        me.fleur2.setVisible(false)
                    }
                    else  {
                        me.fleur2.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.I:
                    if (me.fleur3.visible == true) {
                        me.fleur3.setVisible(false)
                    }
                    else  {
                        me.fleur3.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.O:
                    if (me.fleur4.visible == true) {
                        me.fleur4.setVisible(false)
                    }
                    else  {
                        me.fleur4.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    if (me.fleur5.visible == true) {
                        me.fleur5.setVisible(false)
                    }
                    else  {
                        me.fleur5.setVisible(true)
                    }
                    break;
            }
        });

    }

}
