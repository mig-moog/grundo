import { Ob } from "../objects/Ob.js";
import { Teeth } from "../objects/Teeth.js";

export class MainScene extends Phaser.Scene {
    /**@type {Ob} the incredible */
    ob;
    /**@type {Phaser.Physics.Arcade.StaticGroup} */
    teethLimits;
    /**@type {Teeth} */
    teeth;
    /**@type {Phaser.GameObjects.Zone} */
    stopZone;

    debugText;

    create() {
        const center = new Phaser.Geom.Point(this.scale.width / 2, this.scale.height / 2);

        this.ob = new Ob(this, center.x, center.y, this.input.keyboard.createCursorKeys());
        this.teeth = new Teeth(this);
        this.stopZone = this.add.zone(0, center.y, this.scale.width, 1).setOrigin(0, 0);
        this.physics.add.existing(this.stopZone, true);
        this.teethLimits = this.physics.add.staticGroup([
            // 24 bc it's half of a tooth's width plus 1 more for space from teethLimits
            this.add.zone(0, -24, this.scale.width, 1).setOrigin(0, 0),
            this.add.zone(0, this.scale.height + 24, this.scale.width, 1).setOrigin(0, 0)
        ]);

        this.physics.add.collider(this.ob, this.teeth, (ob, tooth) => {
            if (tooth.name === 'btm') {
                tooth.setVelocityY(-50);
            } else {
                tooth.setVelocityY(50);
            }
        });
        this.physics.add.collider(this.stopZone, this.teeth, (stopZone, tooth) => {
            tooth.body.stop();
            if (tooth.name === 'btm') {
                tooth.setVelocityY(50);
            } else {
                tooth.setVelocityY(-50);
            }
        });
        this.physics.add.collider(this.teethLimits, this.teeth, (limit, tooth) => {
            tooth.body.stop();
            if (tooth.name === 'btm') {
                tooth.setY(180);
            } else {
                tooth.setY(0);
            }
        });
    }

    update(t, dt) {

    }

    constructor() { super('main'); }
}