const localStorageKey = 'toDoTasks';

let LocalStorage = getLocalStorage();
Object.keys(LocalStorage).sort((category1, category2) => (
    LocalStorage[category1].position <= LocalStorage[category2].position
)).forEach(category => {
    Object.keys(LocalStorage[category].tasks).sort().forEach(task => renderTask(task, LocalStorage[category].tasks[task], category, true));
});

document.querySelectorAll('.card').forEach((element) => {
    element.addEventListener('click', toggleTask);
});

document.querySelector('#task-submit').addEventListener('click', () => {
    let content = document.querySelector('#task-content').value;
    let category = document.querySelector('#task-category').value;
    category = category ? category : "Uncategorized";
    if ( content ) {
        renderTask(addTask(content, category), content, category);
        document.querySelector('#task-content').value = "";
        document.querySelector('#task-category').value = "";
    }
});

function saveLocalStorage() {
    localStorage.setItem(localStorageKey, JSON.stringify(LocalStorage));
}

function getLocalStorage() {
    let storage = localStorage.getItem(localStorageKey);
    return storage ? JSON.parse(storage) : {};
}

function addTask(content, category="Uncategorized", id=Date.now()) {
    if ( !LocalStorage[category] ) {
        LocalStorage[category] = {
            position: 10,
            tasks: {}
        }
    }
    LocalStorage[category].tasks[id] = content;
    saveLocalStorage();
    return id;
}

function removeTask(id, category) {
    delete LocalStorage[category].tasks[id];
    saveLocalStorage();
}

function renderTask(id, content, category, appendMode = false) {
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
    cardWrapper.dataset.category = category;

    if ( appendMode ) {
        document.querySelector('.task-cards-wrapper').appendChild(cardWrapper);
    } else {
        let categoryElements = document.querySelectorAll(`.card[data-category="${category}"]`);
        if ( categoryElements.length == 0 ) {
            document.querySelector('.task-cards-wrapper').appendChild(cardWrapper);
        } else {
            categoryElements[categoryElements.length - 1].after(cardWrapper);
        }
    }
    cardWrapper.addEventListener('click', toggleTask);
}

function toggleTask() {
    if ( this.classList.contains('completed') ) {
        addTask(this.querySelector('.card-title').textContent, this.dataset.category, this.dataset.id);
    } else {
        removeTask(this.dataset.id, this.dataset.category);
    }
    this.classList.toggle('completed');
}