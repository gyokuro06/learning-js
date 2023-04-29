import { element } from './html-util.js';

export class TodoItemView {
    createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
        const todoItemElement = todoItem.completed
            ? element`<label class="todo-item-container">
                <li>
                    <input type="checkbox" class="todo-item-checkbox" checked>
                    <s>${todoItem.title}</s>
                    <button class="delete-button">x</button>
                </li>
            </label>`
            : element`<label class="todo-item-container">
                <li>
                    <input type="checkbox" class="todo-item-checkbox">
                    ${todoItem.title}
                    <button class="delete-button">x</button>
                </li>
            </label>`;

        const todoItemCheckbox = todoItemElement.querySelector('.todo-item-checkbox');
        todoItemCheckbox.addEventListener('change', () => {
            onUpdateTodo({
                id: todoItem.id,
                completed: !todoItem.completed,
            });
        });

        const deleteButton = todoItemElement.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            onDeleteTodo(todoItem.id);
        })

        return todoItemElement;
    }
}