# Data Structures – Conceptual Responsibilities

This document lists the **operations and responsibilities** that should be supported by common linked data structures.  
It describes **what they should accomplish**, not how to implement them.

---

# 1. Singly Linked List (SLL)

A singly linked list manages a sequence of nodes where each node only knows the **next node**.

## Basic Structure Management
- Create an empty list.
- Keep track of the **first element**.
- Optionally keep track of the **last element**.
- Keep track of the **number of elements** stored.

## Insertion
- Add a new element at the **beginning**.
- Add a new element at the **end**.

## Removal
- Remove the **first element**.
- Remove the **last element**.
- Remove a **specific element by value**.

## Access
- Retrieve the **first element**.
- Retrieve the **last element**.
- Check whether a **value exists in the list**.

## Traversal / Utilities
- Convert the list into a **readable representation**.
- Check if the list is **empty**.
- Clear the entire list.

---

# 2. Doubly Linked List (DLL)

A doubly linked list manages nodes that know both the **next** and **previous** nodes.

## Basic Structure Management
- Create an empty list.
- Keep track of the **first node**.
- Keep track of the **last node**.
- Track the **number of elements**.

## Insertion
- Add a new element at the **beginning**.
- Add a new element at the **end**.

## Removal
- Remove the **first element**.
- Remove the **last element**.
- Remove a **specific node**.

## Access
- Retrieve the **first element**.
- Retrieve the **last element**.
- Check if a **value exists**.

## Traversal / Utilities
- Convert the list into a **readable representation**.
- Check if the list is **empty**.
- Clear the list.

---

# 3. Singly Linked Node (SL Node)

A node in a singly linked list is responsible for holding data and linking forward.

## Responsibilities
- Store a **value/data element**.
- Keep a reference to the **next node**.
- Allow retrieving the stored value.
- Allow updating the stored value.
- Allow retrieving the next node reference.
- Allow updating the next node reference.

---

# 4. Doubly Linked Node (DL Node)

A node in a doubly linked list stores data and links in both directions.

## Responsibilities
- Store a **value/data element**.
- Reference to the **next node**.
- Reference to the **previous node**.
- Retrieve the stored value.
- Update the stored value.
- Retrieve the next node.
- Update the next node.
- Retrieve the previous node.
- Update the previous node.

---

# 5. Queue

A queue follows the **FIFO principle (First In, First Out)**.

## Core Operations
- Add an element to the **back** of the queue.
- Remove the **front element**.
- Look at the **front element without removing it**.

## State Checks
- Check whether the queue is **empty**.
- Determine the **number of elements**.

## Utilities
- Convert the queue into a **readable representation**.
- Clear the queue.

---

# 6. Stack

A stack follows the **LIFO principle (Last In, First Out)**.

## Core Operations
- Add an element to the **top**.
- Remove the **top element**.
- Look at the **top element without removing it**.

## State Checks
- Check whether the stack is **empty**.
- Determine the **number of elements**.

## Utilities
- Convert the list into a **readable representation**.
- Clear the stack.

---

## Conceptual Summary

- **Nodes** → hold data and references.
- **Lists** → manage nodes and their relationships.
- **Stack** → restricted list where operations happen at the **top**.
- **Queue** → restricted list where operations happen at the **front and back**.