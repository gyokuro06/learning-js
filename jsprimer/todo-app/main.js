import { App } from "./src/App.js";

const app = new App({
    todoItemForm: document.querySelector('#todo-item-form'),
    todoItemInput: document.querySelector('#todo-item-input'),
    todoList: document.querySelector('#todo-list'),
    todoCount: document.querySelector('#todo-count'),
});

window.addEventListener('load', app.mount);
window.addEventListener('unload', app.unmount);