'use strict';

function setup() {
    Game.build();
    Game.render(document.querySelector('body'));

    Grid.setup();

    Diamond.build('diamond');
    Diamond.render(Game.$elm);

    Snake.build('snake');
    Snake.render(Game.$elm);
    Snake.start();

    Scoreboard.build();
    Scoreboard.render(Game.$elm);
    Scoreboard.listenForCollecting();
    Scoreboard.displayScore(0);
}

window.addEventListener('DOMContentLoaded', setup);
