'use strict';

function randomPosition() {
    let horizontalBlocks = Game.WIDTH / Snake.WIDTH;
    console.assert(Utils.isInteger(horizontalBlocks));

    let verticalBlocks = Game.HEIGHT / Snake.HEIGHT;
    console.assert(Utils.isInteger(verticalBlocks));

    let left = Utils.getRandomInteger(0, horizontalBlocks - 1);
    let top = Utils.getRandomInteger(0, verticalBlocks - 1);

    return [left * Snake.WIDTH, top * Snake.HEIGHT];
}

let Block = {
    build(type) {
        this.$elm = document.createElement(type);
        let style = this.$elm.style;
        style.width = Snake.WIDTH + 'px';
        style.height = Snake.HEIGHT + 'px';

        this.setRandomPosition();
    },

    render($where) {
        Game.render.apply(this, arguments);
    },

    setRandomPosition() {
        let [left, top] = randomPosition();
        let style = this.$elm.style;
        style.left = left + 'px';
        style.top = top + 'px';
    }
};
