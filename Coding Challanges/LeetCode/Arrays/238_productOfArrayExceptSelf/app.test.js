/*
238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.


Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

const productExceptSelf = (arr) => {
  const totalProduct = arr.reduce((a, b) => a * b, 1);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = totalProduct / arr[i];
  }
  return arr;
};

// we can't use divide then how can we implement this
// by using prefix and post fix sum

const productExceptSelfPrefix = (arr) => {
  let prefix = [];
  let postfix = [];
  let final = [];
  let total = 1;
  let total2 = 1;
  for (let i = 0; i < arr.length; i++) {
    total = total * arr[i];
    prefix[i] = total;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    total2 = total2 * arr[i];
    postfix[i] = total2;
  }
  final[0] = postfix[1];
  final[arr.length - 1] = prefix[arr.length - 2];

  for (let i = 1; i < arr.length - 1; i++) {
    final[i] = prefix[i - 1] * postfix[i + 1];
  }
  return final;
};

console.log(productExceptSelfPrefix([-1, 1, 0, -3, 3]));

test("product of array except self", () => {
  expect(productExceptSelfPrefix([-1, 1, 0, -3, 3])).toStrictEqual([
    0, 0, 9, 0, 0,
  ]);
});
