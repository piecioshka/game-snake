'use strict';

let Game = {
    build() {
        this.$elm = document.createElement('game');
        this.$elm.style.width = Game.WIDTH + 'px';
        this.$elm.style.height = Game.HEIGHT + 'px';
    },

    render($where) {
        $where.appendChild(this.$elm);
    }
};

Game.WIDTH = 200;
Game.HEIGHT = 200;
