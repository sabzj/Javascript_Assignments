// 1. create an array with at least 5 strings, in different lengths.
// 2. Go over each string in the array and store the length of this string in a
// new array.
// to do so:
// - go over each srting in the array
// - make new empty array
// - change strings to numbers
// - count character number in each string

const stringsArray = ["Rose", "Potato", "Cherry", "Date", "Eggplant"];
const lengthsArray = [];
let str = "";
for (let i = 0; i < stringsArray.length; i++) {
  str += " ";
  str += stringsArray[i].length;
  lengthsArray.push(stringsArray[i].length);
}
console.log(str);

const countries = ["Italy", "France", "Spain", "Greek", "Poland"];
const countries_length = [];

console.log("Countries Names list: ", countries);
console.log("Countries Length list: ", countries_length);
