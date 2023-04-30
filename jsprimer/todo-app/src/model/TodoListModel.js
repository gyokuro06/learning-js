import { EventEmitter } from "../EventEmitter.js";

export class TodoListModel extends EventEmitter {
    #items;

    /** @param {TodoItemModel[]} [items] 初期アイテム一覧 */
    constructor(items = []) {
        super();
        this.#items = items;
    }

    getTotalCount() {
        return this.#items.length;
    }

    getTodos() {
        return this.#items;
    }

    onChange(listener) {
        this.addEventListener("change", listener);
    }

    offChange(listener) {
        this.removeEventListener("change", listener);
    }

    emitChange() {
        this.emit('change');
    }

    addTodo(todoItem) {
        if (todoItem.isEmptyTitle()) return;
        this.#items.push(todoItem);
        this.emitChange();
    }

    updateTodo({ id, completed }) {
        const todoItem = this.#items.find(todo => todo.id === id);
        if (!todoItem) return;
        todoItem.completed = completed;
        this.emitChange();
    }

    deleteTodo(id) {
        this.#items = this.#items.filter(item => {
            return item.id !== id;
        })
        this.emitChange();
    }
}