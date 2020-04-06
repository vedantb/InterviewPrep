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
var postorderTraversal = function(root, result = []) {
    if (!root) {
        return result;
    }

    postorderTraversal(root.left, result);
    postorderTraversal(root.right, result);
    result.push(root.val);

    return result;
}

var postOrderTraversalIterative = function(root) {
    let stack = [];
    let answer = [];

    if (root === null) {
        return answer;
    }

    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        answer.push(node.val);
        if (node.left !== null) {
            stack.push(node.left);
        }
        if (node.right !== null) {
            stack.push(node.right);
        }
    }

    return answer.reverse();
}