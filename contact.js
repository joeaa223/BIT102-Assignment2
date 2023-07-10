function validateForm() {
    var name = document.form.name.value;
    var phone = document.form.phonenumber.value;
    var email = document.form.email.value;
    var message = document.form.message.value;


    if(name == null || name == "") {
        alert("Name section is empty");
        return false
    }

    else if(phone == null || phone == "" || phone != 10){
        alert("Enter correct contact number format");
        return false;
    }

    else if(email == null || email == ""){
        alert("Email section is empty");
        return false;

    }

    else if(message == null || message == ""){
        alert("Message section is empty");
        return false;
    }
}