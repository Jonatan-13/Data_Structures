export default class SinglyLinkedNode {
    constructor(value) {
        this._value = value;
        this._next = null;
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
        if (!(newNext instanceof this.constructor) && newNext !== null) {
            throw new Error(`The value should be instance of ${this.constructor.name} or should be null.`);
        }
        this._next = newNext;
    }
}