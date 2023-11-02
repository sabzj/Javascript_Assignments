// create 2 book objects with properties: name, author, year

const book1 = {
  name: "Hope",
  author: "sami",
  year: 1989,
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
    }
  },
  setNewEdition: function (book, editionYear) {
    //add  a function setNewEdition receives a book and an edition year
    book.latestEdition = editionYear; // sets a new property latestEdition with the edition year, or updates an existing one.
  },

  //add to object a setLanguage function
  setLanguage: function (book, language) {
    book.language = language;
  },

  setTranslation: function (book, language, translator) {
    // add function to bookUtils object called setTranslation with three recievers
    book.translation = {
      // sets a new property of translation, which is an object that contains the translator and the language.
      language: language,
      translator: translator,
    };
  },
  setPublisher: function (book, name, location) {
    // add function to bookUtils object called setPublisher with three recievers
    book.publisher = {
      // sets a new property of publisher, which is an object that contains the name and the location.
      name: name,
      location: location,
    };
  },
};

let x = bookUtils.getFirstPublished(book1, book2);
console.log(x);

bookUtils.setLanguage(book2, "German");
console.log(book2);

bookUtils.setTranslation(book1, "french", "Ahmad");
console.log(book1.translation.language);

bookUtils.setPublisher(book1, "Zafer", "Jordan");
console.log(book1.publisher.location);
console.log(book1);
