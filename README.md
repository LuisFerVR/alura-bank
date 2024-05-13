<p align="center"> <img src="https://imgur.com/mIBmcEL.png" alt="Javascript: validando formularios"> </p>

<hr>

<p align="center"> <img src="https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png" alt="Logo de Alura"> </p>
<p align="center">Formulario de creación de cuenta para el banco virtual AluraBank.</p>

## Tecnologías utilizadas durante el curso
![Static Badge](https://img.shields.io/badge/Js-yellow)
![Static Badge](https://img.shields.io/badge/HTML-black)
![Static Badge](https://img.shields.io/badge/Css-blue)

## 🚀 Link de despliegue: 🚀

[:open_file_folder: Abrir alura-bank :open_file_folder:](https://luisfervr.github.io/alura-bank/)

---------------------------------------
## Módulo 1:
* Tipos d einput
* Propiedades
* atributos

## Módulo 2:
* addEventListener
* patrones regex

## Patrones/expresiones aplicados Módulo 3:

Cuando trabajamos en el registro de una persona o empresa en una aplicación bancaria como Alura-Bank necesitamos validar su código de identificación laboral o tributaria. Cada país tiene una fórmula específica para generar este código.

Tomaremos como ejemplo el Cuil (Código Único de identificación Laboral) o Cuit (Código Unico de Identificación Tributaria).

![alt text](image.png)

Procedimiento para validar el CUIL / CUIT

CUIL/T: Son 11 números en total:
XY – 12345678 – Z
XY: Indican el tipo (Masculino, Femenino o una empresa)
12345678: Número de DNI
Z: Código Verificador
Algoritmo:

Se determina XY con las siguientes reglas
Masculino: 20
Femenio: 27
Empresa: 30
Se multiplica XY 12345678 por un número de forma separada:

Se suman dichos resultados. El resultado obtenido se divide por 11. De esa división se obtiene un Resto que determina Z.

Si el resto es 0 = Entonces Z=0 Si el resto es 1= Entonces se aplica la siguiente regla:

Si es hombre: Z=9 y XY pasa a ser 23
Si es mujer: Z=4 y XY pasa a ser 23
Caso contrario XY pasa a ser (11- Resto).

148/11=13,4545—>13 (Redondeo)

Obtenemos el resto de la división

148 – (13*11)=5

Determinamos Z

11-5 = 6

El resultado final sería 20-12345678-6

### Lo que aprendi este módulo 3 del curso válidar formulario de una aplicación bancaria

* Valide los dígitos de control de Cuil/Cuit;
* Transforme fórmulas matemáticas en código;
* Tratar con fechas en JavaScript;
* Construya comparaciones de fechas para verificar la edad.

## Almacenamiento y validity Módulo 4:

### Validity y sus propiedades:

const tipoErrores = [
  "valueMissing",
  "typeMissmatch",
  "patternMissmatch",
  "tooShort",
  "customError",
];

### Almacenamiento:

localStorage.setItem('usuario',JSON.stringify(usuario));
El método setItem() permite almacenar objetos en el localStorage y a través del método JSON.stringify() convertimos el objeto a un formato compatible para su almacenamiento.

`localStorage.setItem("nombreLlave",JSON.stringify(json));`

Para almacenar los datos del formulario, se utilizó localStorage. El objeto localStorage permite guardar pares clave/valor en el navegador sin fecha de caducidad, es decir, los datos no se borran cuando se cierra el navegador y quedan disponibles para futuras navegaciones.

`Para verificar su almacenamiento puede dirigirte a la DevTools -> Aplicación -> Almacenamiento -> IP `

## Lo que aprendí en el módulo 4:
* Encontrar validaciones predeterminadas que existen en JavaScript con el estado de validez;
* Interpretar cada tipo de error;
* Crear mensajes personalizados;
* Eliminar el comportamiento de error de HTML predeterminado;
* Mostrar mensajes personalizados en la página;
* Guardar datos en localStorage.

## Capturando imagen Módulo 5

### 1 Inicia la camara

debe de estár dentro de una función async.

`const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true,audio:false}); `

`video.srcObject=iniciarVideo;`

```javascript

//Inicializar la camara del usuario
const btnAbrirCamara =document.querySelector("[data-video-boton]");
const video = document.querySelector("[data-video]");
const campoCamara = document.querySelector("[data-camera]");

btnAbrirCamara.addEventListener("click",async ()=>{
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true,audio:false});
    btnAbrirCamara.style.display="none";
    campoCamara.style.display="block";
    video.srcObject=iniciarVideo;
})
```

### 2 Capturar foto
``` JavaScript

//Capturar una foto
const btnCapturarFoto = document.querySelector("[data-tomar-foto]");
const mensajeDeFotoCapturada = document.querySelector("[data-mensaje]");
const canvas= document.querySelector("[data-video-canvas]");

let imgURL= ""
btnCapturarFoto.addEventListener('click',()=>{
    canvas.getContext('2d').drawImage(video,0,0,canvas.width,canvas.height);
    imgURL=canvas.toDataURL("image/jpeg");
    campoCamara.style.display="none";
    mensajeDeFotoCapturada.style.display="block"
})
```

### 3 Guardar en la localStorage
``` JavaScript
// Guardar una foto
const btnEnviar = document.querySelector("[data-enviar]");
btnEnviar.addEventListener('click',()=>{
    const recibirDatos = localStorage.getItem("registro");
    const datosConvertidos = JSON.parse(recibirDatos);
    datosConvertidos.img_url=imgURL;

    localStorage.setItem('registro',JSON.stringify(datosConvertidos));
    window.location.href="/pages/abrir-cuenta-form-3.html";
});
```

## Aprendizajes del módulo 5
* Iniciar la cámara del usuario en el navegado;
* Capturar foto;
* Manejar eventos de clic;
* Aplicar un flujo de navegación ocultando y mostrando elementos;
* Insertar nuevos datos en localStorage.
