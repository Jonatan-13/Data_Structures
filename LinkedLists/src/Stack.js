import SinglyLinkedList from "./SinglyLinkedList";

export default class Stack {
    constructor() {
        this._list = new SinglyLinkedList();
    }

    toString() {
        let values = [];
        let node = this._list.head;
        while (node != null) {
            let value = node.value;
            value = (value == null) ? "null" : (value == undefined) ? "undefined" : value;
            values.push(value);
            node = node.next;
        }
        return `Stack(${values.join(", ")})`;
    }

    get size() {
        return this._list.length;
    }

    peek() {
        let tail = this._list.tail;
        if (tail != null) {
            return tail.value;
        } else {
            throw new Error("Cannot peek if the list is empty");
        }
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