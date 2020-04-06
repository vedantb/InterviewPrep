// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

/**
 *  Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;

    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let length = queue.length;

        for (let i = 0; i < length; i++) {
            let node = queue.shift();

            if (i < length - 1) {
                node.next = queue[0];
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return root;
}

var connectConstantSpace = function(root) {
    if (!root) return null;

    let lastHead = root;
    let lastCurr = null;
    let currHead = null;
    let curr = null;

    while (lastHead) {
        lastCurr = lastHead;

        while (lastCurr) {
            if (lastCurr.left) {
                if (!currHead) {
                    currHead = lastCurr.left;
                    curr = lastCurr.left;
                } else {
                    curr.next = lastCurr.left;
                    curr = curr.next;
                }
            }

            if (lastCurr.right) {
                if (!currHead) {
                    currHead = lastCurr.right;
                    curr = lastCurr.right;
                } else {
                    curr.next = lastCurr.right;
                    curr = curr.next;
                }
            }
            lastCurr = lastCurr.next;
        }
        lastHead = currHead;
        currHead = null;
    }
}