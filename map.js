//Assertion Test Functions//
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('✅ 😎 ✅ Assertion Passed: ', array1, ' === ', array2);
  } else {
    console.log('⛔️ 😭 ⛔️ Assertion Failed: ', array1, ' !== ', array2);
  }
};

//Map Function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


////Test Cases
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

assertArraysEqual(map([5, 10, 7, 54], num => num + 2), [7, 12, 9, 56]);

assertArraysEqual(map(['lighthouse'], elem => elem + ' labs'), ['lighthouse labs']);