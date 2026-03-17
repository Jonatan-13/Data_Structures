import { expect, test, it, describe, beforeEach } from 'vitest';
import {Queue, DoublyLinkedList} from '../src/DataStructures';

function checkStates({ obj, front, size, empty, string }) {
    try {
        expect(String(obj.peek())).toBe(front);
    } catch (e) {
        expect(front).toBe("Error");
    }
    expect(obj.size).toBe(size);
    expect(obj.isEmpty()).toBe(empty);
    expect(String(obj)).toBe(string);
}

let queue;

beforeEach(() => {
    queue = new Queue();
});

describe("Constructor", () => {
    test("should create empty queue", () => {
        checkStates({
            obj: queue,
            front: "Error",
            size: 0,
            empty: true,
            string: "Queue()"
        });
    });
});

describe("Peek", () => {
    it("should throw an error if the queue is empty", () => {
        expect(() => {
            queue.peek();
        }).toThrow();
        checkStates({
            obj: queue,
            front: "Error",
            size: 0,
            empty: true,
            string: "Queue()"
        });
    });
});

describe("Enqueue", () => {
    it("should enqueue if the queue is empty", () => {
        queue.enqueue(5);
        checkStates({
            obj: queue,
            front: "5",
            size: 1,
            empty: false,
            string: "Queue(5)"
        });
    });
    it("should enqueue if the queue is not empty", () => {
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
    it("should throw an error if the queue is empty", () => {
        expect(() => {
            queue.dequeue();
        }).toThrow();
        checkStates({
            obj: queue,
            front: "Error",
            size: 0,
            empty: true,
            string: "Queue()"
        });
    });
    it("should leave an empty queue if the queue has one node", () => {
        queue.enqueue(4);
        queue.dequeue();
        checkStates({
            obj: queue,
            front: "Error",
            size: 0,
            empty: true,
            string: "Queue()"
        });
    });
    it("should dequeue if the queue has more than one node", () => {
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
    it("should throw an error trying to extend anything that is not a queue", () => {
        expect(() => {
            queue.extend(new DoublyLinkedList());
        }).toThrow();
        checkStates({
            obj: queue,
            front: "Error",
            size: 0,
            empty: true,
            string: "Queue()"
        });
    });
    it("should extend if this is empty", () => {
        let newQueue = new Queue();
        newQueue.enqueue(8);
        newQueue.enqueue(true);
        queue.extend(newQueue);
        checkStates({
            obj: queue,
            front: "8",
            size: 2,
            empty: false,
            string: "Queue(8, true)"
        });
    });
    it("should extend an empty queue", () => {
        queue.enqueue(8);
        queue.enqueue(true);
        queue.extend(new Queue());
        checkStates({
            obj: queue,
            front: "8",
            size: 2,
            empty: false,
            string: "Queue(8, true)"
        });
    });
    it("should extend a non empty queue", () => {
        let newqueue = new Queue();
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
    it("should clear if the queue is empty", () => {
        queue.clear();
        checkStates({
            obj: queue,
            front: "Error",
            size: 0,
            empty: true,
            string: "Queue()"
        });
    });
    it("should clear if the queue is not empty", () => {
        queue.enqueue(8);
        queue.enqueue(true);
        queue.enqueue(NaN);
        queue.clear();
        checkStates({
            obj: queue,
            front: "Error",
            size: 0,
            empty: true,
            string: "Queue()"
        });
    });
});