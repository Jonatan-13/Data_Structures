import SinglyLinkedList from "./SinglyLinkedList";

export default class Queue {
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
        return `Queue(${values.join(", ")})`;
    }

    get size() {
        return this._list.length;
    }

    peek() {
        let head = this._list.head;
        if (head != null) {
            return head.value;
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

    extend(queue) {
        if (queue?.constructor !== this.constructor) {
            throw new Error(`Can only extend a queue, not other data structure.`);   
        }
        while (!queue.isEmpty()) {
            this.enqueue(queue.dequeue());
        }
    }

    enqueue(value) {
        this._list.push(value);
    }

    dequeue() {
        if (!this.isEmpty()) {
            let deletedValue = this.peek();
            this._list.shift();
            return deletedValue;
        } else {
            throw new Error("Cannot dequeue if the queue is empty.");
        }
    }
}