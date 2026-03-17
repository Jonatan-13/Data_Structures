import SinglyLinkedList from "./SinglyLinkedList";

export default class Stack {
    constructor() {
        this._list = new SinglyLinkedList();
    }

    toString() {
        let values = [];
        let node = this.head;
        while (node != null) {
            values.push(node.value);
            node = node.next;
        }
        return `Stack(${values.join(", ")})`;
    }

    get size() {
        return this._list.length;
    }

    peek() {
        let tail = this._list.tail;
        if (tail != null) tail = tail.value;
        return tail;
    }

    isEmpty() {
        return this._list.isEmpty();
    }

    clear() {
        this._list.clear();
    }

    push(value) {
        this._list.push(value);
    }

    pop() {
        if (!this.isEmpty()) {
            this._list.pop();
        } else {
            throw new Error("Cannot pop if the stack is empty.");
        }
    }
}