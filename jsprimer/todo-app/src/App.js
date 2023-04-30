import { TodoItemModel } from './model/TodoItemModel.js';
import { TodoListModel } from './model/TodoListModel.js';
import { TodoListView } from './view/TodoListView.js';
import { render } from './view/html-util.js';

console.log("App.js: loaded");

export class App {
    #todoListModel = new TodoListModel();
    #todoListView = new TodoListView();

    handleAddTodoItem(title) {
        this.#todoListModel.addTodo(new TodoItemModel({ title, completed: false }));
    }

    handleUpdateTodoItem({ id, completed }) {
        this.#todoListModel.updateTodo({ id, completed });
    }

    handleDeleteTodoItem(id) {
        this.#todoListModel.deleteTodo(id);
    }

    mount() {
        const todoItemForm = document.querySelector("#todo-item-form");
        const todoItemInput = document.querySelector("#todo-item-input");
        const todoList = document.querySelector('#todo-list');
        const todoCount = document.querySelector('#todo-count');

        this.#todoListModel.onChange(() => {
            const todoItems = this.#todoListModel.getTodos();
            const todoListView = new TodoListView();
            const todoListElement = todoListView.createElement(todoItems, {
                onUpdateTodo: ({ id, completed }) => this.handleUpdateTodoItem({ id, completed }),
                onDeleteTodo: id => this.handleDeleteTodoItem(id),
            });

            render(todoListElement, todoList);

            todoCount.textContent = todoTotalCountMessage(this.#todoListModel.getTotalCount());
        });

        todoItemForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (todoItemInput.value === '') return;
            this.handleAddTodoItem(todoItemInput.value);
            todoItemInput.value = '';
        })
    }
}

function todoTotalCountMessage(num) {
    return `ToDoアイテム数: ${num}`;
}