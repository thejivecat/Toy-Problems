/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  let arrCopy = array.slice();
  arrCopy.sort((a, b) => {
    return a - b;
  });
  let largeOne = 0;
  let largeTwo = 0;
  let largeThree = 0;
  
  for (let i = 0; i < arrCopy.length; i++) {
    if (largeOne === 0 && arrCopy[i] > largeOne) {
      largeOne = arrCopy[i];
    } else if (largeOne !== 0 && arrCopy[i] > largeOne) {
      largeThree = largeTwo;
      largeTwo = largeOne;
      largeOne = arrCopy[i];
    }
  }
  let result = largeOne * largeTwo * largeThree;
  return result;
};
console.log(largestProductOfThree([3, 2, 1]));
//for negative numbers
  //save the largest negative numbers
  //compare them to the largest positive numbers
    //if two of the negative numbers are larger than any of the positives
    //use those numbers to calculate product
    //if all three are bigger, then only choose two plus one positive number
