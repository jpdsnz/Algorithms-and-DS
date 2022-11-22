//---------- Hash Tables ----------//

class HashTable{
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key){ //hash function to hash the key! underscore indicates private, this is O(1)
    let hash = 0;
    for(let i = 0; i < key.length; i++)
    {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length; //modulo makes sure it says within the size of the data!
    }
    return hash;
  }

  set(key, value){
    let address = this._hash(key);
    if(!this.data[address]){ //what if this exists? Need to take care of collisions!
      this.data[address] = [];
      this.data[address].push([key,value]);
      console.log(this.data);
    }
    else{
      this.data[address].push([key, vallue]);
      return this.data;
    }
  }

  get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket)// if it has something interval
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key)
          return currentBucket[i][1];
      }//O(1)
      return undefined;
  }

  keys(){
    const keysArray = [];
    for(let i = 0; i < this.data.length; i++) //This is the downside,
      if(this.data[i]){
        console.log(this.data[i][0][0]); //Learn more of why the last index is needed!
        keysArray.push(this.data[i][0][0]);
      }
      return keysArray;
  }
  //End Hash Class
}


const myHashTable = new HashTable(50); //50 shelfs in memory
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
myHashTable.keys();
//myHashTable.get('grapes');
//myHashTable._hash() // shouldn't be able to access because private
console.log(myHashTable);

//----- Array vs. Hash ------//
/*
  Array: (indexes are fixed!)
    search: O(n)
    lookup: O(1)
    push:   O(1)
    insert: O(n)
    delete:  O(n)

  HashTable
    search: O(1)
    lookup: O(1)
    push:   O(1)
    insert: O(n)
    delete:  O(n)
*/
