/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  let decimalNum = number - Math.floor(number);
  let wholeNum = number - decimalNum;
  if (decimalNum === 0) {
    return wholeNum.toString() + '/1';
  } else if (decimalNum === 0.5) {
    if (wholeNum === 0) {
      return '1/2';
    } else {
      let numerator = (wholeNum * 2 + 1);
      return numerator.toString() + '/2'
    }
  } else {
    let common = gcd((decimalNum * 10), 10);

  }

};

var gcd = function(a, b) {
  if ( ! b) {
    return a;
  }
  return gcd(b, a % b);
};

console.log(toFraction(12.5));