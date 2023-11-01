// 1. create a guessing game (function) to find out a number.
// 2. variable => has a random integer between 0 and 50,
// 3. input:> prompt to ask the user for a guess.
//   => If the guess is correct => alert that the guess was write, and stop the game.
// 4. => If the guess is too low –
//      => console.log => that the guess was to low,
//       and
//         prompt again. Same for too high.
// 5. while number is false the game continues
//       else => if user guess the number the game stop

let randomInteger = Math.floor(Math.random() * 51); // Generates a random integer between 0 and 50
let numOfGuess = 1; // Initialize a variable to keep track of the number of guesses

// Main game loop
while (true) {
  // Ask the user for a guess
  let userGuess = prompt("Guess the number between 0 and 50:");

  // Convert the user's input to a number
  userGuess = parseInt(userGuess);
  // Check if the user's guess is correct
  if (userGuess == randomInteger) {
    alert("Congratulations! You guessed the correct number in " + numOfGuess);
    break; // Exit the game loop
  } else if (userGuess < randomInteger) {
    console.log("Your guess is too low. Try again.");
  } else if (userGuess > randomInteger) {
    console.log("Your guess is too high. Try again.");

    // Increase the number of guesses
    numberOfGuesses++;
  }
}
