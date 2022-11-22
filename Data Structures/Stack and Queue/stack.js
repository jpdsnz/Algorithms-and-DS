//------- Node Class -------//
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

//------ Stack Class ------//
class Stack{
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek(){
    //See top element or top node
    if(this.top !== null)
      console.log('The top value is: ' + this.top.value); //print out the value of the top
    return this.top;
  }
  push(value){
    //Add Node to top of stack
    const newNode = new Node(value);
    if(this.length ===0) //If top is null
    {
      this.top = newNode;
      this.bottom = newNode;
    }
    else{
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer; //the old top is right after new nod
    }
    this.length++;
    return this;
  }
  pop(){
    //Remove from top of stack
    if(this.top === null)
      return this;
    if(this.top === this.bottom)
      this.bottom = null;
    const holdingPointer = this.top; //Need this to prevent item being removed from memory
    this.top = this.top.next;
    console.log('Successfully popped ' + holdingPointer.value + '!');
    this.length--;
    return this; // can also return holdingPointer to return the popped item!
  }
  isEmpty(){
    let tempNode = this.top
    if(tempNode === null){
      console.log('Stack is empty!');
      return;
    }
    else
      console.log('Stack is not empty!');
  }
  //End Stack Class
}

//------ Stack Array ------//
class StackArray{
  constructor(){
    this.array = [];
  }
  isEmpty(){
    if(!this.array.length)
    {
      //console.log('The Stack is empty!');
      return true;
    }
    else
      return false;
  }
  push(value){
    this.array.push(value);
    console.log('Successfully pushed ' + value);
    return this;
  }
  pop(){
    if( !this.isEmpty() )
    {
      console.log('Successfully popped ' + this.array[this.array.length-1]);
      this.array.pop();
      return this;
    }
    else
      console.log('Unable to pop because the stack is empty!')
  }
  peek(){
    //See top element or top node
    console.log('Top value is ' + this.array[this.array.length-1]);
    return this.array[this.array.length-1];
  }

}

//------- Execution LL Stack --------//
/*
const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.peek();
console.log(myStack);
myStack.isEmpty();
myStack.pop();
console.log(myStack);
*/

//------- Execution Array Stack --------//
/*
const myStack2 = new StackArray();
myStack2.push('Google');
myStack2.push('Udemy');
myStack2.push('Discord');
myStack2.pop();
myStack2.pop();
myStack2.pop();
myStack2.pop();
console.log(myStack2.isEmpty());
//console.log(myStack2.peek());
console.log(myStack2);
*/
