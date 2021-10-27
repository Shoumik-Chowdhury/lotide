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

const without = function(source, removeItem) {
  let newArr = source.slice(); //clone original array
  for (let i = 0; i < source.length; i++) {
    for (let j in removeItem) {
      if (newArr[i] === removeItem[j]) {
        newArr.splice(i, 1);
        i -= 1;
      }
    }
  }
  return newArr;
}

//TEST CASE
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 1, 2, 1, 2, 3], [1, 2])); // => [3]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);