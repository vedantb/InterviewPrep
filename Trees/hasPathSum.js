/**
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values
 *  along the path equals the given sum.
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false;

    sum -= root.val;

    if (!root.left && !root.right) return sum === 0;

    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};