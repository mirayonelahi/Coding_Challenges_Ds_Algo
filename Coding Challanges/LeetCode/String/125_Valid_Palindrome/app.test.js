test("is it palindrome", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});

const isPalindrome = (s) => {
  // remove all non-alphanumeric characters

  // exclude a-z and 0-9 and replace all other character by empty string
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
