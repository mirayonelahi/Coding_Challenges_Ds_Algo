/*
152. Maximum Product Subarray
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

*/

var maxProduct = function (nums) {
  var n = nums.length;
  // if (!n) return 0;
  var curMax = nums[0];
  var curMin = nums[0];
  var max = nums[0];
  for (var i = 1; i < n; i++) {
    var num = nums[i];
    var minProd = curMin * num;
    var maxProd = curMax * num;
    curMax = Math.max(num, minProd, maxProd);
    curMin = Math.min(num, minProd, maxProd);
    max = Math.max(max, curMax);
  }
  return max;
};
test("calculate max product sub array", () => {
  expect(maxProduct([2, 3, -2, 4])).toBe(6);
});

test("calculate max product sub array", () => {
  expect(maxProduct([-2, 0, -1])).toBe(0);
});
test("calculate max product sub array", () => {
  expect(maxProduct([-2, 0, -1, 3, 2])).toBe(6);
});

test("calculate max product sub array", () => {
  expect(maxProduct([2, -2, -2, 3])).toBe(24);
});

test("calculate max product sub array", () => {
  expect(maxProduct([-2, 3, -4])).toBe(24);
});
