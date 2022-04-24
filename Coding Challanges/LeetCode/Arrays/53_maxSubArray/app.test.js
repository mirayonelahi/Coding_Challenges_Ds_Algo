/*
53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23

*/

const maxSubArray = (nums) => {
  // use 2 pointer
  // iterate each value and check if cursum is greater than 0
  // if gt 0 then add cur value to curr sum and compare max with globalmax and right++
  // if lt 0 then swap left with right

  let left = 0;
  let right = 1;
  let maxGlobal = nums[0];
  let currentSum = nums[0];

  while (right < nums.length) {
    if (currentSum < 0) {
      left = right;
      currentSum = 0;
    }

    currentSum += nums[right];
    maxGlobal = Math.max(maxGlobal, currentSum);
    right++;
  }

  return maxGlobal;
};

test("calculate max sub array", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

test("calculate max sub array", () => {
  expect(maxSubArray([1])).toBe(1);
});
