function verificarConta() {
    var temConta = true; 

    if (temConta) {
        alert("Doação feita com sucesso!");
        window.location.href = "Index.html";
    } else {
        alert("Você não tem uma conta. Redirecionando para a criação de conta...");
        window.location.href = "criarconta.html";
    }
}