import { expect, test, it, describe, beforeEach } from 'vitest';
import {DoublyLinkedList, SinglyLinkedNode, SinglyLinkedList} from '../src/DataStructures';

let dll;

function checkStates({ head, tail, length, empty, string }) {
    expect(String(dll.head)).toBe(head);
    expect(String(dll.tail)).toBe(tail);
    expect(dll.length).toBe(length);
    expect(dll.isEmpty()).toBe(empty);
    expect(String(dll)).toBe(string);
    expect(rightToLeftString()).toBe(leftToRightString());
}

function leftToRightString() {
    let repr = "";
    let node = dll.head;
    while (node != null) {
        repr += node;
        node = node.next;
    }
    return repr;
}
function rightToLeftString() {
    let repr = "";
    let node = dll.tail;
    while (node != null) {
        repr = node + repr;
        node = node.previous;
    }
    return repr;
}

beforeEach(() => {
    dll = new DoublyLinkedList();
});

describe("Constructor", () => {
    test("should create empty linked list", () => {
        let dll = new DoublyLinkedList();
        checkStates({
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
        dll.push(5);
        checkStates({
            head: "< Node(5) >",
            tail: "< Node(5) >",
            length: 1,
            empty: false,
            string: "< Node(5) >"
        });
    });
    it("should push if list is not empty", () => {
        dll.push(7);
        dll.push(true);
        dll.push("ABC");
        checkStates({
            head: "< Node(7) >",
            tail: "< Node(ABC) >",
            length: 3,
            empty: false,
            string: "< Node(7) >< Node(true) >< Node(ABC) >"
        });
    });
});

describe("Shift", () => {
    it("should throw an error if the list is empty", () => {
        expect(() => {
            dll.shift();
        }).toThrow();
        checkStates({
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should leave an empty list if the list has one node", () => {
        dll.push(4);
        dll.shift();
        checkStates({
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should shift if the list has more than one node", () => {
        dll.push(7);
        dll.push(true);
        dll.shift();
        checkStates({
            head: "< Node(true) >",
            tail: "< Node(true) >",
            length: 1,
            empty: false,
            string: "< Node(true) >"
        });
    });
});

describe("Unshift", () => {
    it("should unshift if the list is empty", () => {
        dll.unshift(true);
        checkStates({
            head: "< Node(true) >",
            tail: "< Node(true) >",
            length: 1,
            empty: false,
            string: "< Node(true) >"
        });
    });
    it("should unshift if the list is not empty", () => {
        dll.unshift(true);
        dll.push(8);
        dll.unshift(new SinglyLinkedNode(1));
        checkStates({
            head: "< Node(Node(1) > ) >",
            tail: "< Node(8) >",
            length: 3,
            empty: false,
            string: "< Node(Node(1) > ) >< Node(true) >< Node(8) >"
        });
    });
});

describe("Pop", () => {
    it("should throw an error if the list is empty", () => {
        expect(() => {
            dll.pop();
        }).toThrow();
        checkStates({
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should leave an empty list if the list has one node", () => {
        dll.push(5);
        dll.pop();
        checkStates({
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should pop if the list has more than one node", () => {
        dll.push(8);
        dll.unshift(false);
        dll.unshift(null);
        dll.pop();
        checkStates({
            head: "< Node(null) >",
            tail: "< Node(false) >",
            length: 2,
            empty: false,
            string: "< Node(null) >< Node(false) >"
        });
    });
});

describe("Delete", () => {
    beforeEach(() => {
        dll.push(null);
        dll.push(false);
        dll.push(undefined);
    });

    it("should throw an error if the list is empty", () => {
        dll.clear();
        expect(() => {
            dll.delete(4);
        }).toThrow();
        checkStates({
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should throw an error if the list does not include the value", () => {
        expect(() => {
            dll.delete(true);
        }).toThrow();
        checkStates({
            head: "< Node(null) >",
            tail: "< Node(undefined) >",
            length: 3,
            empty: false,
            string: "< Node(null) >< Node(false) >< Node(undefined) >"
        });
    });
    it("should delete the head", () => {
        dll.delete(null);
        checkStates({
            head: "< Node(false) >",
            tail: "< Node(undefined) >",
            length: 2,
            empty: false,
            string: "< Node(false) >< Node(undefined) >"
        });
    });
    it("should delete the tail", () => {
        dll.delete(undefined);
        checkStates({
            head: "< Node(null) >",
            tail: "< Node(false) >",
            length: 2,
            empty: false,
            string: "< Node(null) >< Node(false) >"
        });
    });
    it("should delete a node different from head and tail", () => {
        dll.delete(false);
        checkStates({
            head: "< Node(null) >",
            tail: "< Node(undefined) >",
            length: 2,
            empty: false,
            string: "< Node(null) >< Node(undefined) >"
        });
    });
});

describe("Find", () => {
    it("should return null if list is empty", () => {
        expect(String(dll.find(4))).toBe("null");
    });
    it("should return null if list does not include the value", () => {
        dll.push(4);
        dll.push(true);
        expect(String(dll.find(false))).toBe("null");
    });
    it("should return head if the value is in the head", () => {
        dll.push(null);
        dll.push(undefined);
        expect(String(dll.find(null))).toBe("< Node(null) >");
    });
    it("should return tail if the value is only in the tail", () => {
        dll.push(null);
        dll.push(undefined);
        expect(String(dll.find(undefined))).toBe("< Node(undefined) >");
    });
    it("should return node with the given value if its in the list but is not the head or tail", () => {
        dll.push(null);
        dll.push(10);
        dll.push(undefined);
        expect(String(dll.find(10))).toBe("< Node(10) >");
    });
});

describe("Includes", () => {
    it("should return false if the list is empty", () => {
        expect(dll.includes(4)).toBe(false);
    });
    it("should return false if the list is not empty and the value is not in the list", () => {
        dll.push(null);
        dll.push(undefined);
        expect(dll.includes(true)).toBe(false);
    });
    it("should return true if the value is in the head", () => {
        dll.push(8);
        dll.push(undefined);
        expect(dll.includes(8)).toBe(true);
    });
    it("should return true if the value is in the tail", () => {
        dll.push(null);
        dll.push(undefined);
        expect(dll.includes(undefined)).toBe(true);
    });
    it("should return true if the value is in the list but is not the head or tail", () => {
        dll.push(null);
        dll.push(10);
        dll.push(undefined);
        expect(dll.includes(10)).toBe(true);
    });
});

describe("Update", () => {
    beforeEach(() => {
        dll.push(10);
        dll.push(null);
        dll.push(false);
    });

    it("should throw an error if the list is empty", () => {
        dll.clear();
        expect(() => {
            dll.update(8, true);
        }).toThrow();
        checkStates({
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should throw an error if the old value is not in the list", () => {
        expect(() => {
            dll.update(8, true);
        }).toThrow();
        checkStates({
            head: "< Node(10) >",
            tail: "< Node(false) >",
            length: 3,
            empty: false,
            string: "< Node(10) >< Node(null) >< Node(false) >"
        });
    });
    it("should update the head", () => {
        dll.update(10, false)
        checkStates({
            head: "< Node(false) >",
            tail: "< Node(false) >",
            length: 3,
            empty: false,
            string: "< Node(false) >< Node(null) >< Node(false) >"
        });
    });
    it("should update the tail", () => {
        dll.update(false, "HI");
        checkStates({
            head: "< Node(10) >",
            tail: "< Node(HI) >",
            length: 3,
            empty: false,
            string: "< Node(10) >< Node(null) >< Node(HI) >"
        });
    });
    it("should update if the old value is not in the head or tail", () => {
        dll.update(null, 321)
        checkStates({
            head: "< Node(10) >",
            tail: "< Node(false) >",
            length: 3,
            empty: false,
            string: "< Node(10) >< Node(321) >< Node(false) >"
        });
    });
});

describe("Extend", () => {
    it("should throw an error if the list is not a singly linked list", () => {
        expect(() => {
            dll.extend(new SinglyLinkedList());
        }).toThrow();
        checkStates({
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should extend if this is an empty list", () => {
        let newdll = new DoublyLinkedList();
        newdll.push(8);
        newdll.push(true);
        dll.extend(newdll);
        checkStates({
            head: "< Node(8) >",
            tail: "< Node(true) >",
            length: 2,
            empty: false,
            string: "< Node(8) >< Node(true) >"
        });
    });
    it("should extend an empty list", () => {
        dll.push(8);
        dll.push(true);
        dll.extend(new DoublyLinkedList());
        checkStates({
            head: "< Node(8) >",
            tail: "< Node(true) >",
            length: 2,
            empty: false,
            string: "< Node(8) >< Node(true) >"
        });
    });
    it("should extend a non empty list", () => {
        let newdll = new DoublyLinkedList();
        newdll.push(8);
        newdll.push(true);
        dll.push(0);
        dll.push(null);
        dll.extend(newdll);
        checkStates({
            head: "< Node(0) >",
            tail: "< Node(true) >",
            length: 4,
            empty: false,
            string: "< Node(0) >< Node(null) >< Node(8) >< Node(true) >"
        });
    });
});

describe("Clear", () => {
    it("should clear if the list is empty", () => {
        dll.clear();
        checkStates({
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
    it("should clear if the list is not empty", () => {
        dll.push(8);
        dll.push(true);
        dll.push(NaN);
        dll.clear();
        checkStates({
            head: "null",
            tail: "null",
            length: 0,
            empty: true,
            string: ""
        });
    });
});