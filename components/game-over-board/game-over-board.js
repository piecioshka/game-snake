'use strict';

let GameOverBoard = {
    build() {
        this.$elm = document.createElement('game-over-board');
        let $again = document.createElement('play-again');
        $again.innerText = 'Play Again';

        $again.addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('game:restart'));
        });

        this.$elm.appendChild($again);
    },

    render($where) {
        Board.render.apply(this, arguments);
    },

    destroy() {
        this.$elm.parentNode.removeChild(this.$elm);
    }
};
