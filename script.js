// Froyo Order Tracker

// 1. Prompt user for froyo flavors
const userInput = prompt(
  "Please enter your froyo flavors separated by commas (e.g., vanilla,strawberry,coffee):"
);

// 2. Parse the input into an array
const flavorsArray = userInput
  .split(",")
  .map((flavor) => flavor.trim().toLowerCase());

// 3. Function to count flavors
function countFlavors(flavors) {
  const flavorCounts = {};

  for (let flavor of flavors) {
    // If the flavor already exists in the object, increment it
    if (flavorCounts[flavor]) {
      flavorCounts[flavor]++;
    } else {
      // Otherwise, start it at 1
      flavorCounts[flavor] = 1;
    }
  }

  return flavorCounts;
}

// 4. Get the flavor counts
const flavorSummary = countFlavors(flavorsArray);

// 5. Output the result in the console
console.log("Your Froyo Order Summary:");
for (let flavor in flavorSummary) {
  console.log(`${flavor}: ${flavorSummary[flavor]}`);
}
