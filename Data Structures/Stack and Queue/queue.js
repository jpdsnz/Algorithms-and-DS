//------- Node Class -------//
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

//------ Queue Class ------//
class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  isEmpty(){
    let tempNode = this.first
    if(tempNode === null){
      //console.log('Queue is empty!');
      return true;
    }
    else
    {
      //console.log('Stack is not empty!');
      return false;
    }
  }
  peek(){
    //See first item in queue
    if(this.first !== null)
      console.log('The first in line is: ' + this.first.value); //print out the value of the top
    return this.first;
  }
  enqueue(value){
    const newNode = new Node(value);
    if(this.isEmpty())
    {
      this.first = newNode;
      this.last = newNode;
    }
    else{
      this.last.next = newNode;
      this.last = newNode;
    }
    console.log('Successfully added ' + value + ' to the queue!');
    this.length++;
    return this;
  }
  dequeue(){
    //First come first serve basis. Who arrives first leaves first first in first out FIFO
    if(this.isEmpty())
      return this;
    if(this.first === this.last)
      this.last = null;
    const holdingPointer = this.first; //Can use this to hold a pointer to data instead of having it be deleted!
    this.first = this.first.next;
    console.log('Successfully dequeued ' + holdingPointer.value);
    this.length--;
    return this; // Can also return holdingPointer also as mentioned above!
  }
//End Queue Class
}



//------- Execution Queue --------//

const myQ = new Queue();
myQ.enqueue('John');
myQ.enqueue('Goku');
myQ.enqueue('Cloud');
myQ.enqueue('Aerith');
console.log(myQ);
myQ.dequeue();
console.log(myQ);
myQ.dequeue();
console.log(myQ);
myQ.dequeue();
console.log(myQ);
myQ.dequeue();
console.log(myQ);
//myQ.peek();
//myQ.isEmpty();
