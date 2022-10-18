let inputField = document.getElementById('product-name');
let remainingCharacters = document.getElementById('remaining-chars');

let maxAllowedChars = inputField.maxLength;

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingChars = maxAllowedChars - enteredTextLength;

    remainingCharacters.textContent = remainingChars;
}

inputField.addEventListener('input', updateRemainingCharacters);