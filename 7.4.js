//    we have this array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// using splice modify the array to be this:
// ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"];

let newFruits = fruits.splice(1, 0, "Lemon", "Kiwi");
console.log(fruits);
