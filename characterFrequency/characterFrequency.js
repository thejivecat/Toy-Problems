/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  let storage = {};
  for (let i = 0; i < string.length; i++) {
    if (storage[string[i]] === undefined) {
      storage[string[i]] = 1;
    } else if (storage[string[i]] !== undefined) {
      storage[string[i]]++;
    }
  }
  let result = Object.entries(storage);
  result.sort(function(a, b) {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0
    }
    return b[1] - a[1];
  })
  return result;
};

console.log(characterFrequency("mississippi"));

// find numerical order
  //iterate through array, if any of the values are the same, yank those tuples into 