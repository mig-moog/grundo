// The truest grundo you'll ever see
export default class Ob extends Phaser.Physics.Arcade.Sprite {
    keys;

    /**
     * @param {Phaser.Scene} scene 
     * @param {number} x 
     * @param {number} y 
     * @param {Phaser.Types.Input.Keyboard.CursorKeys} keys
     */
    constructor(scene, x, y, keys) {
        super(scene, x, y, 'ob', 0);

        this.keys = keys;

        scene.add.existing(this);
        scene.physics.add.existing(this);
    }

    preUpdate(t, dt) {
        const k = this.keys;

        if (k.left.isDown && k.right.isDown) {
            // this.play('idle', true);
        } else if (k.left.isDown) {
            this/* .play('walk', true) */
                .setFlipX(true)
                .setVelocityX(-35);
        } else if (k.right.isDown) {
            this/* .play('walk', true) */
                .setFlipX(false)
                .setVelocityX(35);
        } else {
            this/* .play('idle', true) */
                .setVelocityX(0);
        }

        super.preUpdate(t, dt);
    }
}