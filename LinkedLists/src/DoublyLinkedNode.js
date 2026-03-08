import SinglyLinkedNode from "./SinglyLinkedNode.js";

export default class DoublyLinkedNode extends SinglyLinkedNode {
    constructor(value) {
        super(value);
        this._previous = null;
    }

    get previous() {
        return this._previous;
    }
    set previous(newPrevious) {
        if (!(newPrevious instanceof this.constructor) && newPrevious !== null) {
            throw new Error(`The value should be instance of ${this.constructor.name} or should be null.`);
        }
        this._next = newPrevious;
    }
}