import { element, render } from './view/html-util.js';

console.log("App.js: loaded");

export class App {
    constructor() {
        console.log("App initialized");
    }

    mount() {
        const todoItemForm = document.querySelector("#todo-item-form");
        const todoItemInput = document.querySelector("#todo-item-input");
        const todoList = document.querySelector('#todo-list');
        const todoListElement = element`<ul></ul>`;
        const todoCount = document.querySelector('#todo-count');
        let todoItemNum = 0;

        todoItemForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const todoItem = element`<li>${todoItemInput.value}</li>`;
            todoListElement.appendChild(todoItem);
            render(todoListElement, todoList);

            todoItemNum += 1;
            todoCount.textContent = `ToDoアイテム数: ${todoItemNum}`;

            todoItemInput.value = '';
        });
    }
}