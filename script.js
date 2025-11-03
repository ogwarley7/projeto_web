document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // impede o envio real
    const msg = document.getElementById("msgSucesso");
    msg.classList.remove("hidden"); // mostra a mensagem
    this.reset(); // limpa os campos do formulário
});
