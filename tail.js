const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ 😎 ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ 😭 ⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let arrTail = array;
  arrTail = arrTail.slice(1);
  return arrTail;
};

//TEST CASE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const value = tail([1]);
assertEqual(value.length, 0); //check if returns empty array

//Check Original Array not altered
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);