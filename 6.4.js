// 1. Create an array containing 4 population values of 4
// countries of your choice. Store this array into a variable
// called 'populations'
// 2. Create a function called ‘populationPercentages’ that
// takes the population array as an argument.
// 3. Inside the function, create an empty array called
// // ‘percentages’.
// 4. Use a for loop to iterate over the population array you
// received as an argument..
// 5. On each iteration use the function we created earlier
// (module 3, ex.3.3-declarations vs expressions) for each
// element of the array.
// 6. Push the result to the ‘percentages’ array.
// 7. Return from the function the ‘percentages’ array.

const populations = [60000, 55000, 142000, 25000];

function populationPercentages(arr) {
  let percentages = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    let totalSum = percentageOfWorld1(arr[i]);
    percentages.push(totalSum);
  }
  return percentages;
}

const irland = 5864721;
const worldPopulation = 97000000;
function percentageOfWorld1(popVal) {
  let sum = (popVal / worldPopulation) * 100;
  return sum;
}
console.log(percentageOfWorld1(irland));

// The world population is 7900 million people. Create
// a function declaration called 'percentageOfWorld1'
// which receives a 'population' value, and returns the
// percentage of the world population that the given
// population represents. For example, China has
// 1441 million people, so it's about 18.2% of the world
// // population.
// To calculate the percentage, divide the given
// 'population' value by 7900 and then multiply by 100.
// the answer:
// 1. creat function declaration called percentageOfWorld1
// 2. define one population value
// 3. divide the population value on the world population (7900) milion multiplied by 100
// 4. return percentage of the population
