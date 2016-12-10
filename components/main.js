'use strict';

function setup() {
    Game.build();
    Game.render(document.querySelector('body'));

    Grid.setup();

    Player.build();
    Player.render(Game.$elm);
}

window.addEventListener('DOMContentLoaded', setup);
