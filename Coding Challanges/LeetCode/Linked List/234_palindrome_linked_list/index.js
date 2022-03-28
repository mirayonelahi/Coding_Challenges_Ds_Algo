/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const reverse = (slow) => {
  let prev = null,
    curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow = reverse(slow);
  fast = head;

  while (slow) {
    if (slow.val != fast.val) {
      return false;
    }

    slow = slow.next;
    fast = fast.next;
  }

  return true;
};
