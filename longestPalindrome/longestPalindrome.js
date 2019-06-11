/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  if(!string || string.length <= 1) {
    return s;
  }
  let longest = string.substring(0, 1)
  for(let i = 0; i < string.length; i++) {
    let temp = expand(string, i, i);
    if(temp.length > longest.length) {
      longest = temp;
    }
    temp = expand(string, i, i + 1)
    if(temp.length > longest.length) {
      longest = temp;
    }
  }
  return longest;
};

const expand = (string, begin, end) => {
  while(begin >= 0 && end <= string.length - 1 && string[begin] === string[end]) {
    begin--
    end++
  }
  return string.substring(begin + 1, end)
}
console.log(longestPalindrome("tattarrattat"));

//iterate over string
  //we know that every palindrome is a mirrow image with one or two "center" letters
  //find all substring mirror images (with single letter center and double letter centers)
    //expand function:
      //given a string, beginning index, and ending index, 
        //while begin >= 0 and end <= string.length and the two letters at those indexes are the same,
          //decrement the begin index all the way to 0
          //increment end index up to the string's length-1
      //return the final substring between those final begin and end indexes
  //check to see if what expand returned is longer than the current longest palindrome
