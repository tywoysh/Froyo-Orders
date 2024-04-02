// First, get the input from the customer

const userInputString = prompt(
  "Please enter your favorite Froyo flavors (separated by commas):",
  "chocolate,vanilla"
);

// Next, separate the inputs by their commas

const stringArray = userInputString.split(",");

// Create an empty object to store the user's favorite flavors

const favFlavors = {};

// Loop throuh array to get counts of each flavor

const countFlavors = (flavors) => {
  for (let i = 0; i < stringArray.length; i++) {
    currentVal = stringArray[i];
    if (currentVal in flavors) {
      flavors[currentVal] += 1;
    } else {
      flavors[currentVal] = 1;
    }
  }
  return flavors
};

console.log(countFlavors(favFlavors));

