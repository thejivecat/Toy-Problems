/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5 or maybe [2,3,4,5,6,0,1]
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  var min = 0;
  var max = rotated.length - 1;

  while (min <= max) {
    var mid = Math.floor((max + min) / 2);

    if (target === rotated[mid]) {
      return mid;
    }
  
    if (rotated[mid] <= rotated[max]) {
      if (target < rotated[mid] || target > rotated[max]) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    } else if (rotated[mid] >= rotated[min]) {
      if (target > rotated[mid] || target < rotated[min]) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
  }
  return -1;
};

console.log(rotatedArraySearch([2,3,4,5,6,0,1], 6));