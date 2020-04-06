/**
 * Given a singly linked list, determine if it is a palindrome.
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) return null;

    let firstHalfEnd = endOfFirstHalf(head);
    let secondHalfStart = reverseList(firstHalfEnd.next);

    let p1 = head;
    let p2 = secondHalfStart;
    let result = true;

    while (result && p2) {
        if (p1.val !== p2.val) result = false;
        p1 = p1.next;
        p2 = p2.next;
    }

    firstHalfEnd.next = reverseList(secondHalfStart);
    return result;
};

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

var endOfFirstHalf = function(head) {
    let fast = head;
    let slow = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

/**
 * Time complexity : O(n), where n is the number of nodes in the Linked List.
 * Space complexity : O(1)
 * 
 * The downside of this approach is that in a concurrent environment (multiple threads and processes accessing the same data),
 * access to the Linked List by other threads or processes would have to be locked while this function is running,
 * because the Linked List is temporarily broken. This is a limitation of many in-place algorithms though.
 */