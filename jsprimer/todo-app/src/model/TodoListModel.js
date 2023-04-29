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

    emitChange() {
        this.emit('change');
    }

    addTodo(todoItem) {
        this.#items.push(todoItem);
        this.emitChange();
    }
}