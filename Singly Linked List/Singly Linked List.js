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
    //Method to remove value from the beginning of the liked list.
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
    //Method to add to the beginning of the linked list.
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

    //implement the get method
    get(index){
        //return null if index parameter is out of bound
        if(index < 0 || index >= this.length) {
            console.log("wrong index")
            return null;
        } 

        let counter = 0;
        let current = this.head;

        while(counter !== index){
            counter ++;
            current = current.next;
        }
        console.log(current);
        return current;
    }

    //implement set method to set/change value at an index point
    set(index, value){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.value = value;
            return true;
        }
        return false;
    }

    //Implement insert method to insert a value at a particular index
    insert(index, value){
        //check if index is out of bound
        if(index <0 || index > this.length){
            console.log("wrong index");
            return false;
            //If index equals the lenght, add the value to the end.
        } else if( index === this.length){
            return !!this.push(value);
            //if index equals zero, add the value to the beginning. 
        }else if(index === 0){
            return !!this.unshifting(value);
        }

        let newNode = new Node(value);
        let prev = this.get(index-1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }
        if(index === 0){
            return this.shifting();
        }
        if(index === this.length - 1){
            return this.pop();
        }

        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    //reverse in singly linked list is a common interview question.
    reverse(){
        //swap head and tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        //reverse the other items
        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        console.log(this);
        return this;
    }
}

let list = new singlyLinkedList();
//push will enter at the end
// list.push("Hola");
// list.push("dimelo");
// list.push("muy");
// list.push("vacano");
// list.get(0);
// list.pop();
// list.pop();
// list.shifting();
// list.unshifting("papalote");

list.push(50);
list.push(100);
list.push(150);
list.push(200);
// list.insert(0, 25);
// list.remove(1)
list.reverse();
// console.log(list);
