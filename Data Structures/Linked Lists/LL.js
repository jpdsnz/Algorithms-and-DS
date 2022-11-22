class Node {
  constructor(value){
    this.value = value;
    this.next = null;
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
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
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
  reverse(){
    if(!this.head.next)//If head->next == null
      return this.head;
    let first = this.head;
    this.tail = this.head
    let second = first.next;
    while(second){
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    console.log('Successfully reversed LinkedList!');
    console.log(myLinkedList.printList());
    return this;
  }
//End LinkedList Class
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5); //Insert at tail
myLinkedList.append(16);
//myLinkedList.prepend(1); //Insert at head
//myLinkedList.insert(2, 56);
myLinkedList.insert(200, 99)
myLinkedList.reverse();
//myLinkedList.printList();

//Delete
//myLinkedList.remove(200);
//myLinkedList.remove(5);


//My Insert
/*
insert(index, value) {
  if(index >= this.length)
    return this.append(value);
  let currentNode = this.head;
  for(let k = 0; k < index-1; k++){
    if(k !== index && currentNode != null){
      currentNode = currentNode.next;
    }
  }
  let aft = currentNode.next;
  const newNode = new Node(value);
  newNode.next = aft;
  currentNode.next = newNode;
  this.length++;
  return this;
}
*/
