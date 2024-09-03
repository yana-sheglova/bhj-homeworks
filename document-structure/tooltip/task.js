document.addEventListener('DOMContentLoaded', () => {
	const tooltipTrigger = document.querySelector('.has-tooltip');
	const tooltip = document.querySelector('.tooltip');

	if (!tooltipTrigger || !tooltip) return;

	const closeTooltip = () => {
		tooltip.classList.remove('tooltip_active');
	};

	tooltipTrigger.addEventListener('click', (event) => {
		event.preventDefault();

		const tooltipText = tooltipTrigger.getAttribute('title');
		tooltip.textContent = tooltipText;

		const rect = tooltipTrigger.getBoundingClientRect();
		tooltip.style.left = `${rect.left + window.scrollX}px`;
		tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;

		tooltip.classList.toggle('tooltip_active');
	});

	document.addEventListener('click', (event) => {
		if (tooltipTrigger && tooltip && !tooltipTrigger.contains(event.target) && !tooltip.contains(event.target)) {
			closeTooltip();
		};
	});
});