export default class MainScene extends Phaser.Scene {
    /**@type {Phaser.GameObjects.Sprite} the incredible */
    grundo;
    /**@type {object} */
    keys;
    
    create() {
        this.grundo = this.add.rectangle(this.scale.width/2, this.scale.height/2, 32, 32);
        this.physics.add.existing(this.grundo);
    }

    update() {
        
    }
    
    constructor() { super('main'); }
}