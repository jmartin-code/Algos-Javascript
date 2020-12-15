//Singly Linked List
//Data structure that contains a head, tail and length
//Linked list consist of nodes and each node has a value and a pointer
//to another node or null. There is no index, there is only head and tail.
//random access is not allow.

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //push to add to the end of the linked list.
    push(value){
        let newNode = new Node(value);
        //make the head and tail point to newNode if the head is empty
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        //Increment and return the list
        this.length++;
        console.log(this);
    }
}

let list = new singlyLinkedList();
//push will enter at the end
list.push("Hola");
list.push("dimelo");