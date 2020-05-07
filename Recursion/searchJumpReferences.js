/**
 * Given a singly linked list with jump references annotate each list item's order field with its position in a "jump order traversal".
 * 
 * The jump pointer jumps to any random node in the linked list.
 * 
 * A "jump first" traversal is an iteration of the list giving priority to following jump pointers first before following next pointers.
 * 
 * The first node in the list is position 1 in the traversal.
 */

let setJumpOrder = function(head) {
    let order = 0;

    let jumpOrderHelper = function(node) {
        if (node === null || node.val !== -1) return;

        node.val = order;
        order++;

        jumpOrderHelper(node.jump);
        jumpOrderHelper(node.next);
    };

    jumpOrderHelper(head);
    return head;
}

let setJumpOrderIterative = function(head) {
    let stack = [];
    let order = 0;
    stack.push(head);

    while (stack.length > 0) {
        let node = stack.pop();
        if (node !== null && node.val === -1) {
            node.val = order++;
            stack.push(node.next);
            stack.push(node.jump);
        }
    }

    return head;
}

/** Complexities:
 *  Iterative: Time: O(n), Space: O(n)
 *  Recursive: Time: O(n), Space: O(n)
 */

/** TESTING */
class ListNode {
    constructor(val) {
        this.val = val || -1;
        this.jump = null;
        this.next = null; // Points to another ListNode object
    }
}

let head = new ListNode();
let b = new ListNode();
let c = new ListNode();
let d = new ListNode();

head.next = b;
b.next = c;
c.next = d;

head.jump = b;
b.jump = d;
c.jump = b;

//console.log(setJumpOrder(head));
console.log(setJumpOrderIterative(head));