const moveZeroes = require("./index");

test("move zeros to last", () => {
  expect(moveZeroes([0])).toStrictEqual([0]);
});

test("move zeros to last", () => {
  expect(moveZeroes([1, 0, 0, 2, 3])).toStrictEqual([1, 2, 3, 0, 0]);
});

test("move zeros to last", () => {
  expect(moveZeroes([0, 0, 0, 0, 1, 0, 2, 0, 0])).toStrictEqual([
    1, 2, 0, 0, 0, 0, 0, 0, 0,
  ]);
});
