// Q1:
// // In the global scope, the this keyword will refer to the global object.
// // In a web browser environment, this global object is => window object.
// // Therefore, when you run console.log(this) it will log the window object to the console.

// Q2:
// const myObj = {
//   name: "Timmy",
//   greet: () => {
//     console.log(`Hello ${this.name}`);
//   },
// };
// myObj.greet();

// a. In your own words what will this point to and why?
// this points to the global object because in arrow functions
// does not bind its own context; it retains the "this" context from its enclosing scope,
// which is the global scope in this case which could be (window).

// b. How can you fix this code? it should be normal function (declared function):
const myObj = {
  name: "Timmy",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

myObj.greet(); // Now it will log "Hello Timmy"

// Q3:
// In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
};

// The value of this is dynamic and changes based on how the function is invoked.
// It is determined at runtime, and the behavior of this can vary in different situations:

// 1. If the function is called as a standalone function (e.g., myFuncDec()),
// this will typically point to the global object (e.g., window in a browser environment),
// this is because a regular function declaration is not bound to any specific object or context.

// 2. If the function is used as a method of an object (e.g., obj.myFuncDec()), this will point to the object to which it belongs.
//  In this case, this will refer to obj.

// 3. If the function is used within a constructor function to create objects,
//  this will refer to the newly created object instance. This is a common use case for constructor functions in JavaScript.

// Q4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

// In this specific case, this inside myFuncArrow will most likely point to the global object (e.g., window in a browser),
// because it inherits the this value from the global scope.Because myFuncArrow function is defined at the top level of a script or module,
// it doesn't have a specific surrounding object or context

// Q5:
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});

// a. In your own words, what will this point to and why?
// Arrow function used as the callback for the addEventListener
// in this code does not have its own “this” context.
// Arrow functions inherit the “this” value from the surrounding (enclosing) lexical context in which they are defined
// Since this arrow function is defined within the context of the event listener,
// it will capture the “this” value from its surrounding context,
// which might be the global context or another context, depending on how it's used.

// b. How can you fix this code?
// To fix this code and make this point to the DOM we should use a regular function expression instead of an arrow function.
// Here's how you can fix the code:

document.querySelector(".element").addEventListener(function () {
  console.log(this); // `this` will now refer to the DOM element that triggered the event
});
