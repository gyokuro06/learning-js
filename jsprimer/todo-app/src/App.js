import { TodoItemModel } from './model/TodoItemModel.js';
import { TodoListModel } from './model/TodoListModel.js';
import { element, render } from './view/html-util.js';

console.log("App.js: loaded");

export class App {
    #todoListModel = new TodoListModel();

    constructor() {
        console.log("App initialized");
    }

    mount() {
        const todoItemForm = document.querySelector("#todo-item-form");
        const todoItemInput = document.querySelector("#todo-item-input");
        const todoList = document.querySelector('#todo-list');
        const todoCount = document.querySelector('#todo-count');

        this.#todoListModel.onChange(() => {
            const todoListBaseElement = element`<ul></ul>`;
            const todoItems = this.#todoListModel.getTodos();
            todoItems.forEach(item => {
                const todoItemElement = item.completed
                    ? element`<label class="todo-item-container"><li><input type="checkbox" class="todo-item-checkbox" checked><s>${item.title}</s></li></label>`
                    : element`<label class="todo-item-container"><li><input type="checkbox" class="todo-item-checkbox">${item.title}</li></label>`;
                todoListBaseElement.appendChild(todoItemElement);

                const todoItemCheckbox = todoItemElement.querySelector('.todo-item-checkbox');
                todoItemCheckbox.addEventListener('change', () => {
                    this.#todoListModel.updateTodo({
                        id: item.id,
                        completed: !item.completed,
                    });
                });
            });

            render(todoListBaseElement, todoList);

            todoCount.textContent = todoTotalCountMessage(this.#todoListModel.getTotalCount());
        });

        todoItemForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.#todoListModel.addTodo(new TodoItemModel({
                title: todoItemInput.value,
                completed: false,
            }));
            todoItemInput.value = '';
        })
    }
}

function todoTotalCountMessage(num) {
    return `ToDoアイテム数: ${num}`;
}