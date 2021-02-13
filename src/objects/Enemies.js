import Ob from "./Ob.js";

class Enemy extends Phaser.Physics.Arcade.Sprite {
    /**@type {Ob} */
    target;
    
    /**
     * @param {Ob} target 
     * @param {Phaser.Scene} scene 
     * @param {number} x 
     * @param {number} y 
     * @param {string} type 
     */
    constructor(target, scene, x, y, type) {
        super(scene, x, y, type, 0);

        this.target = target;
    }
}

class Grundo extends Enemy {
    constructor(target, scene, x, y, type) {
        super(target, scene, x, y, type);
    }
}