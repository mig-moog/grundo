export class Teeth extends Phaser.Physics.Arcade.Group {
    pairs = [];
    moving = false;

    /**@param {Phaser.Scene} scn */
    constructor(scn) {
        super(scn.physics.world, scn);

        for (let i = 0; i < 5; i++) {
            const pair = this.createMultiple([{
                key: 'toptooth',
                setXY: { x: 15 + (i * 70), y: 0 }
            }, {
                key: 'btmtooth',
                setXY: { x: 15 + (i * 70), y: 180 }
            }]);

            pair[0].setName('top');
            pair[1].setName('btm');

            this.pairs.push(pair);
        }

        this.children.iterate((e, ix) => {
            e.parent = this;
            e.ix = this;

            if (e.name === 'top')
                e.btm = this.children.entries[ix + 1];
            else
                e.top = this.children.entries[ix - 1];

            e.body
                .setImmovable(true)
                .setAllowGravity(false);
        });
    }
}