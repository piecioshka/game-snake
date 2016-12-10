'use strict';

let Player = {
    build() {
        let [left, top] = this.randomPosition();

        this.$elm = document.createElement('snake');
        let style = this.$elm.style;
        style.width = Player.WIDTH + 'px';
        style.height = Player.HEIGHT + 'px';
        style.left = left + 'px';
        style.top = top + 'px';
    },

    render($where) {
        Game.render.apply(this, arguments);
    },

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
        }, Player.INTERVAL);
    },

    randomPosition() {
        let horizontalBlocks = Game.WIDTH / Player.WIDTH;
        console.assert(Utils.isInteger(horizontalBlocks));

        let verticalBlocks = Game.HEIGHT / Player.HEIGHT;
        console.assert(Utils.isInteger(verticalBlocks));

        let left = Utils.getRandomInteger(0, horizontalBlocks - 1);
        let top = Utils.getRandomInteger(0, verticalBlocks - 1);

        return [left * Player.WIDTH, top * Player.HEIGHT];
    },

    moveLeft() {
        let left = parseInt(this.$elm.style.left);
        let isTouchLeftWall = (left === 0);
        this.$elm.style.left = (isTouchLeftWall) ? (Game.WIDTH - Player.WIDTH) + 'px' : (left - Player.WIDTH) + 'px';
    },

    moveRight() {
        let left = parseInt(this.$elm.style.left);
        let isTouchRightWall = (left === Game.WIDTH - Player.WIDTH);
        this.$elm.style.left = (isTouchRightWall) ? 0 + 'px' : (left + Player.WIDTH) + 'px';
    },

    moveTop() {
        let top = parseInt(this.$elm.style.top);
        let isTouchTopWall = (top === 0);
        this.$elm.style.top = (isTouchTopWall) ? (Game.HEIGHT - Player.HEIGHT) + 'px' : (top - Player.HEIGHT) + 'px';
    },

    moveDown() {
        let top = parseInt(this.$elm.style.top);
        let isTouchDownWall = (top === Game.HEIGHT - Player.HEIGHT);
        this.$elm.style.top = (isTouchDownWall) ? 0 + 'px' : (top + Player.HEIGHT) + 'px';
    }
};

Player.WIDTH = 20;
Player.HEIGHT = 20;
Player.INTERVAL = 200;
