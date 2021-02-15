//Definition:
//Doubly linked list has two pointer instead of one, as in singly line list.
//one pointer points to the next item, the other points to the previous item.
//Very similar to singly linked list.
//However, doubly linked list takes more merory

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

//add node to the end of the list
