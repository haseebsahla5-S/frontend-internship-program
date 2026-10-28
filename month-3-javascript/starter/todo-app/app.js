// Week 11 — To-do app. Complete each TODO.
// Rule: build elements with createElement/textContent, never innerHTML with user text.

const STORAGE_KEY = 'todos';

const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
const count = document.querySelector('#todo-count');
const filterButtons = document.querySelectorAll('[data-filter]');

/** @type {{ id: string, title: string, done: boolean }[]} */
let todos = load();
let filter = 'all';

function load() {
  // TODO: read and JSON.parse todos from localStorage; return [] if missing or invalid
  return [];
}

function save() {
  // TODO: write todos to localStorage as JSON
}

function addTodo(title) {
  // TODO: push { id: crypto.randomUUID(), title, done: false }, then save() and render()
}

function toggleTodo(id) {
  // TODO: flip `done` for the matching todo, then save() and render()
}

function deleteTodo(id) {
  // TODO: remove the matching todo, then save() and render()
}

function visibleTodos() {
  // TODO: return todos filtered by the current `filter` ('all' | 'active' | 'done')
  return todos;
}

function renderItem(todo) {
  // TODO: return an <li class="todo-item"> containing:
  //   - a checkbox (checked = todo.done) with id `todo-${todo.id}`
  //   - a <label for=...> with the title (textContent!)
  //   - a delete button with aria-label `Delete ${todo.title}`
  // Add the class "todo-item--done" when done. Store the id in li.dataset.id.
  const li = document.createElement('li');
  li.textContent = todo.title;
  return li;
}

function render() {
  list.replaceChildren(...visibleTodos().map(renderItem));
  // TODO: show "N items left" in #todo-count (N = todos not done; handle "1 item")
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // TODO: trim the input, ignore empty titles, addTodo(), clear and refocus the input
});

// Event delegation: one listener on the list handles every item.
list.addEventListener('click', (event) => {
  // TODO: find the closest li[data-id]; call toggleTodo when the checkbox was clicked,
  // deleteTodo when the delete button was clicked
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // TODO: set `filter` from button.dataset.filter, update aria-pressed on all buttons, render()
  });
});

render();
