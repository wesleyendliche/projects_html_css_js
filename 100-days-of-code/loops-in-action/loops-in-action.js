// Sum numbers

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum)

// Highlight Links

const highlightLinksButton = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButton.addEventListener('click', highlightLinks);

// Display User data

const dummyUserData = {
    firstName: 'Wes',
    lastName: 'Endliche',
    age: 30
};

const displayUserDataButton = document.querySelector('#user-data button');

function displayUserData() {
    const outputElement = document.getElementById('output-user-data');

    outputElement.innerHTML = '';

    for (const propertyNames in dummyUserData) {
        const newUserDataListItem = document.createElement('li');
        const outputText = propertyNames.toUpperCase() + ': ' + dummyUserData[propertyNames];

        newUserDataListItem.textContent = outputText;
        outputElement.append(newUserDataListItem);
    }
}

displayUserDataButton.addEventListener('click', displayUserData);