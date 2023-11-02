// 6.2. array basics
// 1. 1. Write the command to remove "Greg" from the array.

const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0, 1);
console.log(people);

// 2. Write the command to remove "James" from the array.

const names = ["Greg", "Mary", "Devon", "James"];
people.splice(3, 1);
console.log(names);

// 3. Write the command to add "Matt" to the front of the array.

const students = ["Greg", "Mary", "Devon", "James"];
people.unshift("Matt");
console.log(students);

// 4.. Write the command to add your name to the end of the array.

const visitors = ["Greg", "Mary", "Devon", "James"];
people.push("Zafer");
console.log(visitors);

// 5. Write the command to make a copy of the array using a
// slice. The copy should NOT include "Mary" or "Matt".

const strangers = ["Matt", "Greg", "Mary", "Devon", "James"];
const copiedArray = strangers.slice(1, 5); // Starts at index 0 (matt) and copies to the end
// const copiedArray = people.slice(2, 3); // Starts at index 0 (matt) and copies to the end

console.log(copiedArray); // Output: ["Mary", "matt"]

// I will use the spread operator

const people = ["Greg", "Mary", "Devon", "James"];
const a = [...people];
console.log(a);

// 6. Write the command that gives the indexOf where "Mary" is located.

const pePle = ["Matt", "Greg", "Mary", "Devon", "James"];
const indexx = pePle.indexOf("Mary");
console.log(indexx);

// 7. Write the command that gives the indexOf where "Foo" is
// located. What is returning? Why?
// there is no "Foo" in the array, therefore the result will be -1 which means not indexed.

const fans = ["Matt", "Greg", "Mary", "Devon", "James"];
const newIndex = fans.indexOf("Foo");
console.log(newIndex);

// 8. Redefine the people variable with the value you started
// with. Using the splice command, remove "Devon" from the array and add
// "Elizabeth" and "Artie". Your array should look like this when you are
// done ["Greg", "Mary", "Elizabeth", "Artie",
// "James"].

const people = ["Greg", "Mary", "Devon"];
const remOve = people.pop(); // extra way to remove the end of an array
const spliceRemove = people.splice(2, 1); //removing "Devon" from array
const arrAdding = people.splice(2, 2, "Elizabeth", "Artie"); // adding "Elizabeth" and "Artie" to the array
console.log(people);

// 9. Create a new variable called withBob and set it equal
// to the people array concatenated with the string of "Bob".

const people = ["Greg", "Mary", "Elizabeth", "Artie"];
let withBob = [];
withBob = [...people];

withBob.push("Bob");

const withBob = people.splice(4, 1, "Bob"); //adding by using splice

const withBob = people.push("Bob");
console.log(people);
console.log(withBob);
