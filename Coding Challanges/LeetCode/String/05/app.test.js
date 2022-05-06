/**
 * 
5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 * 
 * 
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let startIndex = 0;
  let maxLength = 1;

  const helperFunc = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      currLen = right - left + 1;
      if (currLen > maxLength) {
        maxLength = currLen;
        startIndex = left;
      }
      left -= 1;
      right += 1;
    }
  };

  for (let i = 0; i < s.length; i++) {
    helperFunc(i - 1, i + 1);
    helperFunc(i, i + 1);
  }

  return s.slice(startIndex, startIndex + maxLength);
};
