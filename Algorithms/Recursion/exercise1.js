//------ Exercise 1 ------//
/*
function findFactorialRecursive(number){ //O(n)
  if(number === 2)
    return 2;
  return number * findFactorialRecursive(number-1);
}

function findFactorialIterative(number){ //O(n)
  let answer = 1;
  if(number === 2)
    answer = 2;
  for(let i = 2; i <= number; i++){ //start at 2, because 2! = 2x1 or 2, use = because need to include
    answer *= i
  }
  return answer;
}

console.log(findFactorialIterative(5)); //answer should be 120
console.log(findFactorialRecursive(5));
*/

//------ Exercise 2 Fibonacci ------//
/*
function fibonacciIterative(n){ //O(n)
  let arr = [0, 1];
  for(let i = 2; i < n + 1; i++){
    arr.push(arr[i-2] + arr[i-1]);
  }
  return arr[n];
}

function fibonacciRecursive(n){ //O(2^n)  Exponential time. Increases more and more
  if(n < 2)
    return n;
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciIterative(8));
console.log(fibonacciRecursive(8));
*/
