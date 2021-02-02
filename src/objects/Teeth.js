export default class Teeth extends Phaser.Physics.Arcade.Group {

    /**
     * @param {Phaser.Scene} scn 
     */
    constructor(scn) {
        super(scn.physics.world, scn);

        for (let i = 0; i < 5; i++) {
            this.addMultiple([
                scn.add.image(15 + (i * 70), 0, 'toptooth'),
                scn.add.image(15 + (i * 70), 180, 'btmtooth')
            ], true);
        }

        this.children.iterate((e, ix) => {
            e.body
                .setAllowGravity(false)
                .setImmovable(true);
        });
    }
}