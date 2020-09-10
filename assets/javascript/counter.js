console.log("hi dre");

let incrementButton = document.querySelector("#increment");
let decrementButton = document.querySelector("#decrement");
let counter = document.querySelector("#counter");

console.log(incrementButton);

// This line says, "I want to listen for someone to CLICK my
// incrementButton, and any time I 'hear' that event occur,
// I want some code to run.
incrementButton.addEventListener("click", function () {
  // Any code you write in here, will run every time incrementButton
  // is clicked.
  // Run the console.log function to display some text in the console:
  console.log("+ button clicked");
  let newCounterValue = Number(counter.innerHTML) + 1;
  counter.innerHTML = newCounterValue;
  if (newCounterValue >= 10) {
    counter.style.color = "red";
  }
  counter.innerHTML = newCounterValue;
}); // We have to close the curly braces and parentheses we opened above.

// This is the "event listener" for clicking the button.
// Use the console.log function to display some text in the console when the button is clicked:
decrementButton.addEventListener("click", function () {
  console.log("- button clicked");
  let newCounterValue = Number(counter.innerHTML) - 1;
  if (newCounterValue < 10) {
    counter.style.color = "black";
  }
  if (counter.innerHTML > 0) {
    counter.innerHTML = newCounterValue;
  }
});
