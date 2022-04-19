# 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

- we are using stack data structure here to solve this problem
- when we get any closing tag we just need to check before that closing bracket that open bracket is used
- if not then we return false
- when we get any opening bracket we add that in our stack (we using an array for stack)
- when we get any closing we check the current closing with last value from stack and check that they are in same category
- for making it same category we can use hashtable data structure .
- we store all opening and close bracket as key value pairs
