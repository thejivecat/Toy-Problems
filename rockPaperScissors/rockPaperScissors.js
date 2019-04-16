/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function () {
  // TODO: your solution here
  var moves = ["R", "P", "S"]
  var results = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < moves.length; j++) {
      for (let k = 0; k < moves.length; k++) {
        var temp = moves[i].concat(moves[j], moves[k]);
        results.push(temp);
      }
    }
  }
  return results;
};
