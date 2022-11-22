//------Doubly Linked List------//
//Contains an extra pointer that points to previous node!

//Pro and cons
/*
  Requires more memory, but can be traversed forward and backward




*/

class Node {
  constructor(value){
    this.value = value;
    this.next = null,
    this.prev = null;
  }
}

class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  //-----Methods------//
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    console.log('Successfully added node to end of linked list');
    console.log(myLinkedList.printList());
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    console.log('Successfully added node to start of linked list');
    console.log(myLinkedList.printList());
    return this;
  }
  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null)
    {
      array.push(currentNode.value);
      //console.log(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  insert(index, value) {
    if(index >= this.length)
      return this.append(value);
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    follower.prev = newNode;
    newNode.next = follower;
    this.length++;
    console.log('Successfully inserted node at index '+ index + '!');
    console.log(myLinkedList.printList());
    return this;
  }
  remove(index){
    if(index >= this.length)
    {
      console.log('Warning, cannot remove! '+ 'Index ' + index + ' does not exist!');
      console.log(myLinkedList.printList());
      return this;
    }
    const leader = this.traverseToIndex(index -1);
    const nodeToDelete = leader.next;
    leader.next = nodeToDelete.next
    this.length--;
    console.log('Successfully removed node at index '+ index + '!');
    console.log(myLinkedList.printList());
    return this;
  }
//End LinkedList Class
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5); //Insert at tail
myLinkedList.append(16);
console.log(myLinkedList);
myLinkedList.prepend(1); //Insert at head
myLinkedList.insert(1, 56);
console.log(myLinkedList); //See LL with pointers
myLinkedList.insert(200, 99)
myLinkedList.remove(200);
myLinkedList.remove(5);
