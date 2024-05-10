import fnEsUnCuilt from "./validaciones.js";
import fnEsMayorDeEdad from "./validarEdad.js";
const campoDeFormulario = document.querySelectorAll('[required]');

campoDeFormulario.forEach((campo)=>{
    campo.addEventListener('blur',()=>{
        fnValidarCampos(campo);
    });
});

function fnValidarCampos (campo) {
    if (campo.name=="cuil" && campo.value.length >= 11) {
        fnEsUnCuilt(campo)
    }
    if(campo.name=="fecha_nacimiento" && campo.vaule != ''){
        fnEsMayorDeEdad(campo);
    }
}