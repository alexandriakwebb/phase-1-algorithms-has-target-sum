function hasTargetSum(array, target) {
  for(let i = 0; i < (array.length - 1); i++) {
    for(let j = i+1; j < (array.length); j++) {
      if(array[i] + array[j] === target){ 
        return true
      }
    }
  }
  return false;
}

hasTargetSum([1, 2, 5, 10], 12)

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Needs to check if any two numbers in the array add up to the target number. If they do, return true.

  For example, [1, 2, 3, 4] if the target is 7 would need to return true (because 3 + 4 = 7)

  If x + y === target
    return true
    else false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
