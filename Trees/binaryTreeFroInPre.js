/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let hash = {};
    for (let i = 0; i < inorder.length; i++) hash[inorder[i]] = i;

    let recur = function(start, end) {
        if (start > end) return null;
        let val = preorder.shift();
        let root = new TreeNode(val);
        root.left = recur(start, hash[val] - 1);
        root.right = recur(hash[val] + 1, end);
        return root;
    }

    return recur(0, inorder.length - 1);
};