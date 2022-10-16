let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
    console.log('Paragraph clicked!');
}

paragraphElement.addEventListener('click', changeParagraphText);
//we don't add () to the function name here because we don't want to call the action automatically
//Instead, we wait for the user to call the action.