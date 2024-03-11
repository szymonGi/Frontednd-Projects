const input = document.querySelector('#input');
const addTaskButton = document.querySelector('#addTask');
const toDosContainer = document.querySelector('#toDos');

function addTask(){
    const task = document.createElement('div');
    task.innerText = input.value;
    task.classList.add('task');
    toDosContainer.appendChild(task);
    input.value = "";

    task.addEventListener('dblclick', () => toDosContainer.removeChild(task));
}

addTaskButton.addEventListener('click', addTask);