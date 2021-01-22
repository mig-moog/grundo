import Ob from "../objects/Ob.js";

export default class MainScene extends Phaser.Scene {
    /**@type {Ob} the incredible */
    ob;
    /**@type {Phaser.Types.Input.Keyboard.CursorKeys} */
    keys;

    create() {
        this.keys = this.input.keyboard.createCursorKeys();
        
        this.ob = new Ob(this, this.scale.width / 2, this.scale.height / 2, this.keys);
    }

    update() {
       
    }

    constructor() { super('main'); }
}