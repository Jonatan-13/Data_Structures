export default class SinglyLinkedNode {
    constructor(value) {
        this._value = value;
        this._next = null;
    }

    toString() {
        return `Node(${this.value}) > `;
    }

    get value() {
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
    }

    get next() {
        return this._next;
    }
    set next(newNext) {
        if (newNext !== null && (newNext.constructor !== this.constructor)) {
            throw new Error(`The value should be instance of ${this.constructor.name} or should be null.`);
        }
        this._next = newNext;
    }
}