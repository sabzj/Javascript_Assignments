// Your Task: Edit the storm object. Invoke the printSuperPower
// function using the storm object as the context of the function.
// So your output should be: my superpower is flying.
// Well, Storm also controls the weather, so, whatever you
// choose!
// You cannot change the printSuperPower function

// const storm = {
//   superPower: "flying",
//   printSuper: printSuperPower,
// };
// function printSuperPower() {
//   console.log("my superpower is " + this.superPower);
// }

// storm.printSuper();

// other way I found to solve this code using the "call" method:
const storm = {
  superPower: "flying",
};

function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

// Invoke the printSuperPower function with the storm object as the context
printSuperPower.call(storm); // Output: my superpower is flying
