'use strict';

let points = 0;

let ScoreBoard = {
    build() {
        this.$elm = document.createElement('score-board');
    },

    render($where) {
        Board.render.apply(this, arguments);
    },

    listenForCollecting() {
        document.addEventListener('player:collect', () => {
            points++;
            this.displayScore();
        });
    },

    displayScore() {
        this.$elm.innerText = 'Score: ' + points;
    },

    resetPoints() {
        points = 0;
    }
};
