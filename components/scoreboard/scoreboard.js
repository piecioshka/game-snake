'use strict';

let points = 0;

let Scoreboard = {
    build() {
        this.$elm = document.createElement('scoreboard');
    },

    render($where) {
        Game.render.apply(this, arguments);
    },

    listenForCollecting() {
        document.addEventListener('player:collect', () => {
            points++;
            this.displayScore();
        });
    },

    displayScore() {
        this.$elm.innerText = 'Score: ' + points;
    }
};
