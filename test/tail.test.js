const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [\"Lighthouse\", \"Labs\"] for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(result, expected);
  });
  it("returns [] for [5]", () => {
    const result = tail([5]);
    const expected = [];
    assert.deepEqual(result, expected);
  });
  it("original array not altered, returns [1, 2, 3] for [1, 2, 3]", () => {
    const originArr = [1, 2, 3];
    tail(originArr);
    const expected = [1, 2, 3];
    assert.deepEqual(originArr, expected);
  });
});