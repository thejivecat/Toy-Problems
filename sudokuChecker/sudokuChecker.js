/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  // Your code here.
  let subgrids = [[], [], [], [], [], [], [], [], []]
  let answer = 'invalid';

  let splitBoard = board.split("\n");
  for (let i = 0; i < splitBoard.length; i++) {
    if (splitBoard[i] === "") {
      splitBoard.splice(i, 1);
    } 
    splitBoard[i] = splitBoard[i].trim();
    let row = splitBoard[i];
    for (let i = 0; i < row.length; i++) {
      let newRow = new Set(row[i]);
      if (newRow.size === row.length) {
        answer = 'solved'
      } 
    }
  }
  const row1 = splitBoard[0]
  const row2 = splitBoard[1]
  const row3 = splitBoard[2]
  const row4 = splitBoard[3]
  const row5 = splitBoard[4]
  const row6 = splitBoard[5]
  const row7 = splitBoard[6]
  const row8 = splitBoard[7]
  const row9 = splitBoard[8]
  subgrids[0].push(row1[0], row1[1], row1[2], row2[0], row2[1], row2[2], row3[0], row3[1], row3[2]);
  subgrids[1].push(row1[3], row1[4], row1[5], row2[3], row2[4], row2[5], row3[3], row3[4], row3[5]);
  subgrids[2].push(row1[6], row1[7], row1[8], row2[6], row2[7], row2[8], row3[6], row3[7], row3[8]);
  subgrids[3].push(row4[0], row4[1], row4[2], row5[0], row5[1], row5[2], row6[0], row6[1], row6[2]);
  subgrids[4].push(row4[3], row4[4], row4[5], row5[3], row5[4], row5[5], row6[3], row6[4], row6[5]);
  subgrids[5].push(row4[6], row4[7], row4[8], row5[6], row5[7], row5[8], row6[6], row6[7], row6[8]);
  subgrids[6].push(row7[0], row7[1], row7[2], row8[0], row8[1], row8[2], row9[0], row9[1], row9[2]);
  subgrids[7].push(row7[3], row7[4], row7[5], row8[3], row8[4], row8[5], row9[3], row9[4], row9[5]);
  subgrids[8].push(row7[6], row7[7], row7[8], row8[6], row8[7], row8[8], row9[6], row9[7], row9[8]);
  for (let i = 0; i < subgrids.length; i++) {
    let newGrid = new Set(subgrids[i]);
    if (newGrid.size === subgrids[i].length) {
      answer = 'solved';
    } else {
      answer = 'invalid';
      return false;
    }
  };
  console.log(splitBoard);
  return answer;
}
let board = `735814296\n
             896275314\n
             214963857\n
             589427163\n
             362189745\n
             471356982\n
             923541678\n
             648792531\n
             157638429`;

console.log(sudokuChecker(board));
