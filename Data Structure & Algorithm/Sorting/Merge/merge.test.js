const MergeSort = require("./index");

test("sorting data", () => {
  expect(MergeSort([4, 2, 3, 1])).toStrictEqual([1, 2, 3, 4]);
});
