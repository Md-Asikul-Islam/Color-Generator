// Hex-color-Generator

const hexBtn = document.querySelector("#hex-btn"); // Corrected selector
const hexColorValue = document.querySelector(".hex-color-value");

hexBtn.addEventListener("click", (event) => {
    const characterSet = "0123456789ABCDEF";
    let hexColorOutput = "#";

    // Generate a random hex color
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length); // Fixed random logic
        hexColorOutput += characterSet[randomIndex];
    }

    // Update the text content with the generated hex color
    hexColorValue.textContent = hexColorOutput;

    // Update the background color of the body
    document.body.style.backgroundColor = hexColorOutput;
});

// RGB-color-Generator

// Selecting the input elements for Red, Green, and Blue color values
const getRedInputRange = document.querySelector(".red");
const getGreenInputRange = document.querySelector(".green");
const getBlueInputRange = document.querySelector(".blue");

// Selecting the container to display the RGB value
const rgbColorValue = document.querySelector(".rgb-color-value");

// Selecting the button to trigger the background color change
const rgbBtn = document.querySelector(".rgb-btn");

// Adding an event listener to the button
rgbBtn.addEventListener("click", () => {
    // Getting the current values of Red, Green, and Blue from input ranges
    const updateRedValue = getRedInputRange.value;
    const updateGreenValue = getGreenInputRange.value;
    const updateBlueValue = getBlueInputRange.value;

    // Generating the RGB color string
    const rgbColor = `rgb(${updateRedValue}, ${updateGreenValue}, ${updateBlueValue})`;

    // Updating the text content to show the RGB value
    rgbColorValue.textContent = rgbColor;

    // Changing the background color of the body
    document.body.style.backgroundColor = rgbColor;
});
