const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ 😎 ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ 😭 ⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    let ans = true;
    for (let i in arr1) {
      if (arr1[i] !== arr2[i]) {
        ans = false;
      }
    }
    return ans;
  } else {
    return false;
  }
};

//Test Cases
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(eqArrays([1, 2, [1, 3]], [1, 2, [1, 3]])); // does not work for nested arrays. returns false
console.log(eqArrays([], [])); // true

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);