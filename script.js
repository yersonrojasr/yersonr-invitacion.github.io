// Define la fecha a la que quieres que llegue la cuenta regresiva
const fechaObjetivo = new Date("October 04, 2025 11:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
const x = setInterval(function() {

    // Obtiene la fecha y hora actual
    const ahora = new Date().getTime();

    // Calcula la distancia entre la fecha actual y la fecha objetivo
    const distancia = fechaObjetivo - ahora;

    // Cálculos de tiempo para días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Muestra los resultados en los elementos HTML
    document.querySelector(".dias").innerHTML = dias;
    document.querySelector(".horas").innerHTML = horas;
    document.querySelector(".minutos").innerHTML = minutos;
    document.querySelector(".segundos").innerHTML = segundos;

    // Si la cuenta regresiva termina, escribe un mensaje
    if (distancia < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
    }
}, 1000);