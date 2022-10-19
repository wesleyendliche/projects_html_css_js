const inputField = document.getElementById('product-name');
const remainingCharacters = document.getElementById('remaining-chars');

const maxAllowedChars = inputField.maxLength;

function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingChars = maxAllowedChars - enteredTextLength;

    remainingCharacters.textContent = remainingChars;
}

inputField.addEventListener('input', updateRemainingCharacters);