const localStorageKey = 'toDoTasks';

let tasks = getTasks();
Object.keys(tasks).forEach(task => renderTask(task, tasks[task]));

document.querySelectorAll('.card').forEach((element) => {
    element.addEventListener('click', toggleTask);
});

document.querySelector('#task-submit').addEventListener('click', () => {
    let content = document.querySelector('#task-content').value;
    if ( content ) {
        renderTask(addTask(content), content);
        document.querySelector('#task-content').value = "";
    }
});

function saveTasks() {
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));
}

function getTasks() {
    let tasks = localStorage.getItem(localStorageKey);
    return tasks ? JSON.parse(tasks) : {};
}

function addTask(content, id=Date.now()) {
    tasks[id] = content;
    saveTasks();
    return id;
}

function removeTask(id) {
    delete tasks[id];
    saveTasks();
}

function renderTask(id, content) {
    let cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card');

    let cardCheckbox = document.createElement('div');
    cardCheckbox.classList.add('card-checkbox');

    let cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = content;

    cardWrapper.appendChild(cardCheckbox);
    cardWrapper.appendChild(cardTitle);
    cardWrapper.dataset.id = id;

    document.querySelector('.task-cards-wrapper').appendChild(cardWrapper);
    cardWrapper.addEventListener('click', toggleTask);
}

function toggleTask(event) {
    if ( this.classList.contains('completed') ) {
        addTask(this.querySelector('.card-title').textContent, this.dataset.id);
    } else {
        removeTask(this.dataset.id);
    }
    this.classList.toggle('completed');
}