const validParenthesis = require("./index");

test("(()) is valid ", () => {
  expect(validParenthesis("()()))")).toStrictEqual(false);
});

test("isValid ", () => {
  expect(validParenthesis("([{(())}])")).toStrictEqual(true);
});

test("isValid", () => {
  expect(validParenthesis("(]")).toStrictEqual(false);
});
