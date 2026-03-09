import AbstractList from "./AbstractList";
import DoublyLinkedList from "./DoublyLinkedList";

export default class Stack extends AbstractList {
    constructor() {
        super(DoublyLinkedList);
    }

    push(value) {
        let node = new this.nodeConstructor(value);
        if (this.isEmpty()) {
            this._head = node;
            this._tail = node;
        } else {
            this.tail.next = node;
            node.previous = this.tail; // ----------
            this._tail = node;
        }
        this._length++;
    }

    pop() {
        if (!this.isEmpty()) {
            if (this.length === 1) {
                this.clear();
            } else {
                this._tail = this.tail.previous;
                this.tail.next = null;
                this._length--;
            }
        } else {
            throw new Error("Cannot pop if the linked list is empty.");
        }
    }
}