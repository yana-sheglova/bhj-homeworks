document.addEventListener('DOMContentLoaded', () => {
	const tooltipTriggers = document.querySelectorAll('.has-tooltip');
	const tooltip = document.querySelector('.tooltip');

	if (!tooltip) return;

	const closeTooltip = () => {
		tooltip.classList.remove('tooltip_active');
	};

	tooltipTriggers.forEach((tooltipTrigger) => {
		tooltipTrigger.addEventListener('click', (event) => {
			event.preventDefault();

			const tooltipText = tooltipTrigger.getAttribute('title');
			if (tooltipText) {
				tooltip.textContent = tooltipText;

				const rect = tooltipTrigger.getBoundingClientRect();
		        tooltip.style.left = `${rect.left + window.scrollX}px`;
		        tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;

				tooltip.classList.toggle('tooltip_active');
			}
		});
	});

	document.addEventListener('click', (event) => {
		const isTooltipTrigger = Array.from(tooltipTriggers).some(trigger => trigger.contains(event.target));
	    if (!isTooltipTrigger && tooltip.classList.contains('tooltip_active') && !tooltip.contains(event.target)) {
			closeTooltip();
		}
	});
});