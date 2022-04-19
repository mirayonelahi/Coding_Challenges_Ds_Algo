/**
 *
 * @param {string} s
 */
const validParenthesis = (s) => {
  let stack = [];
  let bracket = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i of s) {
    if (bracket[i]) {
      stack.push(i);
    } else {
      let val = stack.pop();
      if (i != bracket[val]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

module.exports = validParenthesis;
