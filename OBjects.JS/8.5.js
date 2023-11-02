// Create a function that receives 1 argument, an object, and
// returns a new object with the properties and values
// swapped.

function swapObjectNow(inputObject) {
  const swappedObject = {};

  for (const key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      swappedObject[inputObject[key]] = key;
    }
  }

  return swappedObject;
}

// Example usage:
const originalObject = {
  a: "apple",
  b: "banana",
  c: "cherry",
  d: "olives",
};

const swappedObject = swapObjectNow(originalObject);

console.log(swappedObject);
