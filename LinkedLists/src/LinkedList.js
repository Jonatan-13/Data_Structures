import AbstractList from "./AbstractList.js";

export default class LinkedList extends AbstractList {
    constructor(nodeConstructor) {
        super(nodeConstructor)
    }

    push(value) {
        let node = new this.nodeConstructor(value);
        if (this.isEmpty()) {
            this._head = node;
            this._tail = node;
        } else {
            this.tail.next = node;
            this._tail = node;
        }
        this._length++;
    }

    unshift(value) {
        let node = new this.nodeConstructor(value);
        if (this.isEmpty()) {
            this._head = node;
            this._tail = node;
        } else {
            node.next = this.head;
            this._head = node;
        }
        this._length++;
    }

    shift() {
        if (!this.isEmpty()) {
            if (this.length === 1) {
                this.clear();
            } else {
                this._head = this.head.next;
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
                this._tail = newTail;
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

    extend(list) {
        if (list?.constructor !== this.constructor) {
            throw new Error(`The list must be an instance of ${this.constructor.name}.`);   
        }
        if (this.isEmpty()) {
            this._head = list.head;
            this._tail = list.tail;
        } else if (list.tail !== null) {
            this.tail.next = list.head;
            this._tail = list.tail;
        }
        this._length += list.length;
    }
}