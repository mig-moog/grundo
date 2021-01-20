import MainScene from "./scenes/MainScene.js";

class P extends Phaser.Scene {
    preload() {
        this.load.path = 'assets/'
        this.load.aseprite('grundo', 'images/grundo.png', 'images/grundo.json');
    }

    create() {
        this.anims.createFromAseprite('grundo');
        
        this.scene.switch('main');
    }
}

const game = new Phaser.Game({
    scene: [P, MainScene],
    scale: {
        width: 170,
        height: 128,
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