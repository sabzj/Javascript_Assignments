const flights = [
  {
    from: "Tel aviv",
    to: "amsterdam",
    price: 40,
    dates: [
      { depart: new Date("24.11.2023") },
      { return: new Date("1.12.2023") },
    ],
  },
  {
    from: "Tel aviv",
    to: "london",
    price: 75,
    dates: [
      { depart: new Date("28.11.2023") },
      { return: new Date("12.12.2023") },
    ],
  },
  {
    from: "Athens",
    to: "Prague",
    price: 95,
    dates: [
      { depart: new Date("28.11.2023") },
      { return: new Date("12.12.2023") },
    ],
  },
  {
    from: "Berlin",
    to: "Prague",
    price: 22,
    dates: [
      { depart: new Date("28.11.2023") },
      { return: new Date("12.12.2023") },
    ],
  },
  {
    from: "London",
    to: "Berlin",
    price: 100,
    dates: [
      { depart: new Date("28.11.2023") },
      { return: new Date("12.12.2023") },
    ],
  },
];

// Get form and input elements
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const isAdminCheckbox = document.getElementById("isAdmin");

// Add event listener for form submission
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get user input
  const email = emailInput.value;
  const password = passwordInput.value;
  const isAdmin = isAdminCheckbox.checked;

  // Simulate user authentication (we should replace this with actual validation)
  if (email === "user@example.com" && password === "password123") {
    // Store user information in localStorage
    const user = {
      email: email,
      isAdmin: isAdmin,
    };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Login successful. User is an admin: " + isAdmin);
  } else {
    alert("Login failed. Please check your email and password.");
  }

  // Get user information from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Check if the user is an admin
  const chekIsAdmin = isAdmin;
  chekIsAdmin = user && user.isAdmin;

  // Define available features for admin and regular users
  if (isAdmin) {
    chekIsAdmin.value("checked");
    // Admin features
    console.log("Admin features enabled");
    // Provide options to add flights, search, and sort flights (price)
    // Add event listeners for admin features
    document
      .getElementById("addFlightButton")
      .addEventListener("click", addFlight);
    document
      .getElementById("searchFlightsButton")
      .addEventListener("click", searchFlights);
    document
      .getElementById("sortFlightsButton")
      .addEventListener("click", sortFlightsByPrice);
  } else {
    // Regular user features
    console.log("Regular user features enabled");
    // Allow access to search and sort flights (price) only
    // Add event listeners for regular user features
    document
      .getElementById("searchFlightsButton")
      .addEventListener("click", searchFlights);
    document
      .getElementById("sortFlightsButton")
      .addEventListener("click", sortFlightsByPrice);
  }

  // Cart data structure to store selected flights
  const cart = [];

  // Function to add a flight to the cart
  function addToCart(flight) {
    cart.push(flight);
  }

  // Function to update the UI with selected flights in the cart
  function updateCartUI() {
    const cartList = document.getElementById("cartList");
    cartList.innerText = "";

    cart.forEach((flight) => {
      const cartItem = document.createElement("li");
      cartItem.textContent = `${flight.name} - Price: $${flight.price}`;
      cartList.appendChild(cartItem);
    });
  }

  // Event listeners for flight selection
  flights.forEach((flight) => {
    const selectButton = document.createElement("button");
    selectButton.textContent = "Select";
    selectButton.addEventListener("click", () => {
      addToCart(flight);
      updateCartUI();
    });

    const flightItem = document.createElement("section");
    flightItem.textContent = `${flight.name} - Price: $${flight.price}`;
    flightItem.appendChild(selectButton);

    const flightsList = document.getElementById("flightsList");
    flightsList.appendChild(flightItem);
  });

  // Initialize the cart UI
  updateCartUI();

  // Create an array to store the user's booked flights
  const bookedFlights = [];

  // Function to add booked flights
  function addBookedFlight(flight) {
    bookedFlights.push(flight);
  }

  // Function to store booked flights in localStorage
  function storeBookedFlights() {
    // Convert the array to a JSON string
    const bookedFlightsJSON = JSON.stringify(bookedFlights);

    // Store the JSON string in localStorage under the key "myFlights"
    localStorage.setItem("myFlights", bookedFlightsJSON);
  }

  // Example: When the user confirms the booking
  const selectedFlights = [flight1, flight2, flight3]; // Replace with the actual selected flights
  selectedFlights.forEach((flight) => {
    addBookedFlight(flight);
  });

  // After adding all the selected flights, store them in localStorage
  storeBookedFlights();

  // Clear form fields
  emailInput.value = "";
  passwordInput.value = "";
  isAdminCheckbox.checked = false;
});
