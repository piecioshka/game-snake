'use strict';

let LEFT = 37;
let RIGHT = 39;
let TOP = 38;
let DOWN = 40;

function dispatchEvent(name) {
    document.dispatchEvent(new CustomEvent(name));
}

document.addEventListener('keydown', (evt) => {
    switch (evt.keyCode) {
        case LEFT:
            dispatchEvent('keydown:left');
            break;

        case RIGHT:
            dispatchEvent('keydown:right');
            break;

        case TOP:
            dispatchEvent('keydown:top');
            break;

        case DOWN:
            dispatchEvent('keydown:down');
            break;
    }
});
