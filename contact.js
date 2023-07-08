var nameError = document.getElementById('nameerror');
var phoneError = document.getElementById('phoneerror');
var emailError = document.getElementById('emailerror');
var messageError = document.getElementById('messageerror');
var submitError = document.getElementById('submiterror');

function validateName() {
    var name = document.getElementById('name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false
    }

    nameError.innerHTML = '';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('phonenumber').value;

    if(phone.length !== 10) {
        phoneError.innerHTML = 'Input valid contact number';
        return false;
    }

    if(phone.length == 0) {
        phoneError.innerHTML = 'Contact no. is required';
        return false;
    }

    phoneError.innerHTML = '';
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;

    if(email.length == 0) {
        emailError.innerHTML = 'email is required';
        return false;
    }

    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@]{A-Za-z}*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'email invalid';
        return false;
    }

    emailError.innerHTML = '';
    return true;
}

function validateMessage() {
    var message = document.getElementById('message').value;

    if(message.length == 0) {
        messageError.innerHTML = 'message is required';
        return false;
    }

    messageError.innerHTML = '';
    return true;
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.innerHTML = 'Please fill in all the form to submit';
        return false;
    }
}