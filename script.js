// Hex Color Generator
const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");

hexBtn.addEventListener("click", () => {
  const characterSet = "0123456789ABCDEF";
  let hexColorOutput = "#";

  // Generate a random 6-character hex code
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    hexColorOutput += characterSet[randomIndex];
  }

  // Update the text content with the generated hex color
  hexColorValue.textContent = hexColorOutput;

  // Update the background color of the body
  document.body.style.backgroundColor = hexColorOutput;
});

// RGB color generator 


// Select the button and other elements
const rgbBtn = document.querySelector("#rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbColorValue = document.querySelector(".rgb-color-value");

// Add event listener for button click
rgbBtn.addEventListener("click", () => {
  // Extract RGB values from input ranges
  const extractRedValue = getRedInputRange.value;
  const extractGreenValue = getGreenInputRange.value;
  const extractBlueValue = getBlueInputRange.value;

  // Update the RGB text value
  rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;

  // Change the background color of the container
  document.body.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;

 
});
