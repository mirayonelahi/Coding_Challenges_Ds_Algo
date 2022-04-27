# 283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

```js
Input: nums = [0, 1, 0, 3, 12];
Output: [1, 3, 12, 0, 0];
```

Example 2:

```js
Input: nums = [0];
Output: [0];
```

if we have the chance to use extra space then we could just iterate and separate non zero and zero 2 array then add push those two arrays to get our result.

now we can implement that idea without using extra space.
we will take left and right pointer. left and right both starts from 0. right pointer increases with index. when any non zero value we swap the array value with pointer

```js
var moveZeroes = function (nums) {
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    //swap pointers
    if (nums[i] !== 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    }
  }
  return nums;
};
```
