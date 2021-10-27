//Assertion Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ 😎 ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ 😭 ⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//countOnly Function
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item of allItems) {
    for (let name in itemsToCount) {
      if (name === item && (itemsToCount[name] === true)) {
        (result[name]) ? result[name] += 1 : result[name] = 1;
      }
    }
  }
  return result;
}

///TEST FUNCTION
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  "Fang"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 3);
assertEqual(result1["Agouhanna"], undefined);