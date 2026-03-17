import SinglyLinkedNode from "./SinglyLinkedNode";
import DoublyLinkedNode from "./DoublyLinkedNode";

export default class LinkedList {
    constructor(nodeConstructor) {
        this._length = 0;
        this._head = null;
        this._tail = null;
        
        if (nodeConstructor !== SinglyLinkedNode && nodeConstructor !== DoublyLinkedNode) {
            throw new Error("The node constructor should be a SinglyLinkedNode or a DoublyLinkedNode");
        }
        this._nodeConstructor = nodeConstructor;
    }

    toString() {
        let repr = "";
        let node = this.head;
        while (node != null) {
            repr += node;
            node = node.next;
        }
        return repr;
    }

    get nodeConstructor() {
        return this._nodeConstructor;
    }

    get length() {
        return this._length;
    }

    get head() {
        return this._head;
    }

    get tail() {
        return this._tail;
    }

    isEmpty() {
        return this.length === 0;
    }

    findPrevious(value) {
        let previous = undefined;
        if (!this.isEmpty()) {
            if (this.head.value !== value) {
                previous = this.head;
                while (previous.next !== null && previous.next.value !== value) {
                    previous = previous.next;
                }
                if (previous.next === null) previous = undefined;
            } else previous = null;
        }
        return previous;
    }

    find(value) {
        let node = null;
        let previous = this.findPrevious(value);
        if (previous === null) {
            node = this.head;
        } else if (previous !== undefined) {
            node = previous.next;
        }
        return node;
    }

    includes(value) {
        return this.find(value) !== null;
    }

    update(oldValue, newValue) {
        let node = this.find(oldValue);
        if (node !== null) {
            node.value = newValue;
        } else {
            throw new Error("The old value should be part of the linked list.");
        }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this._length = 0;
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