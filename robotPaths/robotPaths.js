/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board, i, j) {
  let count = 0;
  board = board || makeBoard(n); //pass in a board or create one from n
  i = i || 0; //starting row
  j = j || 0; //starting column
  
  const findPaths = (i, j) => {
    if (i === n - 1 && j === n - 1) { //if i and j are at the last row and column then increase count, return out of function
      count++;
      return;
    }
    board.togglePiece(i, j); 
    if (i + 1 < n && !board.hasBeenVisited(i + 1, j)) { 
      findPaths(i + 1, j);
    }
    if (i - 1 >= 0 && !board.hasBeenVisited(i - 1, j)) { 
      findPaths(i - 1, j);
    }
    if (j + 1 < n && !board.hasBeenVisited(i, j + 1)) { 
      findPaths(i, j + 1);
    }
    if (j - 1 >= 0 && !board.hasBeenVisited(i, j - 1)) { 
      findPaths(i, j - 1);
    }
    board.togglePiece(i, j); 
  }
  findPaths(i, j);
  return count;
};

console.log(robotPaths(5));