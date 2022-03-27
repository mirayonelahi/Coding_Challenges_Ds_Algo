# Linked List in JS

In linked list it doesn't work like array. we link each node to it's next node. Using pointer we can link each other node. How we implement a node in js?

First we create a new class named Node which has a constructor which take two parameter data and next.
data is the data for current node and next is data for next node.

```js
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
```

Now let's create a LinkedList class where we will create all different methods using Node class.

```js
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}
```

If we want to insert data at the beginning of the linkedlist, we just need to add the head to the inserted node.

```js
 // Insert at the beginning of the list
  insertAtBeginning(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
```

Now if we want to print all the values from linkedlist. we only need the head to start iterating a linkedlist. We update the current state to next and stop if we find a null value.

```js
 //print all data inside linkedlist
  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
```

Now we want to insert a value at the end of a linkedlist. Let's think first how can we approach for this. So we can start iterating from the head and go to the last node. Then we connect the last node with our new data and we connect null for next of our new data.

```js
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
```

So far we created our basic structure and add to linkedlist both from start and end.
Now, lets add data to any specific index in linked list.

Before jumping into coding we can think of the solution.
Firstly for we check of the given index is valid, then we can have 3 scenarios.

- It can add at beginning

  - we change the head and link it
  - the same way we have done in `insertAtBegining()`

- It can add inside or end

```js
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
    node.next = current
    previous.next=node
  }
```

Now we want to get value at specific index. In linkedlist we only have head. so we have to iterate from head to specific index.

```js
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
```
