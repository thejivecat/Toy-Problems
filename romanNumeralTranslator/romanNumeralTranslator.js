
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  if (typeof romanNumeral !== 'string') {
    return null;
  }
  var result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const romanLetter = romanNumeral[i];
    if (romanNumeral.length === 1) {
      return DIGIT_VALUES[romanNumeral[0]];
    }
    if (DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i + 1]]) {
      result += DIGIT_VALUES[romanNumeral[i+1]] - DIGIT_VALUES[romanNumeral[i]];
    } 
    if (DIGIT_VALUES[romanNumeral[i]] >= DIGIT_VALUES[romanNumeral[i + 1]] && romanNumeral[i+1] !== undefined){
      result += DIGIT_VALUES[romanNumeral[i]] + DIGIT_VALUES[romanNumeral[i + 1]];
    }
  }
  return result;
};
console.log(translateRomanNumeral("VII"));