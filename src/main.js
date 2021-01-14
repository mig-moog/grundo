import MainScene from "./scenes/MainScene.js";

class P extends Phaser.Scene {
    preload() {

    }

    create() {
        this.scene.switch('main');
    }
}

const game = new Phaser.Game({
    scene: [P, MainScene],
    scale: {
        width: 128,
        height: 128,
        zoom: Phaser.Scale.ZOOM_4X
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
});