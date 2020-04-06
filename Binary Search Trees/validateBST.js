/**
 * Given a binary tree, determine if it is a valid binary search tree (BST).
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
var isValidBST = function(root) {

    let helper = function(node, lower, upper) {
        if (node === null) return true;
        let val = node.val;

        if ((lower !== null && val <= lower) || (upper !== null && val >= upper)) return false;

        return helper(node.right, val, upper) && helper(node.left, lower, val);
    }

    return helper(root, null, null);

};

var isValidBST1 = function(root, lower = -Infinity, upper = Infinity) {
    if (!root) return true;

    let val = root.val;

    if (val <= lower || val >= upper) return false;
    return isValidBST1(root.left, lower, val) && isValidBST(root.right, val, upper);
};

var isValidBSTIterative = function(root) {
    let stack = [];
    let inorder = -Infinity;

    while (stack.length > 0 || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= inorder) return false;
        inorder = root.val;
        root = root.right;
    }
    return true;
}