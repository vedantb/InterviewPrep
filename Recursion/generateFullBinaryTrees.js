/**
 * A full binary tree is a binary tree where each node has exactly 0 or 2 children.
 * Return a list of all possible full binary trees with N nodes.  Each element of the answer is the root node of one possible tree.
 * Each node of each tree in the answer must have node.val = 0.
 * You may return the final list of trees in any order.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
    let result = [];
    if (N === 0) result.push(null);

    if (N === 1) {
        result.push(new TreeNode(0));
    } else if (N % 2 === 1) {
        for (let leftNodes = 0; leftNodes < N; leftNodes++) {
            let rightNodes = N - 1 - leftNodes;
            let leftSubtrees = allPossibleFBT(leftNodes);
            let rightSubtrees = allPossibleFBT(rightNodes);
            for (left of leftSubtrees) {
                for (right of rightSubtrees) {
                    let node = new TreeNode(0);
                    node.left = left;
                    node.right = right;
                    result.push(node);
                }
            }
        }
    }

    return result;
};