'use strict';

let Grid = {
    setup() {
        this.$game = document.querySelector('game');

        let horizontalBlocks = new Array(Game.WIDTH / Snake.WIDTH - 1).fill(0);
        let verticalBlocks = new Array(Game.HEIGHT / Snake.HEIGHT - 1).fill(0);

        horizontalBlocks.forEach((value, index) => {
            this.addVerticalLine((index + 1) * Snake.WIDTH);
        });

        verticalBlocks.forEach((value, index) => {
            this.addHorizontalLine((index + 1) * Snake.HEIGHT);
        });
    },

    addVerticalLine(left) {
        let vr = document.createElement('vr');
        vr.style.left = left + 'px';
        this.$game.appendChild(vr);
    },

    addHorizontalLine(top) {
        let hr = document.createElement('hr');
        hr.style.top = top + 'px';
        this.$game.appendChild(hr);
    }
};
