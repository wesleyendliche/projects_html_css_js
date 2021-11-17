const form = document.getElementById('form');
const fname = document.getElementById('firstName');
const lname = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.querySelector('.claim');

function checkIfBlank() {
    const fnameValue = fname.value.trim();
    if (fnameValue === '') {
        window.alert("Field can't be empty");
    } else {
        window.alert("It's OK");
    };
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
})