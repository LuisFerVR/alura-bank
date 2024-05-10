import fnEsUnCuilt from "./validaciones.js";
import fnEsMayorDeEdad from "./validarEdad.js";
import { tipoErrores, mensajes } from "/js/customErrors.js";

const campoDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const listaRespuestas = {
    nombre: e.target.elements["nombre"].value,
    email: e.target.elements["email"].value,
    identificacion: e.target.elements["identificacion"].value,
    cuil: e.target.elements["cuil"].value,
    fecha_nacimiento: e.target.elements["fecha_nacimiento"].value,
  };
  localStorage.setItem("registro", JSON.stringify(listaRespuestas));
  window.location.href = "/pages/abrir-cuenta-form-2.html";
});

campoDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => {
    fnValidarCampos(campo);
  });
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function fnValidarCampos(campo) {
  let msj = "";
  campo.setCustomValidity("");
  if (campo.name == "cuil" && campo.value.length >= 11) {
    fnEsUnCuilt(campo);
  }
  if (campo.name == "fecha_nacimiento" && campo.vaule != "") {
    fnEsMayorDeEdad(campo);
  }
  tipoErrores.forEach((error) => {
    if (campo.validity[error]) {
      msj = mensajes[campo.name][error];
      console.log(msj);
    }
  });

  const mensajeError = campo.parentNode.querySelector(".mensaje-error");
  const validarInputChecks = campo.checkValidity();
  if (!validarInputChecks) {
    mensajeError.textContent = msj;
  } else {
    mensajeError.textContent = "";
  }
}
