document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

     document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Tem certeza que deseja sair da sua conta?')) {
      alert('Você foi desconectado com sucesso.');
      window.location.href = 'index.html';
    }
  });
  
