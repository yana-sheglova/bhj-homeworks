const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
let counter = 0;
let lastClickTime = null;

function clicker() {
	counter++;
	clickerCounter.textContent = counter;
	const currentTime = new Date();

	if (lastClickTime !== null) {
		const timeDifference = (currentTime - lastClickTime) / 1000;
		const speed = 1 / timeDifference;
		clickSpeed.textContent = speed.toFixed(2);
	};
	lastClickTime = currentTime;

	if (cookie.width === 200) {
		cookie.width = 300;
	} else {
		cookie.width = 200;
	};
};
cookie.onclick = clicker;