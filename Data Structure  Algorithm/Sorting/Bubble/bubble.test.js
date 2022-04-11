const BubbleSort = require("./index");

test("move zeros to last", () => {
  expect(BubbleSort([4, 2, 3, 1])).toStrictEqual([1, 2, 3, 4]);
});
