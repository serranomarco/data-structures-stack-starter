// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.length) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this.length;
    }

    pop() {
        if (!this.length) return null;

        const currentTop = this.top;
        if (this.length === 1) {
            this.top = null;
            this.length--;
        } else {
            const nextTop = this.top.next;
            this.top = nextTop;
            this.length--;
        }
        return currentTop.value;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
