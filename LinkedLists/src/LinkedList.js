import AbstractList from "./AbstractList.js";

export default class LinkedList extends AbstractList {
    constructor(nodeConstructor) {
        super(nodeConstructor)
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

    unshift(value) {
        let node = new this.nodeConstructor(value);
        if (!this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this._length++;
    }

    shift() {
        if (!this.isEmpty()) {
            if (this.length === 1) {
                this.clear();
            } else {
                this.head = this.head.next;
                this._length--;
            }
        } else {
            throw new Error("Cannot shfit if the linked list is empty.");
        }
    }

    pop() {
        if (!this.isEmpty()) {
            if (this.length === 1) {
                this.clear();
            } else {
                let newTail = this.head;
                while (newTail.next !== this.tail) {
                    newTail = newTail.next;
                }
                this.tail = newTail;
                this.tail.next = null;
                this._length--;
            }
        } else {
            throw new Error("Cannot shfit if the linked list is empty.");
        }
    }

    delete(value) {
        let previous = this.findPrevious(value);
        if (previous !== undefined) {
            if (previous === null) {
                this.shift();
            } else if (this.tail === previous.next) {
                this.pop();
            } else {
                previous.next = previous.next.next;
                this._length--;
            }
        } else {
            throw new Error("The value must belong to the linked list in order to be deleted.");
        }
    }
}