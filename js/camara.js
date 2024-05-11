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

// Guardar una foto
const btnEnviar = document.querySelector("[data-enviar]");
btnEnviar.addEventListener('click',()=>{
    const recibirDatos = localStorage.getItem("registro");
    const datosConvertidos = JSON.parse(recibirDatos);
    datosConvertidos.img_url=imgURL;

    localStorage.setItem('registro',JSON.stringify(datosConvertidos));
    window.location.href="/pages/abrir-cuenta-form-3.html";
});