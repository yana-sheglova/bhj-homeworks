const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));
tab.forEach((tabItem, index) => {
	tabItem.addEventListener('click', () => {
		tab.forEach(item => item.classList.remove('tab_active'));
		tabContent.forEach(content => content.classList.remove('tab__content_active'));

		tabItem.classList.add('tab_active');
		tabContent[index].classList.add('tab__content_active');
	});
});