'use strict';

let Game = {
    build() {
        this.$elm = document.createElement('game');
    },

    render($where) {
        $where.appendChild(this.$elm);
    }
};
