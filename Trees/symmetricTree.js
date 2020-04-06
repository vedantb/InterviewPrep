/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
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
var isSymmetric = function(root) {
    return isMirror(root, root);
};

var isMirror = function(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;

    return node1.val === node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
}