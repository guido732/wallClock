const agujaSegundos = document.querySelector(".aguja-segundos");
const agujaMinutos = document.querySelector(".aguja-minutos");
const agujaHoras = document.querySelector(".aguja-horas");

function establecerHora() {
	const tiempoActual = new Date();
	const segundos = tiempoActual.getSeconds();
	const segundosGrados = (segundos / 60) * 360 + 180;
	agujaSegundos.style.transform = `rotate(${segundosGrados}deg)`;

	const minutos = tiempoActual.getMinutes();
	const minutosGrados = (minutos / 60) * 360 + 180;
	agujaMinutos.style.transform = `rotate(${minutosGrados}deg)`;

	const horas = tiempoActual.getHours();
	const horasGrados = (horas / 60) * 360 - 90;
	agujaHoras.style.transform = `rotate(${horasGrados}deg)`;
}
setInterval(establecerHora, 1000);
