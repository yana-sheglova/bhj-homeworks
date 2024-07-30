const reveals = document.querySelectorAll('.reveal');

function onScroll() {
	for (let i = 0; i < reveals.length; i++) {
		const reveal = reveals[i];
		const windowHeight = window.innerHeight;
		const revealTop = reveal.getBoundingClientRect().top;
		const revealBottom = reveal.getBoundingClientRect().bottom;
		if (revealTop < windowHeight && revealBottom > 0) {
			reveal.classList.add('reveal_active');
		} else {
			reveal.classList.remove('reveal_active');
		};
	};
};
window.addEventListener('scroll', onScroll);