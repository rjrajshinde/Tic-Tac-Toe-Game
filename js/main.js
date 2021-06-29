import Game from './Game.js';
import GameView from './GameView.js';

let game = new Game();
let gameView = new GameView();

document.querySelector('.restart').addEventListener('click', () => {
    onRestartClick();
})

let tiles = document.querySelectorAll('.board-tile');

tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        // console.log('Tile Clicked');
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    //make a move
    game.makeMove(i);
    //update board
    gameView.updateBoard(game);
}

function onRestartClick(){
    const winner = document.querySelector('.winner');
    game = new Game();
    gameView.updateBoard(game);
    winner.innerHTML = ``;
}

gameView.updateBoard(game);

