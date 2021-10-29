//Assertiion Function
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

//takeUntil Function
const takeUntil = function(array, callback) {
  let result = [];
  for (let i in array) {
    if (callback(array[i])) {
      return result = array.slice(0, i);
    }
  };
}

//Test Function
assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);

console.log('---');

assertArraysEqual(takeUntil([4, 5, -9, 'a', 8], x => typeof x !== 'number'), [4, 5, -9]);