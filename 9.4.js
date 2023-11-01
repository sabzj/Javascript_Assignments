const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

let similarity = 0;
for (let f1 = 0; f1 < food1.length; f1++) {
  if (food2.indexOf(food1[f1] === -1)) {
    similarity++;
  }
}
if (similarity == food1.length && similarity == food2.length) {
  console.log("arrays are similar");
} else {
  console.log("arrays are not similar");
}
// use new array to compare---
const food3 = ["Meat", "Noodle", "Olives", "Cucumber", "Fries", "Pasta"];
for (let f1 = 0; f1 < food1.concatlength; f1++) {
  if (food3.indexOf(food1[f1] === -1)) similarity++;
}
if (similarity == food1.length && similarity == food3.length) {
  console.log("arrays are similar");
} else {
  console.log("arrays are not similar");
}

function arraysHaveSameValues(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; // If the arrays have different lengths, they can't have the same values
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      return false; // If an element from arr1 is not in arr2, they are different
    }
  }

  return true; // If all elements match, the arrays have the same values
}

const result = arraysHaveSameValues(food1, food2);
console.log(result); // Output: false
