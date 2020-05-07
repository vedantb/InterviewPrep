/**
 * Given a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees,
 * you only need to return the root node of any one of them.
 * 
 * Two trees are duplicate if they have the same structure with same node values.
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = {};
    let res = [];
    preOrder(root, map, res);
    return res;
};

let preOrder = function(root, map, res) {
    if (!root) return "#";
    let str = root.val + preOrder(root.left, map, res) + preOrder(root.right, map, res);
    if (!map[str]) map[str] = 0;
    map[str]++;
    if (map[str] === 2) res.push(root);
    return str;
}