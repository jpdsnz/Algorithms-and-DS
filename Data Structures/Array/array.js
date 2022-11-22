//------------ Arrays ------------//


const strings = ['a', 'b', 'c', 'd'];
//4*4= 16 bytes of storage on 32 bit sys

strings[2]; //grabbing 3rd item from where the array is stored on memory, should be 'c'

//------- Javascript Array Methods -------//
/*
  strings.push('e'); //O(1),    Adds 'e' to the end of array
    *also called append() - can be O(n), because would have to loop over array and copy if ran out of space for dynamic arrays!
  strings.pop(); // O(1),       Remove last item from array,
  strings.unshift('x') O(1),    Add item to front of array
  strings.splice(2, 0, 'alien') //O(n) Go to index of 2 and add alien and shift things over, don't delete which is indicated by 0

*/

//------- Types of Arrays -------//
//Arrays are just objects in Javascript! (a data structure- hash maps in this case )
/*
  Static:   Memory is allocated for the array, with a max, cannot guarantee that you can keep adding
  Dynamic:  Can copy and build an array at a new location
*/

//-------- Optional Classes in Javasccript --------//
/*
  Reference type:
    var object1 = {valuue: 10};
    var object2 = object1; // This is a reference or an address to object 1
    var object3 = {value: 10};
      object1 === object 2; returns true
      object1 === object3; returns false
      object1.value = 15; //assigns to 15
      object2.value // returns 15
      object3.value //returns 10

  Context:
    //Context vs scope
    function b(){
    let a = 4;
  }
  //Can't access this var a globally because its not within scope!
  //console.log(this) //access window object1, console.log(this === window) = true, this.alert.("hello"), .alert() will not work
  function a(){
  console.log(this);
}
//if you call a();, it will show the window object
const object4 = {
    a: function(){
    console.log(this);
  }
}
  object4.a()); can see the actual object!

  Instantiation:
  */

//Instantiation Example
/*
class Player{
  constructor(name, type){
    console.log('player', this); //print the object
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player{
  constructor(name, type){
    super(name, tykpe); // any time you extend, must call parent constructor! (Remember super must be called before using 'this' keyword!!!)
    console.log('wizard', this);
  }
  play(){
    console.log(`WEEEEE i'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer'); //new means to create a new object
const wizard2 = new Wizard('Shawn', 'Dark Magic');

//------- Classical inheritance --------//
  //How it was done before
var Player = function(name, type){
  this.name = name;
  this.type = type;
}

Player.prototype.introduce = function(){
  console.log(`hi I am ${this.name}, I'm a ${this.type}`);
}

var wizard1 = new Player('Shelly', 'healer');
var wizard2 = new Player('Shawn', 'dark magic');

wizard1.play = function(){
  console.log(`WEEEEE i'm a ${this.type}`);
}

wizard2.play = function(){
  console.log(`WEEEEE i'm a ${this.type}`);
}
*/


//------- How to Build an Array Data Structure -------//
/*
class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }

  get(index){
    return this.data[index];
  }

  push(item){
    this.data[this.length] = item; //add data to end
    this.length++;
  }

  pop(){
    const lastItem = this.data[this.length-1]; // get last item
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
    return lastItem;// return last item as a reference!
  }

  shiftItems(index){
    for(let i = index; i < this.length - 1; i++)
    {/// [0 2] => [2]
      this.data[i] = this.data[i+1]; //shift items by 1 to the left!
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('Hi');
newArray.push('you');
newArray.push('!');
//newArray.pop();
newArray.delete(0);
newArray.push('are');
newArray.push('nice');
newArray.delete(1);
console.log(newArray);
*/

//-------------- Interviews Questions ---------------//
//Treat strings as arrays!

//------ Reverse a String ------//
/*
function reverse(str){
  let rev = "";
  //str = str.toLowerCase();
  if(!str || str.length < 2 || typeof str !== 'string')
    return 'Invalid Input!!!'
  else{
    let length = str.length;
    for(let i = length-1; i>=0; i--){
      rev += str[i];
    }
  }
  rev = rev.charAt(0).toUpperCase() + rev.slice(1); //Capitalize first letter, slice from position 1 to the end
  return rev;//optional uppercase
}

function reverseAlt(str){ //Andrei version
  if(!str || str.length < 2 || typeof str !== 'string')
    return 'Invalid Input!!!'
  const backwards = [];
  const totalItems = str.length - 1;
  for(let i = totalItems; i >= 0; i--)
    backwards.push(str[i]);

  return backwards.join('');
}

function reverse2(str){
  return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');\

const reverse4 = str => [...str].reverse().join(''); //spread operator

console.log(reverse('reviver'));
console.log(reverse('Hi My name is Andrei'));
let num = 1282462
console.log(reverse(num.toString()));
console.log(reverseAlt('reviver'));
*/

//------- Merge Sorted Arrays -------//
//  [0,3,4,31], [4,6,30]

console.log('[0 3 4 31]', '[4 6 30]');
function mergeSortedArrays(arr1, arr2){
  const mergedArray = []; //once variable is assigned to this array, cannot modify, can add to array but can't change
  let array1Item = arr1[0]; // let allows this to be changed!
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  //Check Input
  if(arr1.length ===0)
    return arr2;
  if(arr2.length===0)
    return arr1;
  while(array1Item || array2Item)
  {
    console.log(array1Item, array2Item);
    if(!array2Item || array1Item < array2Item) //make sure array 2 item is not undefine!
    {
      mergedArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    }
    else{
      mergedArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));

//------- When to Use Arrays -------//
/*
  Pros:
    - Fast lookups
    - Fast push/pop
    - Ordered
  Cons:
    - Slow inserts
    - Slow deletes
    - Fixed size (if using static array)
*/
