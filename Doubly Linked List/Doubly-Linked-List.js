//Definition:
//Doubly linked list has two pointer instead of one, as in singly line list.
//one pointer points to the next item, the other points to the previous item.
//Very similar to singly linked list.
//However, doubly linked list takes more merory

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
}

//add node to the end of the list
list = new DoublyLinkedList();

console.log(list.push(99));
console.log(list.push("Last Item"));
