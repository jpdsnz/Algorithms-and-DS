//-------------- Interviews Questions ---------------//
//Treat strings as arrays!

//------ Reverse a String ------//

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

const reverse3 = str => str.split('').reverse().join(''); //Cleaner version array function

const reverse4 = str => [...str].reverse().join(''); //spread operator

console.log(reverse('reviver'));
console.log(reverse('Hi My name is Andrei'));
let num = 1282462
console.log(reverse(num.toString()));
console.log(reverseAlt('reviver'));


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
