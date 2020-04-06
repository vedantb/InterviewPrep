/**
 * Given a linked list, rotate the list to the right by k places, where k is non-negative.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let tail = head;
    if (head === null) return head;
    let len = 1;
    while (tail.next) {
        tail = tail.next;
        len++;
    }
    tail.next = head;
    let count = len - (k % len);
    while (count > 0) {
        head = head.next;
        tail = tail.next;
        count--;
    }
    tail.next = null;
    return head;
};