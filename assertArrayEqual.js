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

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('✅ 😎 ✅ Assertion Passed: ', array1, ' === ', array2);
  } else {
    console.log('⛔️ 😭 ⛔️ Assertion Failed: ', array1, ' !== ', array2);
  }
};

//TEST CASES
assertArrayEqual([1, 2, 3], [3, 2, 1]); // => false
assertArrayEqual([1, 2, 3], [1, 2, 3]); // => true
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArrayEqual([1, 2, [1, 3]], [1, 2, [1, 3]]); // does not work for nested arrays. returns false
assertArrayEqual([], []); // true