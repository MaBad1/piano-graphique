
class Tableau1 extends Phaser.Scene{

    preload(){
        /**Chargement des Backgrounds*/
        this.load.image('bg', 'assets/bg.jpg');
        this.load.image('bgb', 'assets/bgbrume.png');
        this.load.image('bgp', 'assets/bgpluie.png');
        this.load.image('bgn', 'assets/bgneige.png');

        /**Chargement de la brume*/
        this.load.image('brume', 'assets/brume.png');

        /**Boucle de chargement de la pluie*/
        for(let q=1;q<=3;q++){
            this.load.image('rain'+q, 'assets/rain/frame'+q+'.png');
        }

        /**Boucle de chargement de la neige*/
        for(let q=1;q<=5;q++){
            this.load.image('snow'+q, 'assets/snow/frame-'+q+'.png');
        }

        /**Boucle de chargement des champignons*/
        for(let q=1;q<=5;q++){
            this.load.image('mush'+q, 'assets/mush/mush'+q+'.png');
        }

        /**Boucle de chargement des fleurs*/
        for(let q=1;q<=5;q++){
            this.load.image('fleur'+q, 'assets/fleurs/fleur'+q+'.png');
        }

        /**Boucle de chargement des papillons*/
        for(let q=1;q<=4;q++){
            this.load.image('butt'+q, 'assets/paps/butt'+q+'.png');
        }

        /**Chargement des animaux*/
        this.load.image('cerf', 'assets/animaux/cerf.png');
        this.load.image('ours', 'assets/animaux/ours.png');
        this.load.image('renard', 'assets/animaux/renard.png');
        this.load.image('ecureuil', 'assets/animaux/ecureuil.png');
        this.load.image('loup', 'assets/animaux/loup.png');


        /**Chargement des particules*/
        this.load.image('part', 'assets/yellow.png');
        this.load.image('part2', 'assets/white.png');

        /**Chargement de la musique*/
        this.load.audio('music','assets/nwn-silversalecompany.mp3');

    }

