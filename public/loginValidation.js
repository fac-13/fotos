var lgnForm = document.querySelector('.js-lgn-form');

var lgnUsername = document.querySelector('.js-lgn-username');
var lgnUsernameErr = document.querySelector('.js-lgn-username-err');

var lgnPassword = document.querySelector('.js-lgn-password');
var lgnPasswordErr = document.querySelector('.js-lgn-password-err');

var lgnSubmit = document.querySelector('.js-lgn-submit');

lgnForm.addEventListener('submit', function (event) {
    lgnUsernameErr.innerText = '';
    lgnPasswordErr.innerText = '';

    if (lgnUsername.validity.valueMissing) {
        lgnUsernameErr.innerText = 'Please enter an username';
        event.preventDefault();
    }
    if (lgnPassword.validity.valueMissing) {
        lgnPasswordErr.innerText = 'Please enter a password';
        event.preventDefault();
    }
});