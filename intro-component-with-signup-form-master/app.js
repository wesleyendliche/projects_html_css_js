const form = document.getElementById('form');
const fname = document.getElementById('firstName');
const lname = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.querySelector('.claim');

function isBlank() {
    if(fname.value.length == ''){
        document.getElementById('firstNameError').style.display;
    } else if (lname.value.length == ''){
        document.getElementById('lastNameError').style.display;
    } else if (email.value.length == ''){
        document.getElementById('emailError').style.display;
    } else if (password.value.length == ''){
        document.getElementById('passwordError').style.display;
    }
}

submit.addEventListener(onclick, isBlank());