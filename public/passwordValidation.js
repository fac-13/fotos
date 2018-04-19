var registerButton = document.getElementById("register_button");
var regUsername = document.getElementById("regUsername");
var regPassword = document.getElementById('regPassword');
var regPasswordValidation = document.getElementById('regPasswordValidation');
var regPasswordMatch = document.getElementById('regPasswordMatch');
var regEmptyValidation = document.getElementById('regEmptyValidation');
var regConfirmPassword = document.getElementById("confirmPassword");

var errorMessage = document.getElementsByClassName('validation-error');

//SIGN UP FORM 
registerButton.addEventListener('click', function (e) {
    // clears the error message paragraphs
    Array.from(errorMessage).forEach((message) => {
        message.textContent = '';
    });
    // checks that username and password fields aren't empty
    if (!regUsername.value || !regPassword.value) {
        regEmptyValidation.innerHTML = 'Please provide an email and a password.';
    }
    // checks if password matches pattern
    if (regPassword.validity.patternMismatch) {
        regPasswordValidation.textContent =
            'Your password must contain a minimum of 8 characters with both lower-case and upper-case characters and at least one number';
    }
    // checks that 2 passwords are the same
    if (regPassword.value !== regConfirmPassword.value) {
        regPasswordMatch.textContent = 'Your password and confirmation password do not match.';
    }
})