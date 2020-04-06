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
var preorderTraversal = function(root, arr = []) {
    if (!root) {
        return arr;
    }

    arr.push(root.val);

    preorderTraversal(root.left, arr);
    preorderTraversal(root.right, arr);

    return arr;
};

var preorderTraversalIterative = function(root) {
    let stack = [];
    let answer = [];
    if (!root) {
        return answer;
    }

    stack.push(root);
    while (stack.length !== 0) {
        let cur = stack.pop();
        answer.push(cur);

        if (cur.right) {
            stack.push(cur.right);
        }

        if (cur.left) {
            stack.push(cur.left);
        }

    }

    return answer;
};