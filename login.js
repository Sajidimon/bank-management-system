// step-1: add click event handle with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2: get the email address from email input field
    // always remember to use .value to get text from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get the password from user

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'my@account.com' && password == 'secret') {
        window.location.href = 'account.html';
    } else {
        alert('Goriber gorib password thik kore de');
    }

})