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
        if (oldHead !== null) oldHead.previous = this.head;
    }

    shift() {
        super.shift();
        if (this.head !== null) this.head.previous = null;
    }

    // override
    pop() {
        if (!this.isEmpty()) {
            if (this.length === 1) {
                this.clear();
            } else {
                this._tail = this.tail.previous;
                this.tail.next = null;
                this._length--;
            }
        } else {
            throw new Error("Cannot pop if the linked list is empty.");
        }
    }

    delete(value) {
        let previous = this.findPrevious(value);
        if (previous?.next !== undefined && this.tail !== previous.next) {
            previous.next.next.previous = previous;
        }
        super.delete(value);
    }

    extend(list) {
        if (list?.constructor === this.constructor && list.tail !== null) {
            list.head.previous = this.tail;
        }
        super.extend(list);
    }
}