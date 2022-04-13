// Linked List
function Node(data) {
  this.data = data;
  this.next = null;
}

// Stack implemented using LinkedList
function Stack() {
  this.top = null;
}

Stack.prototype.push = function (data) {
  var newNode = new Node(data);

  newNode.next = this.top; //Special attention
  this.top = newNode;
};

Stack.prototype.pop = function () {
  if (this.top !== null) {
    var topItem = this.top.data;
    this.top = this.top.next;
    return topItem;
  }
  return null;
};

Stack.prototype.print = function () {
  var curr = this.top;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
};

// var stack = new Stack();
// stack.push(3);
// stack.push(5);
// stack.push(7);
// stack.print();
