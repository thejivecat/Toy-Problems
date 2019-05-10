/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  let equals = false;
  const recurse = function(apple, orange) {
    for (let key1 in apple) {
      for (let key2 in orange) {
        if (key1 !== key2) {
          equals = false;
        } else if (key1 === key2) {
          equals = true;
          let valApple = apple[key1];
          let valOrange = orange[key2];
          if (typeof valApple !== "object" && typeof valOrange !== "object") {
            if (valApple === valOrange) {
              equals = true;
            } else if (valApple !== valOrange) {
              equals = false;
              return equals;
            }
          } else {
            recurse(valApple, valOrange);
          }
        } 
      }
    }
  }
  recurse(apple,orange);
  return equals;
};

console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false