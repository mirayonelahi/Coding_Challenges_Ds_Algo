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
