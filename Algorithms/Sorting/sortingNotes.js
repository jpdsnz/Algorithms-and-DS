//-------------- Elementary Sorts --------------//
//Most sorts can be used from libraries and not need to be implemented from scratch!


//-------------- Bubble Sort --------------//
/* Compare group first two items in array, higher number is swapped with left number.. this continues until the end of array
  Once at the end of the array, we loop back and repeat the bubbled up process at the beginning of the array.

  EX:  [6 5 3 1 8 7 2 4]
  ANS: [1 2 3 4 5 6 7 8]
Not the most effecient, but one of the most simplest algorithms. Time complexity is: O(n^2), space complexity: O(1) for avg cases

*/

/*
const number = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(arr){ //O(n^2), space complex: O(1)
  const length = arr.length;
  for(let i = 0; i < length; i++)
  {
    for(let j = 0; j < length; j++){
      if(arr[j] > arr[j+1])
      {
        //Swap numbers
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}

console.log(number.length);
bubbleSort(number);
console.log(number);
*/

//-------------- Selection Sort --------------//
/*
const number = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr){ //O(n^2), space complex: O(1)
  const length = arr.length;
  for(let i = 0; i < length; i++)
  {
    let min = i;
    let temp = arr[i];
    for(let j = i+1; j < length; j++){
      if(arr[j] < arr[min])
      {
        //Update min if current is lower than what we had previously
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

selectionSort(number);
console.log(number);
*/


/* //My initial version with some errors
function myselectionSort(arr){ //O(n^2), space complex: O(1)
  const length = arr.length;
  for(let i = 0; i < length; i++)
  {
    for(let j = 0; j < length; j++){
      if(arr[i] < arr[j])
      {
        //Swap numbers
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
}
*/


//-------------- Insertion Sort --------------//
// Good for when list is partially sorted
//Best case: Ω(n) when nearly sorted
//Worst case: O(n^2)
//Space Complexity: O(1)

/*
const number = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array){
  const length = array.length;
  for(let i =0; i < length; i++){
    if(array[i] < array[0])
      array.unshift(array.splice(i,1)[0]); //move number to the first position
    else{
      //Find where number should go
      for(let j=1; j<i; j++)
        if(array[i] > array[j-1] && array[i] < array[j]){
          array.splice(j, 0, array.splice(i,1)[0]); // Move number to the right spot
        }
    }
  }
  return array;
}

console.log(insertionSort(number));
*/

//-------------- Divide and Conquer Sorts --------------//

//-------------- Merge Sort --------------//
//O(nlogn), stable (if you have == elements it will keep the original order in the array
//(remember pointers in algorithms class, when it was the same number had to be in the same memory  space)
/*
function mergeSort(array){
  if(array.length ===1) //base case
    return array;

  //Split array into left and right
  const length = array.length;
  const middle = Math.floor(length/2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  //console.log('left:', left);
  //console.log('right:', right);
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex])
      leftIndex++;
    }
    else{
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const number = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//console.log(number);
mergeSort(number);
console.log(mergeSort(number));
*/

//-------------- Quick Sort --------------//
//O(nlogn), using pivoting technique to break into smaller lists
//QS and MS are most used sorting algorithms, space complexity is O(logn), worst time complex: O(n^2)

/*
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
  const len = array.length;
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
*/


//-------------- When to Use Which Sort --------------//
/*

  Insertion Sort  - Used with few items and mostly sorted data, uses little space, easy to implement
  Bubble Sort     - Used for educational purposes, probably will never used due to bad effeciency
  Selection Sort  - Also mostly used as a teaching mechanism
  Merge Sort      - Good because divide/conquer O(nlogn) for all cases, uses space complexity of O(n), good for external sorting(not local space)
  Quick Sort      - Less Space complexity O(logn), pivot must be picked properly or worst case will be O(n^2)
  Heap Sort       - Similar to merge and quick, on average is actually slower than QS in most cases. Will use MS or QS usually in real life.

  Can we beat O(nlogn)? (Mathematically it is impossible)

  Exeptions:
    - You can improve on this if you don't make comparisons!

  Non Comparison Sorts: (Only work with integers in an restricted range! ex: 0-100, Does not work on data!)
    - Counting Sort -
    - Radix Sort    -













*/
