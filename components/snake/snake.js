'use strict';

let Snake = {
    move: null,
    items: [],

    start() {
        this.setupSnakeHead();
        this.setMove(this.moveHeadRight);
        this.startMoving();
        this.setupKeyboard();
    },

    setupKeyboard: function () {
        document.addEventListener('keydown:left', this.setMove.bind(this, this.moveHeadLeft));
        document.addEventListener('keydown:right', this.setMove.bind(this, this.moveHeadRight));
        document.addEventListener('keydown:top', this.setMove.bind(this, this.moveHeadTop));
        document.addEventListener('keydown:down', this.setMove.bind(this, this.moveHeadDown));
    },

    setupSnakeHead: function () {
        let head = this.buildSnakeItem();
        head.setRandomPosition();
        this.items.push(head);
    },

    buildSnakeItem() {
        let item = {};
        Object.setPrototypeOf(item, SnakeItem);
        item.build('snake-item');
        item.render(Board.$elm);
        return item;
    },

    getHead() {
        return this.items[0];
    },

    setMove: function (fn) {
        this.move = fn;
    },

    startMoving() {
        this.interval = setInterval(() => {
            this.moveTail();
            this.move();
            this.checkCollisionWithDiamond();
        }, Snake.INTERVAL);
    },

    stopMoving() {
        clearInterval(this.interval);
    },

    hasHeadCollisionWithBody: function () {
        for (let i = 1; i < this.items.length; ++i) {
            if (this.hasHeadCollisionWith(this.items[i])) {
                return true;
            }
        }
    },

    checkCollisionWithDiamond() {
        if (this.hasHeadCollisionWithBody()) {
            this.stopMoving();
            GameOverBoard.build();
            GameOverBoard.render(Game.$elm);
            return;
        }

        if (this.hasHeadCollisionWith(Diamond)) {
            Diamond.setRandomPosition();
            document.dispatchEvent(new CustomEvent('player:collect'));
            this.items.push(this.buildSnakeItem());
        }
    },

    hasHeadCollisionWith($object) {
        let head = this.getHead();
        return head.$elm.style.left === $object.$elm.style.left &&
            head.$elm.style.top === $object.$elm.style.top;
    },

    moveTail() {
        for (let i = this.items.length - 1; i > 0; i--) {
            let currentItem = this.items[i];
            let prevItem = this.items[i - 1];

            if (prevItem) {
                currentItem.$elm.style.left = prevItem.$elm.style.left;
                currentItem.$elm.style.top = prevItem.$elm.style.top;
            }
        }
    },

    moveHeadLeft() {
        let head = this.getHead();
        let left = parseInt(head.$elm.style.left);
        let isTouchLeftWall = (left === 0);
        head.$elm.style.left = (isTouchLeftWall) ? (Board.WIDTH - Block.WIDTH) + 'px' : (left - Block.WIDTH) + 'px';
    },

    moveHeadRight() {
        let head = this.getHead();
        let left = parseInt(head.$elm.style.left);
        let isTouchRightWall = (left === Board.WIDTH - Block.WIDTH);
        head.$elm.style.left = (isTouchRightWall) ? 0 + 'px' : (left + Block.WIDTH) + 'px';
    },

    moveHeadTop() {
        let head = this.getHead();
        let top = parseInt(head.$elm.style.top);
        let isTouchTopWall = (top === 0);
        head.$elm.style.top = (isTouchTopWall) ? (Board.HEIGHT - Block.HEIGHT) + 'px' : (top - Block.HEIGHT) + 'px';
    },

    moveHeadDown() {
        let head = this.getHead();
        let top = parseInt(head.$elm.style.top);
        let isTouchDownWall = (top === Board.HEIGHT - Block.HEIGHT);
        head.$elm.style.top = (isTouchDownWall) ? 0 + 'px' : (top + Block.HEIGHT) + 'px';
    },

    destroy() {
        this.items.forEach((item) => {
            item.destroy();
        });
        this.items = [];
    }
};

Snake.INTERVAL = 200;
