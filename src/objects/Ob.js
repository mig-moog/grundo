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

        this.setBodySize(10, 16).setBounceY(0.65).setMaxVelocity(250);
    }

    preUpdate(t, dt) {
        const k = this.keys;
        const touchDown = this.body.touching.down || this.body.blocked.down;

        if (k.left.isDown && k.right.isDown) {
            // this.play('idle', true);
        } else if (k.left.isDown) {
            this/* .play('walk', true) */
                .setFlipX(true)
                .setVelocityX(-50.5);
        } else if (k.right.isDown) {
            this/* .play('walk', true) */
                .setFlipX(false)
                .setVelocityX(50.5);
        } else {
            this/* .play('idle', true) */
                .setVelocityX(0);
        }

        if (k.down.isDown && this.body.touching.none) {
            this.setAccelerationY(290);
        } else {
            this.setAccelerationY(0);
        }

        if (k.up.isDown && touchDown) {
            this.setVelocityY(-125);
        }

        super.preUpdate(t, dt);
    }
}