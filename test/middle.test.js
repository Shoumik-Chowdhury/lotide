const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [\"Lighthouse\"] for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    const result = middle(["Hello", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse"];
    assert.deepEqual(result, expected);
  });
  it("returns [] for [5]", () => {
    const result = middle([5]);
    const expected = [];
    assert.deepEqual(result, expected);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    const result = middle([1, 2, 3, 4]);
    const expected = [2, 3];
    assert.deepEqual(result, expected);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    const result = middle([1, 2, 3, 4, 5]);
    const expected = [3];
    assert.deepEqual(result, expected);
  });
  it("original array not altered, returns [1, 2, 3] for [1, 2, 3]", () => {
    const originArr = [1, 2, 3];
    middle(originArr);
    const expected = [1, 2, 3];
    assert.deepEqual(originArr, expected);
  });
});