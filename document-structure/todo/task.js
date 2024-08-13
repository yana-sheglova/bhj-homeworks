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
	const tasksList = document.getElementById('tasks__list');
	const taskDiv = document.createElement('div');
	taskDiv.className = 'task';

	const titleDiv = document.createElement('div');
	titleDiv.className = 'task__title';
	titleDiv.textContent = taskTitle;
	taskDiv.appendChild(titleDiv);

	const removeLink = document.createElement('a');
	removeLink.href = '#';
	removeLink.className = 'task__remove';
	removeLink.innerHTML = '&times;';

	removeLink.addEventListener('click', function(event) {
		event.preventDefault();
		tasksList.removeChild(taskDiv);
	});

	taskDiv.appendChild(removeLink);
	tasksList.appendChild(taskDiv);
};