// Menu Mobile
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

mobileMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileMenu.querySelector("i").classList.toggle("fa-bars");
  mobileMenu.querySelector("i").classList.toggle("fa-xmark");
});

// Fechar menu ao clicar no link
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    mobileMenu.querySelector("i").classList.add("fa-bars");
    mobileMenu.querySelector("i").classList.remove("fa-xmark");
  });
});

// Envio do Formulário
const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
  submitBtn.disabled = true;

  fetch(this.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        alert("Sucesso! Recebi seu e-mail. Entrarei em contato em breve.");
        contactForm.reset();
      } else {
        alert("Ops! Algo deu errado. Tente pelo WhatsApp (11 93727-4243).");
      }
    })
    .catch((error) => {
      alert("Erro de conexão. Verifique sua internet.");
    })
    .finally(() => {
      submitBtn.innerHTML = "Enviar para Matheus";
      submitBtn.disabled = false;
    });
});
