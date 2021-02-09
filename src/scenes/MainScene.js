import Ob from "../objects/Ob.js";
import Teeth from "../objects/Teeth.js";

export default class MainScene extends Phaser.Scene {
    /**@type {Ob} the incredible */
    ob;
    /**@type {Teeth} */
    teeth;
    /**@type {Phaser.Types.Input.Keyboard.CursorKeys} */
    keys;

    // debug for player's accel and vel
    debugText;

    create() {
        this.ob = new Ob(this, this.scale.width / 2, this.scale.height / 2, this.input.keyboard.createCursorKeys());
        // this.debugText = this.add.text(this.scale.width / 2, this.scale.height / 2, this.ob.body.acceleration.y.toString(), { backgroundColor: '#000000' });

        this.teeth = new Teeth(this);

        this.physics.add.collider(this.ob, this.teeth);
    }

    update() {
        
    }

    realignTeeth() {

    }

    constructor() { super('main'); }
}