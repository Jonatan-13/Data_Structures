import SinglyLinkedNode from "./SinglyLinkedNode.js";

export default class DoublyLinkedNode extends SinglyLinkedNode {
    constructor(value) {
        super(value);
        this._previous = null;
    }

    toString() {
        return `< Node(${this.value}) >`;
    }

    get previous() {
        return this._previous;
    }
    set previous(newPrevious) {
        if (newPrevious !== null && (newPrevious.constructor !== this.constructor)) {
            throw new Error(`The value should be instance of ${this.constructor.name} or should be null.`);
        }
        this._previous = newPrevious;
    }
}