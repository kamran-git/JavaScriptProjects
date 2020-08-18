const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// create showError Function

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

function showSucess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}
// function for getFieldID
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}

// function to create check email function....


function validateEmail(mail) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(mail).toLowerCase())) {
        showSuccess(mail);
    } else
        showError(mail, 'invalid email');
}

// create check length function
function checkLength(a, min, max) {
    if (a.value.length < min) {
        showError(a, `Minimum length is ${min} character`);
    } else if (a.value.length > max)
        showError(a, `${max} characters are required!`);
}



// Create checkRequired Function

function checkRequired(asdd) {
    asdd.forEach(function(i) {
        if (i.value === '') {
            showError(i, `${getFieldId(i)} is required`);
        }

    })
}



// Add Event Listner
document.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 10);
    checkLength(password, 6, 30);
    validateEmail(email);

})