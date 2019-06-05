/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  let largeOne = 0;
  let largeTwo = 0;
  let largeThree = 0;
  
  for (let i = 0; i < array.length; i++) {
    if (largeOne === 0 && array[i] > largeOne) {
      largeOne = array[i];
    } else if (largeOne !== 0 && array[i] > largeOne) {
      largeThree = largeTwo;
      largeTwo = largeOne;
      largeOne = array[i];
    }
  }
  let result = largeOne * largeTwo * largeThree;
  return result;
};
console.log(largestProductOfThree([0, 1, 2, 3]));