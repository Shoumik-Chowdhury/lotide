const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

//Test Cases
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
console.log(eqArrays([1, 2, [1, 3]], [1, 2, [1, 3]])); // does not work for nested arrays. returns false
console.log(eqArrays([], [])); // true

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);