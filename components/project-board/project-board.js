'use strict';

const REPO_URL = 'https://github.com/piecioshka/game-snake';

let ProjectBoard = {
    build() {
        this.$elm = document.createElement('project-board');
        this.$elm.innerText = 'GitHub';

        this.$elm.addEventListener('click', () => {
            window.open(REPO_URL)
        });
    },

    render($where) {
        Board.render.apply(this, arguments);
    },
};
