/**
 * Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value.
 * Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (root === null || root.val === val) return root;

    if (val < root.val) return searchBST(root.left, val);
    return searchBST(root.right, val);
};

var searchBSTIterative = function(root, val) {
    let curr = root;
    while (curr !== null && curr.val !== val) {
        if (val < curr.val) {
            curr = curr.left
        } else {
            curr = curr.right;
        }
    }
    return curr;
}