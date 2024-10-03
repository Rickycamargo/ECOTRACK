var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

function maskDate(event) {
    let input = event.target;
    let value = input.value;
    
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
        value = value.replace(/\D/g, "");  
        if (value.length > 2) value = value.replace(/(\d{2})(\d)/, "$1/$2");
        if (value.length > 5) value = value.replace(/(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
        input.value = value;
    }
}

function mascaraCPF(cpfInput) {
    let cpf = cpfInput.value.replace(/\D/g, ''); 
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    cpfInput.value = cpf;
}

document.getElementById('date').addEventListener('input', maskDate);
document.getElementById('cpf').addEventListener('input', maskCPF);

document.getElementById('date').addEventListener('input', maskDate);
document.getElementById('cpf').addEventListener('input', maskCPF);
