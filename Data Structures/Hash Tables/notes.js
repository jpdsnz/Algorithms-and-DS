//---------- Hash Tables ----------//
//They are what builds objects in javascript!
//Hash tables have fast lookups of O(1), but can have worst case of O(n)

let user = { //User object, all values get placed in memory at different spots
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function(){
    console.log('ahhhhh!');
  }
}

user.age //O(1)
user.spell = 'abra kadabra'; //O(1)
//user.scream(); //O(1)

//Other types of hash tables
const a = new Map() //allows to use anything as a key, (object only allows string as key!)
// Also allows order as opposed to using objects!

const b = new Sets() // only stores keys, but no values!


/*
//------ Collisions - happen when hash object gets placed in the same spots
  - can deal with it by using linked lists (seperate chaining)
  - Hash table wiki - collision resolution (many ways to solve)

Worse Case: O(n) - think looping through linked list!
*/
