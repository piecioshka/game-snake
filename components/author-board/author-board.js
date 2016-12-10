'use strict';

const AUTHOR_URL = 'https://piecioshka.pl/blog/';

let AuthorBoard = {
    build() {
        this.$elm = document.createElement('author-board');
        this.$elm.innerText = 'Author: PK';

        this.$elm.addEventListener('click', () => {
            window.open(AUTHOR_URL)
        });
    },

    render($where) {
        Board.render.apply(this, arguments);
    },
};
