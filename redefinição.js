const passwordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const emailInput = document.getElementById('email');
const tokenInput = document.getElementById('token');
const passwordStrengthBar = document.querySelector('.password-strength-bar');
const form = document.getElementById('password-reset-form');

passwordInput.addEventListener('input', updatePasswordStrength);

function updatePasswordStrength() {
  const password = passwordInput.value;
  let strength = 0;
  
  if (password.length >= 8) strength += 25;
  if (password.match(/[a-z]+/)) strength += 25;
  if (password.match(/[A-Z]+/)) strength += 25;
  if (password.match(/[0-9]+/)) strength += 25;
  
  passwordStrengthBar.style.width = strength + '%';
  
  if (strength < 50) {
    passwordStrengthBar.style.backgroundColor = '#ff4d4d';
  } else if (strength < 75) {
    passwordStrengthBar.style.backgroundColor = '#ffd700';
  } else {
    passwordStrengthBar.style.backgroundColor = '#00cc00';
  }
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Validações
  if (!emailInput.value || !tokenInput.value || !passwordInput.value || !confirmPasswordInput.value) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('As senhas não coincidem. Por favor, tente novamente.');
    return;
  }
  
  if (passwordInput.value.length < 8) {
    alert('A senha deve ter pelo menos 8 caracteres.');
    return;
  }
  
  alert('Senha redefinida com sucesso!');
});

const logo = document.querySelector('.logo img');
logo.addEventListener('mouseover', function() {
  this.style.transform = 'scale(1.1)';
});
logo.addEventListener('mouseout', function() {
  this.style.transform = 'scale(1)';
});

const bubblesContainer = document.createElement('div');
bubblesContainer.style.position = 'fixed';
bubblesContainer.style.top = '0';
bubblesContainer.style.left = '0';
bubblesContainer.style.width = '100%';
bubblesContainer.style.height = '100%';
bubblesContainer.style.pointerEvents = 'none';
bubblesContainer.style.zIndex = '0';
document.body.appendChild(bubblesContainer);

function createBubble() {
  const bubble = document.createElement('div');
  bubble.style.position = 'absolute';
  bubble.style.width = Math.random() * 10 + 5 + 'px';
  bubble.style.height = bubble.style.width;
  bubble.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  bubble.style.borderRadius = '50%';
  bubble.style.left = Math.random() * 100 + '%';
  bubble.style.bottom = '-50px';
  bubble.style.animation = `rise ${Math.random() * 15 + 10}s linear infinite`;
  bubblesContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 25000);
}

setInterval(createBubble, 2000);
