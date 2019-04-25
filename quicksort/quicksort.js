/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
  var pivot = Math.floor(array.length / 2);
  var arr1 = [];
  var arr2 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[pivot]) {
      arr1.push(array[i]);
      if (arr1.length > 1) {
        quicksort(arr1);
      }
    } else if (array[i] > array[pivot]) {
      arr2.push(array[i]);
        if (arr2.length > 1) {
          quicksort(arr2);
        }
    } 
  }
};

//set pivot to middle index
//create two empty arrays
//iterate over array
  //push values less than value at pivot into arr1
  //push values greater than value at pivot into arr2
//call quicksort on arr1 and arr2
//base case will be when the arrays get down to length 1
//we want to merge arr1, pivot value, and arr2 in that order at each cycle
