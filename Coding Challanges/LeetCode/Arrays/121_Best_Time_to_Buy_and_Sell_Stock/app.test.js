/**
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 * @param {number[]} prices
 * @return {number}
 */

// we solved it via nested for loop. can we make it single for loop
var maxProfitQuadratic = function (p) {
  let maxGlobal = 0;

  for (let i = 0; i < p.length; i++) {
    let curVal = p[i];
    for (let j = i + 1; j < p.length; j++) {
      if (curVal < p[j]) {
        let curmax = p[j] - curVal;
        maxGlobal = Math.max(maxGlobal, curmax);
      }
    }
  }
  return maxGlobal;
};

var maxProfitTwoPointer = function (p) {
  let maxGlobal = 0;
  let left = 0;
  let right = 1;

  while (right < p.length) {
    // left and right pointer
    // check every time that left pointer is less than right pointer
    if (p[left] > p[right]) {
      left = right;
    } else {
      let curMax = p[right] - p[left];
      maxGlobal = Math.max(maxGlobal, curMax);
    }
    right++;
  }

  return maxGlobal;
};

console.log(maxProfitTwoPointer([7, 1, 5, 3, 6, 4]));

test("lowest buy to highest sell", () => {
  expect(maxProfitTwoPointer([7, 1, 5, 3, 6, 4])).toStrictEqual(5);
});

test("lowest buy to highest sell", () => {
  expect(maxProfitTwoPointer([1, 2])).toStrictEqual(1);
});
