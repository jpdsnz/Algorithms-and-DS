//------ Dynamic Programming ------//
/*
//------Memoization -- Caching ------//
    - Caching: way to store values to use later on (backpack for school)


function addTo80(n){
  console.log('Long time');
  return n + 80;
}

addTo80(5)
addTo80(5)
addTo80(5)
  //Every time you run this function, it will take a long time
  //How to optimize? With Caching

  let cache = {}
  function memoizedAddTo80(n){
    if(n in cache)// similar to if(cache.n)
      return cache[n]; // return cached value
    else{
      console.log('Long time');
      cache[n] = n + 80;
      return cache[nd]
    }
  }
  console.log('1', memoizedAddTo80(5)); //Should output long time
  console.log('2', memoizedAddTo80(5));//Second time should be faster due to caching!


  //------ Improvements -------//

  Do not want to pollute the global scope, use closures in JS!

  function memoizedAddTo80(n){
    let cache = {};
    return function(n){ //put everything in the function (closure) so that we avoid global scope
      if(n in cache)// similar to if(cache.n)
        return cache[n]; // return cached value
      else{
        console.log('Long time');
        cache[n] = n + 80;
        return cache[nd]
      }
    }
  }

  const memoized = memoizedAddTo80();
  console.log('1', memoizedAddTo80(5)); //Should output long time
  console.log('2', memoizedAddTo80(5));//Second time should be faster due to caching with a hash table
  console.log('2', memoizedAddTo80(6));//Third time does a new calc


//------- Fibonacci Recursion Memoization--------//
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

let calculation=0; // just to count how many times the function is called
function fibonacci(n){
  calculations++; // checking how many times the f(x) gets called!
  if(n < 2)
    return n;
  return fiboanni(n-1)+fibonacci(n-2);
}

fibonacci(7)//should get 13

How efficient is this function? (remember every nested function call adds to the stack!)
  - Not very efficient! if n = 12 then we get 144 calculations, 15 = 610 calculations, 20 = over 6k calculations etc
  - This can be avoided and turned into O(2^n) all the way to O(n) with dynamic programming

//------ Set of Rules ------//
Dynamic Programming: Divide & Conquer + Memoization
  Steps:
    1. Can be divided into sub problem
    2. Recursive soln'
    3. Are there repetitive sub problems?
    4. Memoize sub problems
    5. Demand a raise from your boss!

    let calculations=0;
    function fibonacci(n){ //O(2^n)
      //calculations++; // checking how many times the f(x) gets called!
      if(n < 2)
        return n;
      return fiboanni(n-1)+fibonacci(n-2);
    }

    function fibonacciMaster(){ //O(n) fibonacci function using cache(memoization), sacrifice space complexity for better time complexity(time complexity savings are very large)
      let cache = {};
      return function fib(n){
      calculations++;
        if(n in cache)
          return cache[n];
        else{
          if(n < 2)
            return n;
          else{
            cach[n] = fib(n-1) + fib(n-2);
            return cache[n];
          }
        }
      }
    }

  //-----Third Way to Solve - Bottom Up Approach -------//

  function fibonacciMaster2(n){ //avoids recursion, easier to see but harder to figure when to use!
    let answer = [0, 1];
    for(let i = 2; i <=n; i++)
      answer.push(answer[i-2]+ anser[i-1]);
    return answer.pop();
  }

  const fasterFib = fibonacciMaster();

  console.log('Slow', fibonacci(10))
  console.log('DP', fasterFib(10));
  onsole.log('DP', fibonacciMaster2(100));
  console.log('We did ' + calculations + ' calculations.');












*/
