const deadDisplay = document.getElementById('dead');
const lostDisplay = document.getElementById('lost');
let dead = 0;
let lost = 0;
const maxLost = 5;
const maxDead = 10;

function getHole(index) {
	return document.getElementById(`hole${index}`);
};

function randomHole() {
	const index = Math.floor(1 + Math.random() * 9);
	return getHole(index);
};

function showMole() {
	const hole = randomHole();
	hole.classList.add('hole_has-mole');
	setTimeout(() => {
		hole.classList.remove('hole_has-mole');
		if (dead < maxDead && lost < maxLost) {
			showMole();
		};
	}, 1000);
};

for (let i = 1; i <= 9; i++) {
	const hole = getHole(i);
	hole.onclick = () => {
		if (hole.classList.contains('hole_has-mole')) {
			dead++;
			deadDisplay.textContent = dead;
			hole.classList.remove('hole_has-mole');
			if (dead >= maxDead) {
				alert('Вы победили!');
				resetGame();
			};
		} else {
			lost++;
			lostDisplay.textContent = lost;
			if (lost >= maxLost) {
				alert('Вы проиграли :(');
				resetGame();
			};
		};
	};
};

function resetGame() {
	dead = 0;
	lost = 0;
	deadDisplay.textContent = dead;
	lostDisplay.textContent = lost;
	showMole();
};

showMole();