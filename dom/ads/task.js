function rotatorStart() {
	const cases = document.querySelectorAll('.rotator__case');
	let currentIndex = 0;

	setInterval(() => {
		cases[currentIndex].classList.remove('rotator__case_active');
		currentIndex = (currentIndex + 1) % cases.length;
		cases[currentIndex].classList.add('rotator__case_active');
	}, 1000);
};

rotatorStart();