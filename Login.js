var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

document.getElementById('submitSignup').addEventListener('click', async (event) => {
    event.preventDefault();

    // Captura os dados do formulário
    const nome = document.querySelector('input[placeholder="Nome"]').value;
    const cpf = document.querySelector('input[placeholder="CPF"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const senha = document.querySelector('input[placeholder="Senha"]').value;
    const confirmarSenha = document.querySelector('input[placeholder="Confirme a Senha"]').value;

    // Cria o objeto que será enviado à API
    const registerData = {
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha,
        confirmarSenha: confirmarSenha
    };

    try {
        // Envia a requisição POST para o endpoint de registro
        const response = await fetch('http://localhost:5268/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        });

        // Verifica se a requisição foi bem-sucedida
        if (response.ok) {
            const result = await response.json();
            alert('Cadastro realizado com sucesso!');
        } else {
            const error = await response.json();
            alert('Erro no cadastro: ' + error.message);
        }
    } catch (error) {
        console.error('Erro ao registrar: ', error);
        alert('Erro no servidor.');
    }
});

document.getElementById('submitSignin').addEventListener('click', async (event) => {
    event.preventDefault();

    // Captura os dados do formulário de login
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Senha"]').value;

    // Cria o objeto que será enviado à API
    const loginData = {
        email: email,
        password: password
    };

    try {
        // Envia a requisição POST para o endpoint de login
        const response = await fetch('http://localhost:5268/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        // Verifica se o login foi bem-sucedido
        if (response.ok) {
            const result = await response.json();
            alert('Login realizado com sucesso!');
            console.log('Token JWT: ', result.Token);
            // Aqui você pode armazenar o token no localStorage ou sessionStorage
        } else {
            alert('Erro ao fazer login. Verifique suas credenciais.');
        }
    } catch (error) {
        console.error('Erro ao fazer login: ', error);
        alert('Erro no servidor.');
    }
});
    

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

