/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
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

// using a different technique

var moveZeroes2 = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];

    if (curr === 0) {
      count++;
      nums.splice(i, 1);
      i--;
    }
  }

  while (count > 0) {
    nums.push(0);
    count--;
  }

  return nums;
};

module.exports = moveZeroes;
