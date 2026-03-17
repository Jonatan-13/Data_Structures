import { expect, test, it, describe, beforeEach } from 'vitest';
import Queue from '../src/Queue';
import DoublyLinkedList from '../src/DoublyLinkedList';

function checkStates({ obj, front, size, empty, string }) {
    expect(String(obj.peek())).toBe(front);
    expect(obj.size).toBe(size);
    expect(obj.isEmpty()).toBe(empty);
    expect(String(obj)).toBe(string);
}

let queue;

beforeEach(() => {
    queue = new Queue();
});

describe("Constructor", () => {
    test("should create empty linked list", () => {
        checkStates({
            obj: queue,
            front: "null",
            size: 0,
            empty: true,
            string: "Queue()"
        });
    });
});

describe("Enqueue", () => {
    it("should push if list is empty", () => {
        queue.enqueue(5);
        checkStates({
            obj: queue,
            front: "5",
            size: 1,
            empty: false,
            string: "Queue(5)"
        });
    });
    it("should push if list is not empty", () => {
        queue.enqueue(7);
        queue.enqueue(true);
        queue.enqueue("ABC")
        checkStates({
            obj: queue,
            front: "7",
            size: 3,
            empty: false,
            string: "Queue(7, true, ABC)"
        });
    });
});

describe("Dequeue", () => {
    it("should throw an error if the list is empty", () => {
        expect(() => {
            queue.dequeue();
        }).toThrow();
        checkStates({
            obj: queue,
            front: "null",
            size: 0,
            empty: true,
            string: "Queue()"
        });
    });
    it("should leave an empty list if the list has one node", () => {
        queue.enqueue(4);
        queue.dequeue();
        checkStates({
            obj: queue,
            front: "null",
            size: 0,
            empty: true,
            string: "Queue()"
        });
    });
    it("should shift if the list has more than one node", () => {
        queue.enqueue(7);
        queue.enqueue(true);
        queue.dequeue();
        checkStates({
            obj: queue,
            front: "true",
            size: 1,
            empty: false,
            string: "Queue(true)"
        });
    });
});

describe("Extend", () => {
    it("should throw an error if the list is not a singly linked list", () => {
        expect(() => {
            queue.extend(new DoublyLinkedList());
        }).toThrow();
        checkStates({
            obj: queue,
            front: "null",
            size: 0,
            empty: true,
            string: "Queue()"
        });
    });
    it("should extend if this is an empty list", () => {
        let newqueue = new SinglyLinkedList();
        newqueue.enqueue(8);
        newqueue.enqueue(true);
        queue.extend(newqueue);
        checkStates({
            obj: queue,
            front: "8",
            size: 2,
            empty: false,
            string: "Queue(8, true)"
        });
    });
    it("should extend an empty list", () => {
        queue.enqueue(8);
        queue.enqueue(true);
        queue.extend(new SinglyLinkedList());
        checkStates({
            obj: queue,
            front: "8",
            size: 2,
            empty: false,
            string: "Queue(8, true)"
        });
    });
    it("should extend a non empty list", () => {
        let newqueue = new SinglyLinkedList();
        newqueue.enqueue(8);
        newqueue.enqueue(true);
        queue.enqueue(0);
        queue.enqueue(null);
        queue.extend(newqueue);
        checkStates({
            obj: queue,
            front: "0",
            size: 4,
            empty: false,
            string: "Queue(0, null, 8, true)"
        });
    });
});

describe("Clear", () => {
    it("should clear if the list is empty", () => {
        queue.clear();
        checkStates({
            obj: queue,
            front: "null",
            size: 0,
            empty: true,
            string: "Queue()"
        });
    });
    it("should clear if the list is not empty", () => {
        queue.enqueue(8);
        queue.enqueue(true);
        queue.enqueue(NaN);
        queue.clear();
        checkStates({
            obj: queue,
            front: "null",
            size: 0,
            empty: true,
            string: "Queue()"
        });
    });
});