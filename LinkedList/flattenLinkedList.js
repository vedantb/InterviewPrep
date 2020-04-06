/**
 * You are given a doubly linked list which in addition to the next and previous pointers,
 * it could have a child pointer, which may or may not point to a separate doubly linked list.
 * These child lists may have one or more children of their own, and so on, to produce a multilevel data structure.
 * 
 * Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.
 */

/**
 * Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    let result = new Node(0);
    let resultPtr = result;
    let ptr = head;
    let stack = [];
    while (ptr) {
        ptr.prev = resultPtr;
        resultPtr.next = ptr;
        resultPtr = resultPtr.next;
        if (ptr.child) {
            stack.push(ptr.next);
            let child = ptr.child;
            ptr.child = null;
            ptr = child;
        } else {
            ptr = ptr.next || stack.pop();
        }
    }

    result = result.next;
    if (result) result.prev = null;

    return result;
};

/**
 * Note - While flattening ensure that all child references are null and all prev pointers are accurate (not just next)
 */