document.addEventListener('DOMContentLoaded', () => {
	const fontSizeElements = document.querySelectorAll('.font-size');
	const bookElement = document.getElementById('book');
	const textColorElements = document.querySelectorAll('.color[data-text-color]');
	const bgColorElements = document.querySelectorAll('.color[data-bg-color]');

	fontSizeElements.forEach(element => {
		element.addEventListener('click', (event) => {
			event.preventDefault();

			fontSizeElements.forEach(el => el.classList.remove('font-size_active'));
			element.classList.add('font-size_active');

			bookElement.classList.remove('book_fs-big', 'book_fs-small');

			const size = element.dataset.size;
			if (size === 'small') {
				bookElement.classList.add('book_fs-small');
			} else if (size === 'big') {
				bookElement.classList.add('book_fs-big');
			};
		});
	});

	textColorElements.forEach(element => {
		element.addEventListener('click', (event) => {
			event.preventDefault();

			textColorElements.forEach(el => el.classList.remove('color_active'));
			element.classList.add('color_active');

			bookElement.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

			const textColor = element.dataset.textColor;
			if (textColor) {
				bookElement.classList.add(`book_color-${textColor}`);
			};
		});
	});

	bgColorElements.forEach(element => {
		element.addEventListener('click', (event) => {
			event.preventDefault();

			bgColorElements.forEach(el => el.classList.remove('color_active'));
			element.classList.add('color_active');

			bookElement.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

			const bgColor = element.dataset.bgColor;
			if (bgColor) {
				bookElement.classList.add(`book_bg-${bgColor}`);
			};
		});
	});
});