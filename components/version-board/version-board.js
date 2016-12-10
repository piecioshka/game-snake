'use strict';

let VersionBoard = {
    build() {
        this.$elm = document.createElement('version-board');
        this.$elm.innerText = 'v1.0.0';
    },

    render($where) {
        Board.render.apply(this, arguments);
    },
};
