/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  var results = [];
  matrix = matrix.slice();
    while (matrix.length > 0) {
      for (let i = 0; i < matrix[0].length; i++) { //push 1st row
        results.push(matrix[0][i]);
      }
      matrix.shift(); //remove 1st row
      for (let i = 0; i < matrix.length; i++) { //push all last values
        let row = matrix[i];
        results.push(row[row.length-1]);
        row.pop();
      }
      console.log(matrix[matrix.length-1], "BLEEP");
      for (let i = matrix[matrix.length-1].length-1; i >= 0; i--) { //push last row
        results.push(matrix[matrix.length-1][i]);
      }
      matrix.pop(); //remove last row
      for (let i = matrix.length-1; i >=0; i--) {
        results.push(matrix[i][0]);
        matrix[i].shift();
      }
    }
  return results;
}

console.log(spiralTraversal([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]));

//print out first array
  //then last values of remaining arrays
    //then all the values of last array starting from last
      //then all the first values of previous arrays ending before the 1st array
      //repeat with shortened matrix

//recursive function -- takes in a modded matrix
