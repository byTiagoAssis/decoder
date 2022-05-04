
var textArea = document.querySelector("textarea");
var resposta = document.querySelector(".resposta");
var cript = document.querySelector(".button1");
var descript = document.querySelector(".button2");

var copiar = document.querySelector(".conteudo-copiar");
var copiado = document.querySelector(".texto-copiado");
var textCript;
var textDescript;


function criptografar() {
  if (textArea.value != "") {
    textCript = textArea.value.replace(/e/g, "enter");
    textCript = textCript.replace(/i/g, "imes");
    textCript = textCript.replace(/a/g, "ai");
    textCript = textCript.replace(/o/g, "ober");
    textCript = textCript.replace(/u/g, "ufat");

    resposta.textContent = textCript;
    copiar.classList.add("showbutton");
    textArea.value = "";
  }
}


function descriptografar() {
  if (textArea.value != "") {
    textCript = textArea.value.replace(/enter/g, "e");
    textCript = textCript.replace(/imes/g, "i");
    textCript = textCript.replace(/ai/g, "a");
    textCript = textCript.replace(/ober/g, "o");
    textCript = textCript.replace(/ufat/g, "u");

    resposta.textContent = textCript;
    copiar.classList.add("showbutton");
    textArea.value = "";
  }
}


function copiarTexto() {
  navigator.clipboard.writeText(resposta.textContent);
  copiado.classList.add("show");
  setTimeout("removerBotao()", 2000);
}


function removerBotao() {
  copiado.classList.remove("show");
}

function revelar() {

  var revelar = document.querySelector("#button");

  button.classList.remove('revelar');
  console.log("clicou");
}

cript.addEventListener("click", criptografar);

descript.addEventListener("click", descriptografar);

copiar.addEventListener("click", copiarTexto);