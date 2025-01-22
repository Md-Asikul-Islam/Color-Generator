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

