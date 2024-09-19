var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var btnSubmitSignin = document.querySelector("#submitSignin"); 
var btnSubmitSignup = document.querySelector("#submitSignup"); 

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
    body.className = "sign-in-js";
});


btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});


btnSubmitSignin.addEventListener("click", function (e) {
    e.preventDefault(); 
    window.location.href = "formulario.html"; 
});

btnSubmitSignup.addEventListener("click", function (e) {
    e.preventDefault(); 
    window.location.href = "link-para-cadastro.html";
});

