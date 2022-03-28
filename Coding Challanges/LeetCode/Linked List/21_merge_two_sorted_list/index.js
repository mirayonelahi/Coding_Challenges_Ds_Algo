/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // we create a dummynode as make that our new head
  // now comparing two given lists we will point our new list accordingly
  // if we have uneven lists we point the rest of lists
  let dummyNode = new ListNode(-1);

  // as the dummyNode can be changed each time as it is referece
  // so we save this in a variable
  let head = dummyNode;

  // now we compare between the given two list node
  //we will stop if we reach any of those tail
  while (l1 !== null && l2 !== null) {
    //check if l1 value is bigger then
    // we point the l2 value with out new list
    if (l1.val > l2.val) {
      // point the new node to lowest one
      dummyNode.next = l2;
      // increate the pointed node
      l2 = l2.next;
    }
    //else the other value is bigger
    else {
      dummyNode.next = l1;
      l1 = l1.next;
    }
    // each iteration iteratet our new node
    dummyNode = dummyNode.next;
  }
  // check if anyone of them not null
  dummyNode.next = l1 || l2;

  return head.next;
};
