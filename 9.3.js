//You are given two arrays:
// const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "potato"];
// const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
const nums = [1, 6, 6, 9, 3];
const nums2 = [4, 6, 8, 2, 1];
// -write a program for loop over the arrays
// -checks if both of them have the same values or not.
// -console.log true or false as the results.
//  Tests it with same arrays, diff
// arrays, diff order etc.

function arryLength(arr1, arr2) {
  if (arr1.length == arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      for (let x = 0; x < arr2.length; x++) {
        if (arr2.indexOf(arr1[i]) == -1) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
}
console.log(arryLength(nums, nums2));
