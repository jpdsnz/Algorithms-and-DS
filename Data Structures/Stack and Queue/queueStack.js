//------- Implement a Queue Using a Stack -------//


//------ Stack Array Class ------//
class QueueStack{
  constructor(){
    this.first = [];
    this.last = [];
  }

  isEmpty(){
    if(!this.first.length && !this.last.length)
      return true;
    else
      return false;
  }

  enqueue(value){
    const len = this.first.length;
    for(let i = 0; i < len; i++){
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    console.log('Enqueue has been executed!');
    this.printStack();
    return this;
  }

  dequeue(){
    const len = this.last.length;
    for(let i = 0; i < len; i++){
      this.first.push(this.last.pop());
    }
    this.first.pop();
    console.log('Dequeue has been executed!');
    this.printStack();
    return this;
  }

  printStack(){
    if(this.last.length){
        for(let i = 0; i < this.last.length; i++)
        {
          console.log(this.last[i]);
        }
      }
      else{
        if(this.first.length){
          for(let i = this.first.length-1; i >= 0; i--)
          {
            console.log(this.first[i]);
          }
        }
      }
  }

  peek(){
    //See front element;
    if(this.last.length > 0){
      console.log('Top value is ' + this.last[0]);
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
// End Stack Class
}


//------- Execution Array Stack --------//

const myStack2 = new QueueStack();
/*myStack2.enqueue('Google');
myStack2.enqueue('Instagram');
myStack2.enqueue('Facebook');*/

myStack2.enqueue('Johnny');
myStack2.enqueue('Gat');
myStack2.enqueue('Summer');
myStack2.enqueue('Joy');
console.log(myStack2);
//myStack2.peek();
//console.log(myStack2.isEmpty());


myStack2.dequeue();
myStack2.dequeue();








/*
//------ Solution ------//
class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
*/