    create(){
        /**Crééation des backgrounds*/
        this.background=this.add.sprite(0,0, 'bg').setOrigin(0,0);
        this.background.scale=0.7;
        this.background.setVisible(true);

        this.backbrume=this.add.sprite(0,0, 'bgb').setOrigin(0,0);
        this.backbrume.scale=0.7;
        this.backbrume.setVisible(false);

        this.backneige=this.add.sprite(0,0, 'bgn').setOrigin(0,0);
        this.backneige.scale=0.7;
        this.backneige.setVisible(false);

        this.backpluie=this.add.sprite(0,0, 'bgp').setOrigin(0,0);
        this.backpluie.scale=0.7;
        this.backpluie.setVisible(false);


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
        this.fleur1.scale=0.07;

        this.fleur2=this.add.sprite(600,600, 'fleur2').setOrigin(0,0);
        this.fleur2.setVisible(true);
        this.fleur2.scale=0.1;

        this.fleur3=this.add.sprite(850, 650, 'fleur3').setOrigin(0,0);
        this.fleur3.setVisible(true);
        this.fleur3.scale=0.15;

        this.fleur4=this.add.sprite(800,560, 'fleur4').setOrigin(0,0);
        this.fleur4.setVisible(true);
        this.fleur4.scale=0.15;

        this.fleur5=this.add.sprite(680,450, 'fleur5').setOrigin(0,0);
        this.fleur5.setVisible(true);
        this.fleur5.scale=0.07;

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

        /**Création des sprites d'animaux'*/
        this.cerf=this.add.sprite(650,250, 'cerf').setOrigin(0,0);
        this.cerf.setVisible(false);
        this.cerf.scale=0.6;

        this.loup=this.add.sprite(680,450, 'loup').setOrigin(0,0);
        this.loup.setVisible(false);
        this.loup.scale=0.4;

        this.ecureuil=this.add.sprite(780,680, 'ecureuil').setOrigin(0,0);
        this.ecureuil.setVisible(false);
        this.ecureuil.scale=0.05;

        this.ours=this.add.sprite(650,430, 'ours').setOrigin(0,0);
        this.ours.setVisible(false);
        this.ours.scale=1;

        this.renard=this.add.sprite(1000,450, 'renard').setOrigin(0,0);
        this.renard.setVisible(false);
        this.renard.scale=0.2;


        /**Création du sprite de brume*/
        this.brume=this.add.sprite(0,50, 'brume').setOrigin(0,0);
        this.brume.setVisible(false);
        this.brume.scale=0.7;

        /**Création de l'animation de pluie*/
        this.rainAnim = this.add.sprite(0, 0, 'rain1').setOrigin(0,0);
        this.anims.create({
            key: 'rain',
            frames: [
                {key:'rain1'},
                {key:'rain2'},
                {key:'rain3'},
            ],
            frameRate: 13,
            repeat: -1
        });
        this.rainAnim.play('rain');
        this.rainAnim.scale=1.4;
        this.rainAnim.setVisible(false);

        /**Création de l'animation de neige*/
        this.snowAnim = this.add.sprite(0, 0, 'snow1').setOrigin(0,0);
        this.anims.create({
            key: 'snow',
            frames: [
                {key:'snow1'},
                {key:'snow2'},
                {key:'snow3'},
                {key:'snow4'},
                {key:'snow5'},
            ],
            frameRate: 13,
            repeat: -1
        });
        this.snowAnim.play('snow');
        this.snowAnim.scale=1.4;
        this.snowAnim.setVisible(false);


        /**Création des particules jaunes*/
        this.part = this.add.particles('part');
        this.part.setVisible(false);

        /**Création de l'émetteur jaune*/
        this.emitter = this.part.createEmitter({
            speed: 100,
            lifespan: 20000,
            scale: { start: 0.5, end: 0.1 },
            blendMode: 'ADD'

        });
        this.emitter.start(0,0);

        /**Création des particules blanches*/
        this.part2 = this.add.particles('part2');
        this.part2.setVisible(false);

        /**Création de l'émetteur blanc*/
        this.emitter2 = this.part2.createEmitter({
            speed: 100,
            scale: 0.1,
            lifespan: 20000,
            blendMode: 'ADD'
        });
        this.emitter2.setPosition(750,800);
        this.emitter2.start();

        /**paramètres de la musique*/
        this.music=this.sound.add('music',{loop: false});
        this.music.volume=0.6;

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

                /**Inputs pour le changement de mood (Q-F)*/
                case Phaser.Input.Keyboard.KeyCodes.Q: /**Inputs pour le beau temps*/
                    if (me.background.visible == false) {
                        me.background.setVisible(true);
                        me.backbrume.setVisible(false);
                        me.backneige.setVisible(false);
                        me.backpluie.setVisible(false);
                        me.brume.setVisible(false);
                        me.snowAnim.setVisible(false);
                        me.rainAnim.setVisible(false);
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.S: /**Inputs pour la pluie*/
                    if (me.backpluie.visible == false) {
                        me.backpluie.setVisible(true);
                        me.backbrume.setVisible(false);
                        me.backneige.setVisible(false);
                        me.background.setVisible(false);
                        me.brume.setVisible(false);
                        me.snowAnim.setVisible(false);
                        me.rainAnim.setVisible(true);
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.D: /**Inputs pour la neige*/
                    if (me.backneige.visible == false) {
                        me.backneige.setVisible(true);
                        me.backbrume.setVisible(false);
                        me.background.setVisible(false);
                        me.backpluie.setVisible(false);
                        me.brume.setVisible(false);
                        me.snowAnim.setVisible(true);
                        me.rainAnim.setVisible(false);
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.F: /**Inputs pour la brume*/
                    if (me.backbrume.visible == false) {
                        me.backbrume.setVisible(true);
                        me.background.setVisible(false);
                        me.backneige.setVisible(false);
                        me.backpluie.setVisible(false);
                        me.brume.setVisible(true);
                        me.snowAnim.setVisible(false);
                        me.rainAnim.setVisible(false);
                    }
                    break;

                /**Inputs pour l'affichage/ disparition des animaux (G-L)*/

                case Phaser.Input.Keyboard.KeyCodes.G: /**Inputs pour le cerf*/
                    if (me.cerf.visible == false) {
                        me.cerf.setVisible(true);
                        me.ours.setVisible(false);
                        me.renard.setVisible(false);
                        me.loup.setVisible(false);
                        me.ecureuil.setVisible(false);
                    }
                    else  {
                        me.cerf.setVisible(false)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.H: /**Inputs pour le renard*/
                    if (me.renard.visible == false) {
                        me.renard.setVisible(true);
                        me.ours.setVisible(false);
                        me.cerf.setVisible(false);
                        me.loup.setVisible(false);
                        me.ecureuil.setVisible(false);
                    }
                    else  {
                        me.renard.setVisible(false)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.J: /**Inputs pour le loup*/
                    if (me.loup.visible == false) {
                        me.loup.setVisible(true);
                        me.ours.setVisible(false);
                        me.cerf.setVisible(false);
                        me.renard.setVisible(false);
                        me.ecureuil.setVisible(false);
                    }
                    else  {
                        me.loup.setVisible(false)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.K: /**Inputs pour l'ours*/
                    if (me.ours.visible == false) {
                        me.ours.setVisible(true);
                        me.renard.setVisible(false);
                        me.cerf.setVisible(false);
                        me.loup.setVisible(false);
                        me.ecureuil.setVisible(false);
                    }
                    else  {
                        me.ours.setVisible(false)
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.L: /**Inputs pour l'ecureuil*/
                    if (me.ecureuil.visible == false) {
                        me.ecureuil.setVisible(true);
                        me.ours.setVisible(false);
                        me.cerf.setVisible(false);
                        me.loup.setVisible(false);
                        me.renard.setVisible(false);
                    }
                    else  {
                        me.ecureuil.setVisible(false)
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

                /**Inputs pour l'affichage des particules blanches au premier plan (B-N)*/

                case Phaser.Input.Keyboard.KeyCodes.B:
                    if (me.part2.visible == false) {
                        me.part2.setVisible(true);
                        me.music.play();
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.N:
                    if (me.part2.visible == true) {
                        me.part2.setVisible(false);
                        me.music.stop();
                    }
                    break;

                /**Inputs pour l'affichage des particules jaunes au premier plan*/
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
