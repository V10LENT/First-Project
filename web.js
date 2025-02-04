function checkEmail() {
    let email = document.querySelector('#email').value;
    if(!email.includes("@")) {
        alert("Email incorrect")
    }
    else {
        alert("Successful login")
    }
}