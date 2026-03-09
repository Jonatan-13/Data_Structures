import AbstractList from "./AbstractList";
import DoublyLinkedList from "./DoublyLinkedList";

export default class Queue extends AbstractList {
    constructor() {
        super(DoublyLinkedList);
    }

    enqueue(value) {
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

    dequeue() {
        if (!this.isEmpty()) {
            if (this.length === 1) {
                this.clear();
            } else {
                this._head = this.head.next;
                this.head.previous = null;
                this._length--;
            }
        } else {
            throw new Error("Cannot shfit if the linked list is empty.");
        }
    }
}