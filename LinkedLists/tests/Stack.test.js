import { expect, test, it, describe, beforeEach } from 'vitest';
import Stack from '../src/Stack';

function checkStates({ obj, top, size, empty, string }) {
    expect(String(obj.peek())).toBe(top);
    expect(obj.size).toBe(size);
    expect(obj.isEmpty()).toBe(empty);
    expect(String(obj)).toBe(string);
}

let stack;

beforeEach(() => {
    stack = new Stack();
});

describe("Constructor", () => {
    test("should create empty linked list", () => {
        checkStates({
            obj: stack,
            top: "null",
            size: 0,
            empty: true,
            string: "Stack()"
        });
    });
});

describe("Push", () => {
    it("should push if list is empty", () => {
        stack.push(5);
        checkStates({
            obj: stack,
            top: "5",
            size: 1,
            empty: false,
            string: "Stack(5)"
        });
    });
    it("should push if list is not empty", () => {
        stack.push(7);
        stack.push(true);
        stack.push("ABC")
        checkStates({
            obj: stack,
            top: "7",
            size: 3,
            empty: false,
            string: "Stack(7, true, ABC)"
        });
    });
});

describe("Pop", () => {
    it("should throw an error if the list is empty", () => {
        expect(() => {
            stack.pop();
        }).toThrow();
        checkStates({
            obj: stack,
            top: "null",
            size: 0,
            empty: true,
            string: "Stack()"
        });
    });
    it("should leave an empty list if the list has one node", () => {
        stack.push(5);
        stack.pop();
        checkStates({
            obj: stack,
            top: "null",
            size: 0,
            empty: true,
            string: "Stack()"
        });
    });
    it("should pop if the list has more than one node", () => {
        stack.push(null);
        stack.push(false);
        stack.push(8);
        stack.pop();
        checkStates({
            obj: stack,
            top: "null",
            size: 2,
            empty: false,
            string: "Stack(null, false)"
        });
    });
});

describe("Clear", () => {
    it("should clear if the list is empty", () => {
        stack.clear();
        checkStates({
            obj: stack,
            top: "null",
            size: 0,
            empty: true,
            string: "Stack()"
        });
    });
    it("should clear if the list is not empty", () => {
        stack.push(8);
        stack.push(true);
        stack.push(NaN);
        stack.clear();
        checkStates({
            obj: stack,
            top: "null",
            size: 0,
            empty: true,
            string: "Stack()"
        });
    });
});