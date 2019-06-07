/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  let result = 0;
  while (number) {
    let lastDigit = number % 10;
    result = (Math.floor(result * 10)) + lastDigit;
    number = Math.floor(number / 10) || 0;

  }
  return result;
}
console.log(reverseInteger(4321));
