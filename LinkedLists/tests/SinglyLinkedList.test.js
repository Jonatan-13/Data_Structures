import { expect, test, it, describe, beforeEach } from 'vitest';
import {SinglyLinkedNode, SinglyLinkedList, DoublyLinkedList} from '../src/DataStructures';

function checkStates({ obj, head, tail, length, empty, string }) {
    expect(String(obj.head)).toBe(head);
    expect(String(obj.tail)).toBe(tail);
    expect(obj.length).toBe(length);
    expect(obj.isEmpty()).toBe(empty);
    expect(String(obj)).toBe(string);
}

let sll;

beforeEach(() => {
    sll = new SinglyLinkedList();
});

describe("Constructor", () => {
    test("should create empty linked list", () => {
        checkStates({
            obj: sll,
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
});

describe("Push", () => {
    it("should push if list is empty", () => {
        sll.push(5);
        checkStates({
            obj: sll,
            head: "Node(5) > ",
            tail: "Node(5) > ",
            length: 1,
            empty: false,
            string: "Node(5) > "
        });
    });
    it("should push if list is not empty", () => {
        sll.push(7);
        sll.push(true);
        sll.push("ABC")
        checkStates({
            obj: sll,
            head: "Node(7) > ",
            tail: "Node(ABC) > ",
            length: 3,
            empty: false,
            string: "Node(7) > Node(true) > Node(ABC) > "
        });
    });
});

describe("Shift", () => {
    it("should throw an error if the list is empty", () => {
        expect(() => {
            sll.shift();
        }).toThrow();
        checkStates({
            obj: sll,
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should leave an empty list if the list has one node", () => {
        sll.push(4);
        sll.shift();
        checkStates({
            obj: sll,
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should shift if the list has more than one node", () => {
        sll.push(7);
        sll.push(true);
        sll.shift();
        checkStates({
            obj: sll,
            head: "Node(true) > ",
            tail: "Node(true) > ",
            length: 1,
            empty: false,
            string: "Node(true) > "
        });
    });
});

describe("Unshift", () => {
    it("should unshift if the list is empty", () => {
        sll.unshift(true);
        checkStates({
            obj: sll,
            head: "Node(true) > ",
            tail: "Node(true) > ",
            length: 1,
            empty: false,
            string: "Node(true) > "
        });
    });
    it("should unshift if the list is not empty", () => {
        sll.unshift(true);
        sll.push(8);
        sll.unshift(new SinglyLinkedNode(1));
        checkStates({
            obj: sll,
            head: "Node(Node(1) > ) > ",
            tail: "Node(8) > ",
            length: 3,
            empty: false,
            string: "Node(Node(1) > ) > Node(true) > Node(8) > "
        });
    });
});

describe("Pop", () => {
    it("should throw an error if the list is empty", () => {
        expect(() => {
            sll.pop();
        }).toThrow();
        checkStates({
            obj: sll,
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should leave an empty list if the list has one node", () => {
        sll.push(5);
        sll.pop();
        checkStates({
            obj: sll,
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should pop if the list has more than one node", () => {
        sll.push(8);
        sll.unshift(false);
        sll.unshift(null);
        sll.pop();
        checkStates({
            obj: sll,
            head: "Node(null) > ",
            tail: "Node(false) > ",
            length: 2,
            empty: false,
            string: "Node(null) > Node(false) > "
        });
    });
});

describe("Delete", () => {
    beforeEach(() => {
        sll.push(null);
        sll.push(false);
        sll.push(undefined);
    });

    it("should throw an error if the list is empty", () => {
        sll.clear();
        expect(() => {
            sll.delete(4);
        }).toThrow();
        checkStates({
            obj: sll,
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should throw an error if the list does not include the value", () => {
        expect(() => {
            sll.delete(true);
        }).toThrow();
        checkStates({
            obj: sll,
            head: "Node(null) > ",
            tail: "Node(undefined) > ",
            length: 3,
            empty: false,
            string: "Node(null) > Node(false) > Node(undefined) > "
        });
    });
    it("should delete the head", () => {
        sll.delete(null);
        checkStates({
            obj: sll,
            head: "Node(false) > ",
            tail: "Node(undefined) > ",
            length: 2,
            empty: false,
            string: "Node(false) > Node(undefined) > "
        });
    });
    it("should delete the tail", () => {
        sll.delete(undefined);
        checkStates({
            obj: sll,
            head: "Node(null) > ",
            tail: "Node(false) > ",
            length: 2,
            empty: false,
            string: "Node(null) > Node(false) > "
        });
    });
    it("should delete a node different from head and tail", () => {
        sll.delete(false);
        checkStates({
            obj: sll,
            head: "Node(null) > ",
            tail: "Node(undefined) > ",
            length: 2,
            empty: false,
            string: "Node(null) > Node(undefined) > "
        });
    });
});

describe("Find", () => {
    it("should return null if list is empty", () => {
        expect(String(sll.find(4))).toBe("null");
    });
    it("should return null if list does not include the value", () => {
        sll.push(4);
        sll.push(true);
        expect(String(sll.find(false))).toBe("null");
    });
    it("should return head if the value is in the head", () => {
        sll.push(null);
        sll.push(undefined);
        expect(String(sll.find(null))).toBe("Node(null) > ");
    });
    it("should return tail if the value is only in the tail", () => {
        sll.push(null);
        sll.push(undefined);
        expect(String(sll.find(undefined))).toBe("Node(undefined) > ");
    });
    it("should return node with the given value if its in the list but is not the head or tail", () => {
        sll.push(null);
        sll.push(10);
        sll.push(undefined);
        expect(String(sll.find(10))).toBe("Node(10) > ");
    });
});

describe("Includes", () => {
    it("should return false if the list is empty", () => {
        expect(sll.includes(4)).toBe(false);
    });
    it("should return false if the list is not empty and the value is not in the list", () => {
        sll.push(null);
        sll.push(undefined);
        expect(sll.includes(true)).toBe(false);
    });
    it("should return true if the value is in the head", () => {
        sll.push(8);
        sll.push(undefined);
        expect(sll.includes(8)).toBe(true);
    });
    it("should return true if the value is in the tail", () => {
        sll.push(null);
        sll.push(undefined);
        expect(sll.includes(undefined)).toBe(true);
    });
    it("should return true if the value is in the list but is not the head or tail", () => {
        sll.push(null);
        sll.push(10);
        sll.push(undefined);
        expect(sll.includes(10)).toBe(true);
    });
});

describe("Update", () => {
    beforeEach(() => {
        sll.push(10);
        sll.push(null);
        sll.push(false);
    });

    it("should throw an error if the list is empty", () => {
        sll.clear();
        expect(() => {
            sll.update(8, true);
        }).toThrow();
        checkStates({
            obj: sll,
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should throw an error if the old value is not in the list", () => {
        expect(() => {
            sll.update(8, true);
        }).toThrow();
        checkStates({
            obj: sll,
            head: "Node(10) > ",
            tail: "Node(false) > ",
            length: 3,
            empty: false,
            string: "Node(10) > Node(null) > Node(false) > "
        });
    });
    it("should update the head", () => {
        sll.update(10, false)
        checkStates({
            obj: sll,
            head: "Node(false) > ",
            tail: "Node(false) > ",
            length: 3,
            empty: false,
            string: "Node(false) > Node(null) > Node(false) > "
        });
    });
    it("should update the tail", () => {
        sll.update(false, "HI");
        checkStates({
            obj: sll,
            head: "Node(10) > ",
            tail: "Node(HI) > ",
            length: 3,
            empty: false,
            string: "Node(10) > Node(null) > Node(HI) > "
        });
    });
    it("should update if the old value is not in the head or tail", () => {
        sll.update(null, 321)
        checkStates({
            obj: sll,
            head: "Node(10) > ",
            tail: "Node(false) > ",
            length: 3,
            empty: false,
            string: "Node(10) > Node(321) > Node(false) > "
        });
    });
});

describe("Extend", () => {
    it("should throw an error if the list is not a singly linked list", () => {
        expect(() => {
            sll.extend(new DoublyLinkedList());
        }).toThrow();
        checkStates({
            obj: sll,
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should extend if this is an empty list", () => {
        let newSll = new SinglyLinkedList();
        newSll.push(8);
        newSll.push(true);
        sll.extend(newSll);
        checkStates({
            obj: sll,
            head: "Node(8) > ",
            tail: "Node(true) > ",
            length: 2,
            empty: false,
            string: "Node(8) > Node(true) > "
        });
    });
    it("should extend an empty list", () => {
        sll.push(8);
        sll.push(true);
        sll.extend(new SinglyLinkedList());
        checkStates({
            obj: sll,
            head: "Node(8) > ",
            tail: "Node(true) > ",
            length: 2,
            empty: false,
            string: "Node(8) > Node(true) > "
        });
    });
    it("should extend a non empty list", () => {
        let newSll = new SinglyLinkedList();
        newSll.push(8);
        newSll.push(true);
        sll.push(0);
        sll.push(null);
        sll.extend(newSll);
        checkStates({
            obj: sll,
            head: "Node(0) > ",
            tail: "Node(true) > ",
            length: 4,
            empty: false,
            string: "Node(0) > Node(null) > Node(8) > Node(true) > "
        });
    });
});

describe("Clear", () => {
    it("should clear if the list is empty", () => {
        sll.clear();
        checkStates({
            obj: sll,
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should clear if the list is not empty", () => {
        sll.push(8);
        sll.push(true);
        sll.push(NaN);
        sll.clear();
        checkStates({
            obj: sll,
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
});