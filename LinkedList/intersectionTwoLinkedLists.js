/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let ptr1 = headA,
        ptr2 = headB;

    while (ptr1 !== ptr2) {
        ptr1 = ptr1 ? ptr1.next : headB;
        ptr2 = ptr2 ? ptr2.next : headA;
    }

    return ptr1;
};