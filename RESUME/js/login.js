// Static credentials
const userCredentials = {
    email: "test123@gmail.com",
    password: "test123"
}
// Fetching the DOM Elements
const userEmail = document.getElementById("inputEmail");
const userPassword = document.getElementById("inputPassword");
const errorElement = document.getElementById("errorElement");
const noInputError = document.getElementById("noInputError");
const signInBtn = document.getElementById("signInBtn");

// SignIn Button EventHandler
signInBtn.addEventListener('click', function(e){
    if(userEmail.value === "" && userPassword.value === ""){
        noInputError.classList.remove("d-none");
        setTimeout(function(){noInputError.classList.add("d-none"); }, 2000);
    }else{
        if(userEmail.value === userCredentials.email  && userPassword.value === userCredentials.password){
            window.location.href = "/userinfo.html"
        }else{
            errorElement.classList.remove("d-none");
            noInputError.classList.add("d-none");
            setTimeout(function(){errorElement.classList.add("d-none"); }, 2000);
        }
    }
    e.preventDefault();
});