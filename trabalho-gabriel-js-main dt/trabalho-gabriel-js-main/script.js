function revelarmensagem() {
    document.getElementById("mensagem") . innerText = "ola, mundo";
}
function mostrarnome() {
    let nome = document.getElementById("nomeusuario").value;

    document.getElementById("resultadonome").innerText = "bem vindo, " + nome + "!";
}