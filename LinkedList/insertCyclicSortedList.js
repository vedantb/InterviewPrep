/**
 * Given a node from a Circular Linked List which is sorted in ascending order, write a function to insert a value insertVal
 * into the list such that it remains a sorted circular list. The given node can be a reference to any single node in the list,
 * and may not be necessarily the smallest value in the circular list.
 * 
 * If there are multiple suitable places for insertion, you may choose any place to insert the new value.
 * After the insertion, the circular list should remain sorted.
 * 
 * If the list is empty (i.e., given node is null), you should create a new single circular list and return the reference to that single node.
 * Otherwise, you should return the original given node.
 */

/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    if (!head) {
        let newNode = new Node(insertVal);
        newNode.next = newNode;
        return newNode;
    }

    let prev = head;
    let curr = head.next;
    let toInsert = false;

    do {
        if (prev.val <= insertVal && insertVal <= curr.val) {
            toInsert = true;
        } else if (prev.val > curr.val) {
            if (insertVal >= prev.val || insertVal <= curr.val) {
                toInsert = true;
            }
        }

        if (toInsert) {
            prev.next = new Node(insertVal, curr);
            return head;
        }

        prev = curr;
        curr = curr.next;
    } while (prev !== head);

    prev.next = new Node(insertVal, curr);
    return head;
};