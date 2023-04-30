import { TodoItemModel } from './model/TodoItemModel.js';
import { TodoListModel } from './model/TodoListModel.js';
import { TodoListView } from './view/TodoListView.js';
import { render } from './view/html-util.js';

export class App {
    #todoListModel = new TodoListModel();
    #todoListView = new TodoListView();

    #todoItemForm;
    #todoItemInput;
    #todoList;
    #todoCount;
    constructor({ todoItemForm, todoItemInput, todoList, todoCount }) {
        this.#todoItemForm = todoItemForm;
        this.#todoItemInput = todoItemInput;
        this.#todoList = todoList;
        this.#todoCount = todoCount;
    }

    #handleAdd = (title) => {
        this.#todoListModel.addTodo(new TodoItemModel({ title, completed: false }));
    }

    #handleUpdate = ({ id, completed }) => {
        this.#todoListModel.updateTodo({ id, completed });
    }

    #handleDelete = (id) => {
        this.#todoListModel.deleteTodo(id);
    }

    #handleChange = () => {
        const todoItems = this.#todoListModel.getTodos();
        const todoListElement = this.#todoListView.createElement(todoItems, {
            onUpdateTodo: ({ id, completed }) => this.#handleUpdate({ id, completed }),
            onDeleteTodo: id => this.#handleDelete(id),
        });

        render(todoListElement, this.#todoList);
        this.#todoCount.textContent = todoTotalCountMessage(this.#todoListModel.getTotalCount());
    }

    #handleSubmit = (event) => {
        event.preventDefault();
        this.#handleAdd(this.#todoItemInput.value);
        this.#todoItemInput.value = '';
    }

    mount = () => {
        this.#todoListModel.onChange(this.#handleChange);
        this.#todoItemForm.addEventListener("submit", this.#handleSubmit);
    }

    unmount = () => {
        this.#todoListModel.offChange(this.#handleChange);
        this.#todoItemForm.removeEventListener("submit", this.#handleSubmit);
    }
}

function todoTotalCountMessage(num) {
    return `ToDoアイテム数: ${num}`;
}