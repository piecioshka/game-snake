'use strict';

let Snake = {
    setMove: function (fn) {
        this.move = fn;
    },

    start() {
        this.setMove(this.moveRight);
        this.initStep();

        document.addEventListener('keydown:left', this.setMove.bind(this, this.moveLeft));
        document.addEventListener('keydown:right', this.setMove.bind(this, this.moveRight));
        document.addEventListener('keydown:top', this.setMove.bind(this, this.moveTop));
        document.addEventListener('keydown:down', this.setMove.bind(this, this.moveDown));
    },

    initStep() {
        setInterval(() => {
            this.move();
            this.checkCollisionWithDiamond();
        }, Snake.INTERVAL);
    },

    checkCollisionWithDiamond() {
        if (this.hasCollisionWith(Diamond)) {
            Diamond.setRandomPosition();
            document.dispatchEvent(new CustomEvent('player:collect'));
        }
    },

    hasCollisionWith($object) {
        return this.$elm.style.left === $object.$elm.style.left &&
            this.$elm.style.top === $object.$elm.style.top;
    },

    moveLeft() {
        let left = parseInt(this.$elm.style.left);
        let isTouchLeftWall = (left === 0);
        this.$elm.style.left = (isTouchLeftWall) ? (Game.WIDTH - Snake.WIDTH) + 'px' : (left - Snake.WIDTH) + 'px';
    },

    moveRight() {
        let left = parseInt(this.$elm.style.left);
        let isTouchRightWall = (left === Game.WIDTH - Snake.WIDTH);
        this.$elm.style.left = (isTouchRightWall) ? 0 + 'px' : (left + Snake.WIDTH) + 'px';
    },

    moveTop() {
        let top = parseInt(this.$elm.style.top);
        let isTouchTopWall = (top === 0);
        this.$elm.style.top = (isTouchTopWall) ? (Game.HEIGHT - Snake.HEIGHT) + 'px' : (top - Snake.HEIGHT) + 'px';
    },

    moveDown() {
        let top = parseInt(this.$elm.style.top);
        let isTouchDownWall = (top === Game.HEIGHT - Snake.HEIGHT);
        this.$elm.style.top = (isTouchDownWall) ? 0 + 'px' : (top + Snake.HEIGHT) + 'px';
    }
};

Snake.WIDTH = 20;
Snake.HEIGHT = 20;
Snake.INTERVAL = 200;

Object.setPrototypeOf(Snake, Block);
