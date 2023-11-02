// Create a function  = with parameter (array of integers)
// creat array of integers
// Return a new array without any duplicates inside.

// use: indexOf as part of your solution.
// Example:
// [3,4,4,3,6,3] --→ [3,4,6]
// Answer:

let arrIntigers = [3, 4, 4, 3, 6, 3, 9, 5, 3, 4, 2, 1, 4, 7, 3];
let unDuppledArr = [];

function duplicateArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (unDuppledArr.indexof(arr[i]) === -1) {
      unDuppledArr.push(arr[i]);
    }
  }
  return unDuppledArr;
}
newArray = duplicateArray(arrIntigers);
console.log(newArray);
