import Player from "../objects/Player.js";

export default class MainScene extends Phaser.Scene {
    /**@type {Player} the incredible */
    player;
    /**@type {Phaser.Types.Input.Keyboard.CursorKeys} */
    keys;

    create() {
        this.keys = this.input.keyboard.createCursorKeys();
        
        this.player = new Player(this, this.scale.width / 2, this.scale.height / 2, this.keys);
    }

    update() {
       
    }

    constructor() { super('main'); }
}