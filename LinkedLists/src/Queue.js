import SinglyLinkedList from "./SinglyLinkedList";

export default class Queue {
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
        return `Queue(${values.join(", ")})`;
    }

    get size() {
        return this._list.length;
    }

    peek() {
        let head = this._list.head;
        if (head != null) head = head.value;
        return head;
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
            let deletedNode = this.peek();
            this._list.shift();
            return deletedNode;
        } else {
            throw new Error("Cannot dequeue if the queue is empty.");
        }
    }
}