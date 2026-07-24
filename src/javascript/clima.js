export default function climaDinamico()
{
    const video = document.getElementById("video");
    const dia = document.getElementById("dia");
    const temperatura = document.getElementById("temperatura");
    const clima = document.getElementById("clima");

    const data = new Date();
    const random = Math.floor(Math.random() * 11) + 19;

    dia.innerText = data.toLocaleDateString("pt-BR", {weekday: "long"});
    temperatura.innerText = `${random}°`;
    random < 25 ? clima.innerText = "🌧️" : clima.innerText = "🌤️";
    video.src = random < 25 ? "./img/video_chuva.mp4" : "./img/video_sol.mp4";

}
