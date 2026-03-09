import SinglyLinkedNode from "./SinglyLinkedNode.js";
import DoublyLinkedNode from "./DoublyLinkedNode.js";

export default class AbstractList {
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
}