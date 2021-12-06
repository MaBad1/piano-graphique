
class Tableau1 extends Phaser.Scene{

    preload(){
        /**Chargement du Background*/
        this.load.image('bg', 'assets/bg.jpg');

        /**Boucle de chargement des champignons*/
        for(let q=2;q<=5;q++){
            this.load.image('mush'+q, 'assets/mush/mush'+q+'.jpg');
        }
        this.load.image('mush1', 'assets/mush/mush1.png');

        /**Boucle de chargement des fleurs*/
        for(let q=1;q<=4;q++){
            this.load.image('fleur'+q, 'assets/fleurs/fleur'+q+'.jpg');
        }
        this.load.image('fleur5', 'assets/fleurs/fleur5.png');

        /**Boucle de chargement des papillons*/
        this.load.image('butt1', 'assets/paps/butt1.jpg');
        for(let q=2;q<=4;q++){
            this.load.image('butt'+q, 'assets/paps/butt'+q+'.png');
        }

        this.load.image('part', 'assets/yellow.png');

    }

    create(){
        /**Affichage du background*/
        let background=this.add.image(0,0, 'bg').setOrigin(0,0);
        background.scale=0.7;

        /**Création des sprites de champignons en les rendant invisibles*/
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

        /**Création des sprites des fleurs en les laissant affichées*/
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

        /**Création des sprites des papillons en les rendant invisibles*/
        this.butt1=this.add.sprite(550,430, 'butt1').setOrigin(0,0);
        this.butt1.setVisible(false);
        this.butt1.scale=0.05;

        this.butt2=this.add.sprite(850,10, 'butt2').setOrigin(0,0);
        this.butt2.setVisible(false);
        this.butt2.scale=0.1;

        this.butt3=this.add.sprite(580,130, 'butt3').setOrigin(0,0);
        this.butt3.setVisible(false);
        this.butt3.scale=0.2;
        this.butt3.flipX=true;

        this.butt4=this.add.sprite(1200,100, 'butt4').setOrigin(0,0);
        this.butt4.setVisible(false);
        this.butt4.scale=0.2;

        /**Création des particules*/
        this.part = this.add.particles('part');
        this.part.setVisible(false)

        /**Création de l'émetteur*/
        this.emitter = this.part.createEmitter({
            speed: 100,
            lifespan: 20000,
            scale: { start: 0.5, end: 0.1 },
            blendMode: 'ADD'

        });
        this.emitter.start(0,0)



        /**Initialisation de la fonction 'initKeyboard'*/
        this.initKeyboard();

    }

    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                /**Inputs pour l'affichage/ disparition des champignons (A-T)*/
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
                /**Inputs pour l'affichage/ disparition des fleurs (Y-P)*/
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

                /**Inputs pour l'affichage/ disparition des papillons (W-V)*/
                case Phaser.Input.Keyboard.KeyCodes.W:
                    if (me.butt1.visible == true) {
                        me.butt1.setVisible(false)
                    }
                    else  {
                        me.butt1.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    if (me.butt2.visible == true) {
                        me.butt2.setVisible(false)
                    }
                    else  {
                        me.butt2.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.C:
                    if (me.butt3.visible == true) {
                        me.butt3.setVisible(false)
                    }
                    else  {
                        me.butt3.setVisible(true)
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.V:
                    if (me.butt4.visible == true) {
                        me.butt4.setVisible(false)
                    }
                    else  {
                        me.butt4.setVisible(true)
                    }
                    break;

                /**Inputs pour l'affichage des particules au premier plan*/
                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.part.setVisible(true)
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                /**Inputs pour la disparition des particules au premier plan*/
                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.part.setVisible(false)
                    break;
            }
        });

    }

}
