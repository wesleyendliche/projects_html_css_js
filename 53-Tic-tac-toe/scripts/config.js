function openPlayerConfig() {
    editedPlayer = +event.target.dataset.playerid; //related to 'data' attribute in HTML; + to covert string to a number
    playerConfigOverlay.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim(); //'    Wes  ' => 'Wes'

    if (!enteredPlayerName) { // enteredPlayerName === ''
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return; // not execute other code when return is activated
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    // if (editedPlayer === 1) {
    //     players[0].name = enteredPlayerName;
    // } else {
    //     players[1].name = enteredPlayerName;
    // }

    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}