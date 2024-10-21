document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
  });
  
document.getElementById('recovery-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Um e-mail de recuperação foi enviado para ${email}. Por favor, verifique sua caixa de entrada.`);
  });
  
  const logo = document.querySelector('.logo img');
  logo.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s ease';
  });
  logo.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
  
  const particlesContainer = document.createElement('div');
  particlesContainer.style.position = 'fixed';
  particlesContainer.style.top = '0';
  particlesContainer.style.left = '0';
  particlesContainer.style.width = '100%';
  particlesContainer.style.height = '100%';
  particlesContainer.style.pointerEvents = 'none';
  particlesContainer.style.zIndex = '0';
  document.body.appendChild(particlesContainer);
  
  function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '3px';
    particle.style.height = '3px';
    particle.style.backgroundColor = 'rgba(0, 179, 255, 0.3)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
    particlesContainer.appendChild(particle);
  
    setTimeout(() => {
      particle.remove();
    }, 15000);
  }
  
  setInterval(createParticle, 1000);
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0% { transform: translateY(0) rotate(0deg); }
      100% { transform: translateY(-100vh) rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
  