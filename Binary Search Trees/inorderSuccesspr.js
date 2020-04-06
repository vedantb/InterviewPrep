/**
 * Given a binary search tree and a node in it, find the in-order successor of that node in the BST.
 * 
 * The successor of a node p is the node with the smallest key greater than p.val.
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
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    if (p.right !== null) {
        p = p.right;
        while (p.left !== null) p = p.left;
        return p;
    }

    let stack = [];
    let inorder = -Infinity;

    while (stack.length > 0 || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        if (inorder === p.val) return root;
        inorder = root.val;

        root = root.right;
    }

    return null;
};


// Approach 1: Iterative Inorder Traversal
/**
 * There could be two situations :
 * 1. If the node has a right child, the successor is somewhere lower in the tree
 * 2. Otherwise, the successor is somewhere upper in the tree
 * 
 * Algorithm:
 * 1. If the node has a right child, go one step right and then left till you can. Return the successor.
 * 2. Otherwise, implement iterative inorder traversal. While there are still nodes in the tree or in the stack:
 *      2.a. Go left till you can, adding nodes in stack.
 *      2.b. Pop out the last node. If its predecessor is equal to p, return that last node. Otherwise, save that node to be the predecessor in the next turn of the loop.
 *      2.c. Go one step right.
 * 3. If we're here that means the successor doesn't exist. Return null.
 */