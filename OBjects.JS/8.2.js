const myCountry = {
  country: "england",
  capital: "london",
  language: "english",
  population: 55.98,
  neigbours: ["scotland", "irland", "france"],

  describe: function () {
    return `London" has ${this.population} people, their mother tongue is ${this.language},
         they have ${this.neigbours.length} countries amd a capital called ${this.capital}`;
  },

  //   Add a method called 'checkIsland' to the 'myCountry'object. ( This method will set a new property on the object)
  //   called 'isIsland' => if there are no neighbouring countries 'isIsland' will be true
  //    else will false .
  //     Use the ternary operator to set the property.

  checkIsland: function () {
    return (this.isIsland = this.neigbours.length === 0 ? true : false);
  },
};

let x = myCountry.describe();
console.log(x);
let y = myCountry.checkIsland();
console.log(y);
