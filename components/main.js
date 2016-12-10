'use strict';

function setup() {
    let $body = document.querySelector('body');

    Game.build();
    Game.render($body);

    ScoreBoard.build();
    ScoreBoard.render(Game.$elm);
    ScoreBoard.listenForCollecting();
    ScoreBoard.displayScore(0);

    ProjectBoard.build();
    ProjectBoard.render(Game.$elm);

    Board.build();
    Board.render(Game.$elm);

    Grid.setup();

    Diamond.build('diamond');
    Diamond.setRandomPosition();
    Diamond.render(Board.$elm);

    Snake.start();

    VersionBoard.build();
    VersionBoard.render(Game.$elm);

    AuthorBoard.build();
    AuthorBoard.render(Game.$elm);
}

function restart() {
    ScoreBoard.resetPoints();
    ScoreBoard.displayScore();
    GameOverBoard.destroy();
    Snake.destroy();
    Snake.start();
}

document.addEventListener('DOMContentLoaded', setup);
document.addEventListener('game:restart', restart);
