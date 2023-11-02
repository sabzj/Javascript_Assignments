// 3. add to the bookUtils object a function getFirstPublished,
// that receives 2 books and returns the book with the
// smaller year.

const book1 = {
  name: "Hope",
  author: "sami",
  year: 2005,
};

const book2 = {
  name: "pleasure",
  author: "joerge",
  year: 2001,
};

const bookUtils = {
  // create an empty object bookUtils (utils = short for utilities).
  getFirstPublished: function (book1, book2) {
    // add a function called getFirstPublished, that receives 2 books
    if (book1.year < book2.year) {
      return `book: ${book1.name} \t Year: ${book1.year}`; // and returns the book with the smaller year.
    } else {
      // I added an else statment to the if
      return `book2 is first published at ${book2.year}`;
    }
  },
};
let x = bookUtils.getFirstPublished(book1, book2);
console.log(x);
