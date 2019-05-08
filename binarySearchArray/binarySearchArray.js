/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
    //split array in half
    //if target is less than midpoint,
        //split the first half array into two
				//etc.. until you find target = arr[0];
		//if target is greater than midpoint,
			//split second arr into two and repeat
		//need to keep track of what index you are at
			//set equal to midpoint, then 
				//if the target is less than midpoint, set index at the new midpoint of lesser half array in context of the original array
				
	var midpoint = Math.floor(array.length/2);
	var first = array.slice(0, midpoint);
	var second = array.slice(midpoint);
	if (array.indexOf(target) === -1) {
		return null;
	} else {
		return array.indexOf(target);
	}
};

