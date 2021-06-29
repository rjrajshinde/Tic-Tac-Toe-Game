export default class GameView {

  updateBoard(game) { 
    this.updateTurn(game);
    const winningCombination = game.findWinningCombinations();
    for (let i = 0; i < game.board.length; i++) {
      //selecting board-tile with data=index
      const tile = document.querySelector(`.board-tile[data-index='${i}']`);
      const winner = document.querySelector('.winner');
      tile.classList.remove('tile-winner');

      //for changing color of the X and O
      let tileType = game.board[i] == 'X' ? 'tile-x' : 'tile-o';

      tile.innerHTML = `<span class = "${tileType}">${game.board[i] ? game.board[i] : ""}</span>`;

      if(winningCombination && winningCombination.includes(i)){
          tile.classList.add('tile-winner');
          winner.innerHTML = `<span>Player ${game.board[i]} Wins</span>`;
      }
    }
  }

  updateTurn(game) {
    let playerX = document.querySelector(".player-x");
    let playerO = document.querySelector(".player-o");

    playerX.classList.remove('active');
    playerO.classList.remove('active');

    
    if(game.turn == 'X'){
        playerX.classList.add('active');
    }else{
        playerO.classList.add('active');
    }
  }
}
