const assertArraysEqual = require('../assertArraysEqual')

//TEST CASES
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual([1, 2, [1, 3]], [1, 2, [1, 3]]); // does not work for nested arrays. returns false
assertArraysEqual([], []); // true