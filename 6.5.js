// Define the object you want to replicate in the array
const sampleObject = { key1: "value1", key2: "value2" };

// Create an array and use the fill method to fill it with 100 instances of the same object
const arrayOfObjects = new Array(100).fill(sampleObject);

// Now arrayOfObjects contains 100 copies of the sampleObject
console.log(arrayOfObjects);

// const numbers = new Array(100);
// numbers.fill({ key: "Value" });
// console.log("1. Creating 100 of objects: ", numbers);
