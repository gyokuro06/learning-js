let todoIdx = 0;

export class TodoItemModel {
    /** @type {number} ToDoアイテムのID */
    id;
    /** @type {string} ToDoアイテムのタイトル */
    title;
    /** @type {boolean} ToDoアイテムの完了状態 */
    completed;

    /** @param {{ title: string, completed: boolean }} */
    constructor({ title, completed }) {
        this.id = todoIdx++;
        this.title = title;
        this.completed = completed;
    }

    isEmptyTitle() {
        return this.title.length === 0;
    }
}