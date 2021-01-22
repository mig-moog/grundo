import MainScene from "./scenes/MainScene.js";

class P extends Phaser.Scene {
    preload() {
        this.load.path = 'assets/'
        this.load.aseprite('ob', 'images/ob.png', 'images/ob.json');
    }

    create() {
        this.anims.createFromAseprite('ob');
        
        this.scene.switch('main');
    }
}

const game = new Phaser.Game({
    scene: [P, MainScene],
    scale: {
        width: 320,
        height: 180,
        zoom: Phaser.Scale.ZOOM_4X
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            // gravity: 50
        }
    }
});