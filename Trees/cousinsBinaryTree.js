/**
 * In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
 * Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
 * We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
 * Return true if and only if the nodes corresponding to the values x and y are cousins.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    if (root === null) return false;
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let size = queue.length;
        let isXPresent = false;
        let isYPresent = false;

        for (let i = 0; i < size; i++) {
            let current = queue.shift();
            if (current.val === x) isXPresent = true;
            if (current.val === y) isYPresent = true;
            if (current.left !== null && current.right !== null) {
                // they are siblings and not cousins
                if (current.left.val === x && current.right.val === y) return false;
                if (current.left.val === y && current.right.val === x) return false;
            }
            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
        }
        if (isXPresent && isYPresent) return true; // both nodes at the same level and not siblings
        if (isXPresent || isYPresent) return false; // one of them is present at the level, the other one isn't
    }
    return false;
};
