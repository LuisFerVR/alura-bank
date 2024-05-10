export default function fnEsMayorDeEdad(campo){
    const fechaNacimiento = new Date(campo.value);
    console.log(fnValidarEdad(fechaNacimiento));
}

function fnValidarEdad (fecha) {
    const fechaActual = new Date();
    const fechaMas18 = new Date(fecha.getUTCFullYear()+18,fecha.getUTCMonth(),fecha.getUTCDate());
    return fechaActual>=fechaMas18;
}