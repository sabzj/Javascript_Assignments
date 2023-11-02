const strg = "The more you know, the more you know that you don't know";

// const string = "The more you know, the more you know that you don't know";
const wordToFind = "you";

// Use lastIndexOf to find the index of the last occurrence of the word
const lastIndex = strg.lastIndexOf(wordToFind);

console.log(lastIndex); // Output: 42

const sent = "The more you know, the more you know that you don't know";

// // finding matching strings by search method
// console.log(string.search("you don't"));

// // finding matching strings by match method
// console.log(string.match("you don't"));

console.log(sent.match(/you/)); // takes the first occurence of the word "you" in the given string and returns it as an array.
// the output is: [ 'you', index: 10, input: 'The more you know, the more you know that you don't know', groups: undefined ]

console.log(sent.match(/you/g)); // finding multiple matching strings by match method saves them in array
