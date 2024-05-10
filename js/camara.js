const btnAbrirCamara =document.querySelector("[data-video-boton]");
const video = document.querySelector("[data-video]");
const campoCamara = document.querySelector("[data-camera]");

btnAbrirCamara.addEventListener("click",async ()=>{
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true,audio:false});
    btnAbrirCamara.style.display="none";
    campoCamara.style.display="block";
    video.srcObject=iniciarVideo;
})