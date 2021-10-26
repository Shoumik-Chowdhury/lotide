const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ 😎 ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ 😭 ⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

//TEST CASE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([6]), 6);