// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById('external-link');
anchorElement.href = "https://google.com";

anchorElement = document.querySelector('p a');
anchorElement.href = 'https://academind.com';

//CREATED NEW ELEMENT
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google!';
//ACCESS TO THE PARENT ELEMENT THAT SHOULD HOLD THE NEW ELEMENT
let firstParagraph = document.querySelector('p');
//INSERT THE NEW ELEMENT INTO THE PARENT ELEMENT CONTENT 
firstParagraph.append(newAnchorElement);

//REMOVE ELEMENTS - SELECT THE ELEMENTS THAT SHOULD BE REMOVED
let firstH1Element = document.querySelector('h1');
//REMOVE IT
firstH1Element.remove();
//firstH1Element.parentElement.removeChild(firstH1Element); // for older browsers

//MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);

firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>';