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
    this.size++;
  }

  // insert at end of the list
  insertAtEnd(data) {
    let node = new Node(data);
    let current;
    // check if the head is empty then add the node to head
    if (!this.head) {
      this.head = node;
    }
    // if head not empty we need to iterate to the tail
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //insert at specific index
  insertAt(data, index) {
    // check the edge cases first if index is out of range
    if (index < 0 && index > this.size) {
      return;
    }

    //check if its first index then we need to add head
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }
    node.next = current;
    previous.next = node;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

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
x.insertAtEnd(7);
x.insertAt(0, 4);

x.getAt(3);

x.printData();
