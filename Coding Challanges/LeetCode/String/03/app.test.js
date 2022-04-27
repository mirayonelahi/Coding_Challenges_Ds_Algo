/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

const longestSubstring = (s) => {
  let maxGlobal = 0;
  let start = 0;
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (obj[curr] >= start) {
      start = obj[curr] + 1;
    }

    obj[curr] = i;
    maxGlobal = Math.max(maxGlobal, i - start + 1);
  }
  return maxGlobal;
};

console.log(longestSubstring("pwwkew"));
describe("Longest Substring Without Repeating Characters", () => {
  it("should return 3", () => {
    expect(longestSubstring("abcabcbb")).toEqual(3);
  });
  it("should return 1", () => {
    expect(longestSubstring("bbbbb")).toEqual(1);
  });
  it("should return 3", () => {
    expect(longestSubstring("pwwkew")).toEqual(3);
  });
  it("should return 3", () => {
    expect(longestSubstring("dvdf")).toEqual(3);
  });
});
