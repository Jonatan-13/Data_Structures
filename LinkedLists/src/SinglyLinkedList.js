import LinkedList from "./LinkedList.js";
import SinglyLinkedNode from "./SinglyLinkedNode";

export default class SinglyLinkedList extends LinkedList {
    constructor() {
        super(SinglyLinkedNode);
    }
}