const dropdownValues = Array.from(document.querySelectorAll('.dropdown__value'));

dropdownValues.forEach(value => {
	value.addEventListener('click', function(event) {
		const dropdownList = this.nextElementSibling;

		dropdownValues.forEach(val => {
			const list = val.nextElementSibling;
			if (list !== dropdownList) {
				list.style.display = 'none';
			};
		});

		dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
	});
});

const dropdownLinks = Array.from(document.querySelectorAll('.dropdown__link'));

dropdownLinks.forEach(link => {
	link.addEventListener('click', function(event) {
		event.preventDefault();

		const dropdownValue = this.closest('.dropdown').querySelector('.dropdown__value');
		dropdownValue.textContent = this.textContent;

		const dropdownList = this.closest('.dropdown__list');
		dropdownList.style.display = 'none';
	});
});

document.addEventListener('click', function(event) {
	if (!event.target.closest('.dropdown')) {
		dropdownValues.forEach(value => {
			value.nextElementSibling.style.display = 'none';
		});
	};
});