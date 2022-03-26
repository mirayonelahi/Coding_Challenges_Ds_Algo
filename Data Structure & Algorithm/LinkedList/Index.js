class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Insert at the beginning of the list
  insertAtBeginning(data) {
    this.head = new Node(data, this.head);
  }

  // insert at end of the list
  insertAtEnd(data) {}

  //print all data inside linkedlist
  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const x = new LinkedList();
x.insertAtBeginning(4);
x.insertAtBeginning(5);
x.insertAtBeginning(6);

x.printData();
