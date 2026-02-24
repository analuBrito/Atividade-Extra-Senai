// Alternar Dark Mode
const toggleBtn = document.createElement('button');
toggleBtn.textContent = "🌙 Alternar Tema";
document.body.prepend(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Animação ao rolar
const projetos = document.querySelectorAll('.projeto');
window.addEventListener('scroll', () => {
  projetos.forEach(projeto => {
    const pos = projeto.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      projeto.classList.add('visivel');
    }
  });
});

// Validação de formulário (se você incluir um contato)
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    const email = form.querySelector('input[type="email"]').value;
    const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!regex.test(email)) {
      e.preventDefault();
      alert("Por favor, insira um e-mail válido!");
    }
  });
}
