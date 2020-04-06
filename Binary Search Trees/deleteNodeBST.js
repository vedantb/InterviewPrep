/**
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST.
 * Return the root node reference (possibly updated) of the BST.
 * Basically, the deletion can be divided into two stages:
 * 
 * Search for a node to remove.
 * If the node is found, delete the node.
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) return null;

    if (key > root.val) root.right = deleteNode(root.right, key);
    else if (key < root.val) root.left = deleteNode(root.left, key);
    else {
        if (root.left === null && root.right === null) root = null;
        else if (root.right !== null) {
            root.val = successor(root);
            root.right = deleteNode(root.right, root.val);
        } else {
            root.val = predecessor(root);
            root.left = deleteNode(root.left, root.val);
        }
    }
    return root;
};

var successor = function(root) {
    root = root.right;
    while (root.left !== null) root = root.left;
    return root.val;
}

var predecessor = function(root) {
    root = root.left;
    while (root.right !== null) root = root.right;
    return root.val;
}

/**
 * Three facts to know about BST:
 * 1. Inorder traversal of BST is an array sorted in the ascending order.
 * To compute inorder traversal follow the direction Left -> Node -> Right.
 * 
 * 2. Successor = "after node", i.e. the next node, or the smallest node after the current one.
 * It's also the next node in the inorder traversal. To find a successor, go to the right once and then as many times to the left as you could.
 * 
 * 3. Predecessor = "before node", i.e. the previous node, or the largest node before the current one.
 * It's also the previous node in the inorder traversal. To find a predecessor, go to the left once and then as many times to the right as you could.
 * 
 * Approach:
 * There are three possible situations here :
 * 1. Node is a leaf - deleting is straightforward: node = null;
 * 2. Node is not a leaf and has a right child. Then the node could be replaced by its successor which is somewhere lower in the right subtree.
 *    Then one could proceed down recursively to delete the successor.
 * 3. Node is not a leaf, has no right child and has a left child. That means that its successor is somewhere upper in the tree but we don't want to go back.
 *    Let's use the predecessor here which is somewhere lower in the left subtree. The node could be replaced by its predecessor and then one could proceed down recursively to delete the predecessor.
 * 
 *  - if key > root.val, node to delete is in right subtree - root.right = deleteNode(root.right, key);
 *  - if key < root.val, node to delete is in left subtree - root.left = deleteNode(root.left, key);
 *  - if key == root.val, lets get to deleting the node:
 *      - if node is a leaf, root = null;
 *      - if node has a right child, roor.val = successor.val and then delete the successor, root.right = deleteNode(root.right, root.val);
 *      - if no right child and only left child, replace node value by a predecessor, root.val = predecesor.val and root.left = deleteNode(root.left, root.val)
 *  - return root
 */