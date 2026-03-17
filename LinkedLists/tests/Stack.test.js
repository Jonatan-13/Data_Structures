import { expect, test, it, describe, beforeEach } from 'vitest';
import {Stack} from '../src/DataStructures';

let stack;

function checkStates({ top, size, empty, string }) {
    try {
        expect(String(stack.peek())).toBe(top);
    } catch (e) {
        expect(top).toBe("Error");
    }
    expect(stack.size).toBe(size);
    expect(stack.isEmpty()).toBe(empty);
    expect(String(stack)).toBe(string);
}

beforeEach(() => {
    stack = new Stack();
});

describe("Constructor", () => {
    test("should create empty stack", () => {
        checkStates({
            top: "Error",
            size: 0,
            empty: true,
            string: "Stack()"
        });
    });
});

describe("Peek", () => {
    it("should throw an error if the stack is empty", () => {
        expect(() => {
            stack.peek();
        }).toThrow();
        checkStates({
            top: "Error",
            size: 0,
            empty: true,
            string: "Stack()"
        });
    });
});

describe("Push", () => {
    it("should push if the stack is empty", () => {
        stack.push(5);
        checkStates({
            top: "5",
            size: 1,
            empty: false,
            string: "Stack(5)"
        });
    });
    it("should push if the stack is not empty", () => {
        stack.push(7);
        stack.push(true);
        stack.push("ABC")
        checkStates({
            top: "ABC",
            size: 3,
            empty: false,
            string: "Stack(7, true, ABC)"
        });
    });
});

describe("Pop", () => {
    it("should throw an error if the stack is empty", () => {
        expect(() => {
            stack.pop();
        }).toThrow();
        checkStates({
            top: "Error",
            size: 0,
            empty: true,
            string: "Stack()"
        });
    });
    it("should leave an empty stack if the stack has one node", () => {
        stack.push(5);
        stack.pop();
        checkStates({
            top: "Error",
            size: 0,
            empty: true,
            string: "Stack()"
        });
    });
    it("should pop if the stack has more than one node", () => {
        stack.push(null);
        stack.push(false);
        stack.push(8);
        stack.pop();
        checkStates({
            top: "false",
            size: 2,
            empty: false,
            string: "Stack(null, false)"
        });
    });
});

describe("Clear", () => {
    it("should clear if the stack is empty", () => {
        stack.clear();
        checkStates({
            top: "Error",
            size: 0,
            empty: true,
            string: "Stack()"
        });
    });
    it("should clear if the stack is not empty", () => {
        stack.push(8);
        stack.push(true);
        stack.push(NaN);
        stack.clear();
        checkStates({
            top: "Error",
            size: 0,
            empty: true,
            string: "Stack()"
        });
    });
});