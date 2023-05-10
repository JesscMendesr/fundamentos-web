const nome = document.getElementById("nome");
const email = document.querySelector("#email");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa");

let textNome = document.querySelector("#textNome");
function validaNome() {
  if (nome.value.length < 2) {
    textNome.innerHTML = "Nome inválido";
    textNome.style.color = "red";
  } else {
    textNome.innerHTML = "Nome válido";
    textNome.style.color = "green";
    nomeOk = true;
  }
}

function validaEmail() {
  let textEmail = document.querySelector("#txtEmail");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    textEmail.innerHTML = "E-mail inválido";
    textEmail.style.color = "red";
  } else {
    textEmail.innerHTML = "E-mail válido";
    textEmail.style.color = "green";
    emailOk = true;
  }
}

function validaAssunto() {
  let textAssunto = document.querySelector("#txtAssunto");
  if (assunto.value.length > 100) {
    txtAssunto.innerHTML =
      "O texto é muito grande, digite no máximo 100 caracteres";
    textAssunto.style.color = "red";
    textAssunto.style.display = "block";
  } else {
    textAssunto.style.display = "none";
    assuntoOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha o formulário corretamente antes de enviar...");
  }
}

function mapaZoom() {
  mapa.style.width = "200%";
}

function mapaNormal() {
  mapa.style.width = "100%";
}
