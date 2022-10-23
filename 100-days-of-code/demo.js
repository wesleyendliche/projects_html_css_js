const inputField = document.getElementById("product-name");
const remainingCharacters = document.getElementById("remaining-chars");

const maxAllowedChars = inputField.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingChars = maxAllowedChars - enteredTextLength;

  remainingCharacters.textContent = remainingChars;

  if (remainingChars === 0) {
    remainingCharacters.classList.add("error");
    inputField.classList.add("error");
  } else if (remainingChars <= 10) {
    remainingCharacters.classList.add("warning");
    inputField.classList.add("warning");
    remainingCharacters.classList.remove("error");
    inputField.classList.remove("error");
  } else {
    remainingCharacters.classList.remove("warning");
    inputField.classList.remove("warning");
  }
}

inputField.addEventListener("input", updateRemainingCharacters);
