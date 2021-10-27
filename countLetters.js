//Assertion Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ 😎 ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ 😭 ⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//CountLetters Function
const countLetters = function(word) {
  let result = {};
  for (let letter of word) {
    (result[letter]) ? result[letter] += 1 : result[letter] = 1;
  }
  return result;
};

//Test Function
const input = 'BANANA';
assertEqual(countLetters(input).B, 1);
assertEqual(countLetters(input).N, 2);
assertEqual(countLetters(input).A, 3);