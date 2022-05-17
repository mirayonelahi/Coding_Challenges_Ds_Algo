class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

//         a
//       /   \
//      b     c
//     / \   /
//    d   e  f
//            \
//              g

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
f.right = g;

const _1 = new Node("1");
const _2 = new Node("2");
const _3 = new Node("3");
const _4 = new Node("4");
const _5 = new Node("5");
const _6 = new Node("6");
const _7 = new Node("7");

//      1
//     / \
//    2   3
//   / \   \
//  4   5   6
//     /
//     7
_1.left = _2;
_1.right = _3;
_2.left = _4;
_2.right = _5;
_3.right = _6;
_5.left = _7;

let nodesCountEachLevel = function (root) {
  let result = [];

  if (root === null) {
    return result;
  }

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let row = [];
    let rowSize = queue.length;

    while (rowSize > 0) {
      let currentNode = queue.shift();

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }

      row.push(currentNode.val);
      rowSize--;
    }

    result.push(row.length);
  }

  return result;
};

const similarSizedTrees = (root1, root2) => {
  const nodeCountRoot1 = nodesCountEachLevel(root1);
  const nodeCountRoot2 = nodesCountEachLevel(root2);
  console.log(nodeCountRoot1, nodeCountRoot2);
  if (nodeCountRoot1.length !== nodeCountRoot2.length) return false;

  for (let i = 0; i < nodeCountRoot1.length; i++) {
    if (nodeCountRoot1[i] !== nodeCountRoot2[i]) return false;
  }

  return true;
};

//      1
//     / \
//    2   3
//   / \   \
//  4   5   6
//     /
//     7

//         a
//       /   \
//      b     c
//     / \   /
//    d   e  f
//            \
//              g

similarSizedTrees(a, _1); // returns true
