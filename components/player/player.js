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

    randomPosition() {
        let horizontalBlocks = Game.WIDTH / Player.WIDTH;
        console.assert(Utils.isInteger(horizontalBlocks));

        let verticalBlocks = Game.HEIGHT / Player.HEIGHT;
        console.assert(Utils.isInteger(verticalBlocks));

        let left = Utils.getRandomInteger(0, horizontalBlocks - 1);
        let top = Utils.getRandomInteger(0, verticalBlocks - 1);

        return [left * Player.WIDTH, top * Player.HEIGHT];
    },

    render($where) {
        Game.render.apply(this, arguments);
    }
};

Player.WIDTH = 20;
Player.HEIGHT = 20;
