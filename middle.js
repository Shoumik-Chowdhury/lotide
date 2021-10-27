// ASSERTION FUNCTIONS
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

//MIDDLE FUNCTION
/* Psuedocode
take array length
 if length less than 3: return empty array
 if length even: find middle indexes
 if length odd: find middle index
add values from index to new array
return new array

*/
const middle = function(array) {
 let midArr =[];
 if (array.length < 3) {
   return midArr;
 } else if (array.length % 2 === 0) {
   let midIndex1 = array.length / 2 - 1;
   let midIndex2 = array.length / 2;
   return midArr = [array[midIndex1], array[midIndex2]];
 } else {
   let midIndex = Math.floor(array.length / 2);
   return midArr = [array[midIndex]];
 }
}

//TEST FUNCTION
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);