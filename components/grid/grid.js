'use strict';

let Grid = {
    setup() {
        this.$board = document.querySelector('board');
        this.$elm = document.createElement('grid');

        let horizontalBlocks = new Array(Board.WIDTH / Block.WIDTH - 1).fill(0);
        let verticalBlocks = new Array(Board.HEIGHT / Block.HEIGHT - 1).fill(0);

        horizontalBlocks.forEach((value, index) => {
            this.addVerticalLine((index + 1) * Block.WIDTH);
        });

        verticalBlocks.forEach((value, index) => {
            this.addHorizontalLine((index + 1) * Block.HEIGHT);
        });

        this.$board.appendChild(this.$elm);
    },

    addVerticalLine(left) {
        let vr = document.createElement('vr');
        vr.style.left = left + 'px';
        this.$elm.appendChild(vr);
    },

    addHorizontalLine(top) {
        let hr = document.createElement('hr');
        hr.style.top = top + 'px';
        this.$elm.appendChild(hr);
    }
};
