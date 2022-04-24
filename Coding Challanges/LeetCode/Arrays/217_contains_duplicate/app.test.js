/*
217. Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

test("check duplicate or not", () => {
  expect(containsDuplicate([0, 4, 5, 0, 3, 6])).toBe(true);
});

test("check duplicate or not", () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

test("check duplicate or not", () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});

const containsDuplicate = (arr) => {
  let obj = {};

  for (let i of arr) {
    if (obj[i] != undefined) {
      return true;
    } else {
      obj[i] = i;
    }
  }
  return false;
};
