/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var storage = {};
  var i;
  
  for (i = 0; i < string.length; i++) {
    if (storage[string[i]] === undefined) {
      storage[string[i]] = 1;
    } else {
      storage[string[i]]++;
    }
  }
  for (i = 0; i < string.length; i++) {
    if (storage[string[i]] === 1) {
      return string[i];
    }
  }
};
