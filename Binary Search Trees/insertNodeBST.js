/**
 * Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST.
 *  Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
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
var insertIntoBST = function(root, val) {
    let newNode = new TreeNode(val);
    if (!root) return newNode;

    if (val > root.val) root.right = insertIntoBST(root.right, val);
    else root.left = insertIntoBST(root.left, val);

    return root;
};

var insertIntoBSTIterative = function(root, val) {
    let newNode = new TreeNode(val);

    let curr = root;
    while (curr !== null) {
        if (val > curr.val) {
            if (curr.right === null) {
                curr.right = newNode;
                return root;
            } else {
                curr = curr.right;
            }
        } else {
            if (curr.left === null) {
                curr.left = newNode;
                return root;
            } else {
                curr = curr.left;
            }
        }
    }
    return newNode;
}