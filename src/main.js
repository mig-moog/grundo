import MainScene from "./scenes/MainScene.js";

class P extends Phaser.Scene {
    preload() {
        this.load.setPath('assets/');
        this.load.aseprite('ob', 'images/ob.png', 'images/ob.json');
        this.load.image('toptooth', 'images/toptooth.png');
        this.load.image('btmtooth', 'images/btmtooth.png');
    }

    create() {
        this.anims.createFromAseprite('ob');

        this.scene.switch('main');
    }
}

const game = new Phaser.Game({
    title: 'Toof',
    scene: [P, MainScene],
    scale: {
        width: 320,
        height: 180,
        zoom: Phaser.Scale.ZOOM_4X
    },
    physics: {
        default: 'arcade',
        arcade: {
            // debug: true,
            gravity: { y: 100 }
        }
    },
    backgroundColor: 'fff'
});