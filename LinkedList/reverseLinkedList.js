/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return null;

    let currentHead = head;
    while (head.next) {
        let p = head.next;
        head.next = p.next;
        p.next = currentHead;
        currentHead = p;
    }

    return currentHead;
};