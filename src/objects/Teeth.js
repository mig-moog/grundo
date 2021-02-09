export default class Teeth extends Phaser.Physics.Arcade.Group {

    /**
     * @param {Phaser.Scene} scn 
     */
    constructor(scn) {
        super(scn.physics.world, scn, [], { classType: Phaser.GameObjects.Sprite });

        for (let i = 0; i < 5; i++) {
            this.create(15 + (i * 70), 0, 'toptooth', 0, true, true)
            this.create(15 + (i * 70), 180, 'btmtooth', 0, true, true);
        }

        this.children.iterate(e => {
            e.body
                .setAllowGravity(false)
                .setImmovable(true);
        });
    }
}