const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const taskForm = document.getElementById('tasks__form');

taskForm.addEventListener('submit', function(event) {
	event.preventDefault();
	if (taskInput.value.trim() !== '') {
		addTask(taskInput.value);
		taskInput.value = '';
	}
});

function addTask(taskTitle) {
	const taskHTML = `
	<div class="task">
	    <div class="task__title">${taskTitle}</div>
		<a href="#" class="task__remove">&times;</a>
	</div>
	`;

	tasksList.insertAdjacentHTML('beforeend', taskHTML);

	const removeLink = tasksList.querySelector('.task:last-child .task__remove');
	removeLink.addEventListener('click', function(event) {
		event.preventDefault();
		const taskDiv = removeLink.closest('.task');
		if (taskDiv) {
			tasksList.removeChild(taskDiv);
		}
	});
};
