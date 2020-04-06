/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

    const result = [];
    const queue = [];

    if (root === null) {
        return result;
    }
    queue.push(root);
    while (queue.length > 0) {
        let queueSize = queue.length;
        let subRes = [];
        for (let i = 0; i < queueSize; i++) {
            let queueEl = queue.shift();
            subRes.push(queueEl.val);
            if (queueEl.left) queue.push(queueEl.left);
            if (queueEl.right) queue.push(queueEl.right);
        }
        result.push(subRes);
    }
    return result;

};