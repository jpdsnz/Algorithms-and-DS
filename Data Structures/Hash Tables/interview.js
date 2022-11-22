//------- Interview Exercises ------//

//---- First Recurring Char ----//

// Given an array = [2,5,1,2,3,5,1,2,4]
// Should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// Should return 2

// Given an array = [2,3,4,5]
// Should return undefined


//Naive Approach (nested loops O(n^2)), but space complexity O(1)

function firstRecurringCharacter(input){
  //input validation - assume we have some input array
  for(let i = 0; i < input.length; i++){
    for(let j = i+1; j < input.length; j++)
      if(input[i] === input[j])
        return input[i];
  }
  return undefined;
}

// Better Approach - Using space complexity here O(n), as a trade off but faster time complexity!
function firstRecurringCharacter2(input){
  let map = {};
  for(let i = 0; i < input.length; i++){ //Using just one loop O(n), way faster than previous
    if(map[input[i]] !== undefined)//if key exists, then just return!
      return input[i];
    else{
      map[input[i]] = i;
    }
  }
  console.log(map);
  return undefined;
}

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]));

//------ Benefits of Hash Tables -------//
/*
  Benefits:
    Fast lookups* (good collision resolution needed, usually don't need to worry about it)
    Fast Inserts
    Flexible Keys
  Disadvantages:
    Unordered
    Slow key iteration


*/
