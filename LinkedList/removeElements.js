/**
 * Remove all elements from a linked list of integers that have value val.
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let first = head;
    let second = dummy;
    while (first) {
        if (first.val === val) {
            second.next = first.next;
            first = first.next;
        } else {
            first = first.next;
            second = second.next;
        }
    }
    return dummy.next;
};