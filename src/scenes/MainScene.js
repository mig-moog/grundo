import { Ob } from "../objects/Ob.js";
import { Teeth } from "../objects/Teeth.js";

export default class MainScene extends Phaser.Scene {
    /**@type {Ob} the incredible */
    ob;
    /**@type {Phaser.Physics.Arcade.StaticGroup} */
    teethLimits;
    /**@type {Phaser.Types.Input.Keyboard.CursorKeys} */
    keys;
    teeth;
    stopZone;

    debugText;

    create() {
        const center = new Phaser.Geom.Point(this.scale.width / 2, this.scale.height / 2);

        this.ob = new Ob(this, center.x, center.y, this.input.keyboard.createCursorKeys());
        this.teeth = new Teeth(this);
        this.stopZone = this.add.zone(0, center.y, this.scale.width, 1).setOrigin(0, 0);
        this.physics.add.existing(this.stopZone, true);

        /* for (let i = 0; i < 5; i++) {
            this.teeth.push(new Teeth(this, 15 + (i * 70)));
        } */

        this.physics.add.collider(this.ob, this.teeth, (ob, tooth) => {
            if (tooth.name === 'btm') {
                tooth.setVelocityY(-50);
            } else {

            }
        });
        this.physics.add.collider(this.stopZone, this.teeth, (stopZone, tooth) => {
            tooth.body.stop();
            if (tooth.name === 'btm') {
                tooth.setVelocityY(50);
            } else {

            }
        });
    }

    update(t, dt) {
        /* for (const tooth in this.teeth) {
            if (tooth.y <= this.scale.width / 2 && tooth.name === 'btm') {
                tooth.body.stop();
            }
        } */
    }

    constructor() { super('main'); }
}