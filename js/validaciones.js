export default function fnEsUnCuilt(campo) {
    const cuil = campo.value.replace(/[-\/]/g, "");
    if(fnNumerosRepetidos(cuil)){
        campo.setCustomValidity("valores repetidos");
    }else{
        if (fnValidarPrimerosDosDigitos(cuil) && fnValidarDigitoVerificador(cuil)) {
            alert("cuil válido");
        }else{
            campo.setCustomValidity("CUIL NO EXISTENTE");
        }
    }
}

function fnNumerosRepetidos(cuil) {
    const numRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
        "10101010101",
    ];
    return numRepetidos.includes(cuil);
}

function fnValidarPrimerosDosDigitos(cuil) {
    let priemroDosDigitosDelCuil = cuil.substr(0, 2);
    let IDiitosValidos = ["20", "23", "24", "27", "30", "33", "34"];
    return IDiitosValidos.includes(priemroDosDigitosDelCuil);
}

function fnValidarDigitoVerificador(cuil) {
    let acumulado = 0;
    const factores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 10; i++) {
        acumulado += parseInt(cuil[i], 10) * factores[i];
    }
    let validadorTeorico = 11 - (acumulado % 11);
    if (validadorTeorico == 11) {
        validadorTeorico = 0;
    } else if (validadorTeorico == 10) {
        validadorTeorico = 9;
    }
    const digitoVerificador = parseInt(cuil[10], 10);
    return digitoVerificador === validadorTeorico;
}