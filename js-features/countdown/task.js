let timer = 59;
const timerElement = document.getElementById("timer");
const countdown = setInterval(() => {
	timerElement.textContent = timer;
	if (timer > 0) {
		timer--;
	} else {
		clearInterval(countdown);
		alert('Вы победили в конкурсе!')
	};
}, 1000);