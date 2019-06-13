/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};


var formatOnes = function(num) {
  return numbersToWords[num];
}

var formatTens = function(num) {
  let tensDigit = Number(num.toString()[0] * 10);
  let onesDigit = Number(num.toString()[1]);
  console.log(onesDigit);
  if (onesDigit === 0) {
    return numbersToWords[tensDigit];
  } else {
    return numbersToWords[tensDigit] + '-' + numbersToWords[onesDigit];
  }
}

var formatHundreds = function(num) {
  let hundredsDigit = Number(num.toString()[0]);
  let tensDigit = Number(num.toString()[1] * 10);
  let onesDigit = Number(num.toString()[2]);
  if (tensDigit === 0 && onesDigit !== 0) {
    return numbersToWords[hundredsDigit] + ' hundred ' + numbersToWords[onesDigit];
  } else if (onesDigit === 0 && tensDigit !== 0) {
    return numbersToWords[hundredsDigit] + ' hundred ' + numbersToWords[tensDigit];
  } else {
    return numbersToWords[hundredsDigit] + ' hundred';
  }
}
Number.prototype.toEnglish = function () {
  let result = '';
  if (this <= 20) {
    return numbersToWords[this];
  } else if (this > 20 && this < 100) {
    return formatTens(this);
  } else if (this >= 100 && this < 1000) {
    return formatHundreds(this);
  } else if (this >= 1000 && this < 1000000) {
    return formatThousands(this);
  } else if (this >= 1000000 && this < 1000000000) {
    return formatMillions(this);
  } else if (this >= 1000000000 && this < 1000000000000) {
    return formatBillions(this);
  } else if (this >= 1000000000000 && this < 1000000000000000) {
    return formatTrillions(this);
  } else if (this >= 1000000000000000 && this < 1000000000000000000) {
    return formatQuadrillions(this);
  } else if (this === 1000000000000000000) {
    return numbersToPlace[this];
  }
  return result;
};

console.log((101).toEnglish());