document.addEventListener('DOMContentLoaded', () => {
	const tooltipTriggers = document.querySelectorAll('.has-tooltip');
	let tooltip = document.querySelector('.tooltip');
  
	if (!tooltip) {
	  tooltip = document.createElement('div');
	  tooltip.classList.add('tooltip');
	  document.body.appendChild(tooltip);
	};
  
	const closeTooltip = () => {
	  tooltip.classList.remove('tooltip_active');
	};
  
	tooltipTriggers.forEach((tooltipTrigger) => {
	  tooltipTrigger.addEventListener('click', (event) => {
		event.preventDefault();
  
		const tooltipText = tooltipTrigger.getAttribute('title');
		const currentText = tooltip.textContent;
		
		if (tooltipText === currentText) {
		  tooltip.classList.toggle('tooltip_active');
		} else {
		  tooltip.textContent = tooltipText;
		  const rect = tooltipTrigger.getBoundingClientRect();
		  tooltip.style.left = `${rect.left + window.scrollX}px`;
		  tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
  
		  tooltip.classList.add('tooltip_active');
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