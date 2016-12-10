'use strict';

let Board = {
    $elm: null,

    build() {
        this.$elm = document.createElement('board');
        this.$elm.style.width = Board.WIDTH + 'px';
        this.$elm.style.height = Board.HEIGHT + 'px';
    },

    render($where) {
        $where.appendChild(this.$elm);
    }
};

Board.WIDTH = 200;
Board.HEIGHT = 200;
