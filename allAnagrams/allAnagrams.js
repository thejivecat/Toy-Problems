/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  if (string.length < 2) {
    return string;
  } else {
    var results = [];
    for (let i = 0; i < string.length; i++) {
      var letter = string[i];
      var restOfString = string.substring(0, i) + string.substring(i+1);
      var shorterCombinations = allAnagrams(restOfString);
      for (let j = 0; j < shorterCombinations.length; j++) {
        results.push(letter + shorterCombinations[j]);
      }
    }
    return results;
  }
};

//the number of solutions is going to be string.length!
//iterate over all letters
//generate new word with remaining letters
//recursively call function on rest of the string
//iterate over the combinations found from shorter string
//push the combination of each original letter + combinations from shorter string to results
//return results