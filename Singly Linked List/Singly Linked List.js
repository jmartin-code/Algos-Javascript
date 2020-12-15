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
    
    //pop from the tail and reset new tail
    pop(){
        if(!this.head) return undefined;
        //set current and newTail variables to start at the beginning of the linked list
        let current = this.head;
        let newTail = current;
        
        while(current.next){
            newTail = current;
            current = current.next;
        }
        //at the end of the loop, this.tail should be set to newTail
        this.tail = newTail;
        //set the this.tail.next to null;
        this.tail.next = null;
        //decrement the length
        this.length--;
        //check if length is zero and reset head and tail to null
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        //return current
        console.log(current);
    }

    shifting(){
        //if the there is no head return undefined
        if(!this.head) return undefined;
        //set current head to a variable
        let current = this.head;
        // set head to next 
        this.head = current.next;
        //decrease the length
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        console.log(current);
    }

    unshifting(value){
        //create a new node
        let newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        
        this.length++;
        console.log(this)
        
    }

}

let list = new singlyLinkedList();
//push will enter at the end
list.push("Hola");
list.push("dimelo");
// list.pop();
// list.pop();
list.shifting();
list.unshifting("papalote");
console.log(list);