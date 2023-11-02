const myBook = {
  Title: "Alice in wonderland",
  Author: "Lewis Caroll",
  PublishedYear: "1865",
  Genre: "fantacy",
};

function copyOf(x) {
  return `Title=${myBook.Title},Author=${myBook.Author}, PublishedYear=${myBook.PublishedYear}, Genre=${myBook.Genre}`;
}
console.log("myBook", copyOf(myBook));
