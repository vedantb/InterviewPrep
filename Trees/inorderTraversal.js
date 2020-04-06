/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, result = []) {

    if (!root) {
        return result;
    }

    inorderTraversal(root.left, result);
    result.push(root.val);
    inorderTraversal(root.right, result);

    return result;
};

var inorderTraversalIterative = function(root) {
    let stack = [];
    let answer = [];

    let curr = root;
    while (curr != null || stack.length > 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        answer.push(curr.val);
        curr = curr.right;
    }

    return answer;
};