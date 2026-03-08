import AbstractList from "./AbstractList";
import DoublyLinkedList from "./DoublyLinkedList";

export default class Stack extends AbstractList {
    constructor() {
        super(DoublyLinkedList);
    }

    push(value) {
        let node = new this.nodeConstructor(value);
        if (!this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this._length++;
    }

    pop() {
        if (!this.isEmpty()) {
            if (this.length === 1) {
                this.clear();
            } else {
                this.tail = this.tail.previous;
                this.tail.next = null;
                this._length--;
            }
        } else {
            throw new Error("Cannot shfit if the linked list is empty.");
        }
    }
}