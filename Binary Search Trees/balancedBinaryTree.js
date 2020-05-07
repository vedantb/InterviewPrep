/**
 * Given a binary tree, determine if it is height-balanced.
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return null;

    return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

var height = function(root) {
    if (!root) return -1;
    return 1 + Math.max(height(root.left), height(root.right));
}