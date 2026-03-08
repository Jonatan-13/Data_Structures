import LinkedList from "./LinkedList.js";
import DoublyLinkedNode from "./DoublyLinkedNode.js";

export default class DoublyLinkedList extends LinkedList {
    constructor() {
        super(DoublyLinkedNode);
        this._previous = null;
    }

    push(value) {
        let oldTail = this.tail;
        super.push(value);
        this.tail.previous = oldTail;
    }

    unshift(value) {
        let oldHead = this.head;
        super.unshift(value);
        oldHead.previous = this.head;
    }

    shift() {
        super.shift();
        this.head.previous = null;
    }

    // override
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