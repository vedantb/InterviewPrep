/**
 * Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
 * 
 * Note: Do not modify the linked list.
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) return null;

    let intersection = getIntersection(head);
    if (!intersection) return null;

    let ptr1 = head;
    let ptr2 = intersection;
    while (ptr1 !== ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    return ptr1;
};

/** From linkedListCycle.js */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var getIntersection = function(head) {

    let slow = head;
    let fast = head;

    while (slow.next && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return slow;
    }
    return null;
}

/**
 * APPROACH: Floyd's Tortoise and Hare
 * 
 * What happens when a fast runner (a hare) races a slow runner (a tortoise) on a circular track?
 * At some point, the fast runner will catch up to the slow runner from behind.
 * 
 * Algorithm:
 * Floyd's algorithm is separated into two distinct phases. In the first phase, it determines whether a cycle is present in the list.
 * If no cycle is present, it returns null immediately, as it is impossible to find the entrance to a nonexistant cycle.
 * Otherwise, it uses the located "intersection node" to find the entrance to the cycle.
 * 
 * 
 * Phase 1: Usual cycle detection algorithm using 2 pointers
 * Phase 2: Given that phase 1 finds an intersection, phase 2 proceeds to find the node that is the entrance to the cycle.
 * To do so, we initialize two more pointers: ptr1, which points to the head of the list, and ptr2, which points to the intersection. 
 * Then, we advance each of them by 1 until they meet; the node where they meet is the entrance to the cycle, so we return it.
 */

/**
 * Time complexity : O(n)
 * Space complexity : O(1)
 */