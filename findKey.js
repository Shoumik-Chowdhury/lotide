// Assertion Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ 😎 ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ 😭 ⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//findKey Function
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
}


//Tests
let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result, "noma");

let result2 = findKey({
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}, x => x === "Brooklyn Nine-Nine");

assertEqual(result2, "comedy");