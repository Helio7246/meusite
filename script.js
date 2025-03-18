document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();
    let msg = document.getElementById("msg");
    
    if (nome === "" || email === "" || mensagem === "") {
        msg.style.color = "red";
        msg.textContent = "Por favor, preencha todos os campos.";
        return;
    }
    
    msg.style.color = "green";
    msg.textContent = "Mensagem enviada com sucesso!";
    
    document.getElementById("contactForm").reset();
});











