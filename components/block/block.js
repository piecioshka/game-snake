'use strict';

function randomPosition() {
    let horizontalBlocks = Board.WIDTH / Block.WIDTH;
    console.assert(Utils.isInteger(horizontalBlocks));

    let verticalBlocks = Board.HEIGHT / Block.HEIGHT;
    console.assert(Utils.isInteger(verticalBlocks));

    let left = Utils.getRandomInteger(0, horizontalBlocks - 1);
    let top = Utils.getRandomInteger(0, verticalBlocks - 1);

    return [left * Block.WIDTH, top * Block.HEIGHT];
}

let Block = {
    build(type) {
        this.$elm = document.createElement(type);
        let style = this.$elm.style;
        style.width = Block.WIDTH + 'px';
        style.height = Block.HEIGHT + 'px';
    },

    render($where) {
        Board.render.apply(this, arguments);
    },

    setRandomPosition() {
        let [left, top] = randomPosition();
        let style = this.$elm.style;
        style.left = left + 'px';
        style.top = top + 'px';
    },

    destroy() {
        this.$elm.parentNode.removeChild(this.$elm);
    }
};

Block.WIDTH = 20;
Block.HEIGHT = 20;
