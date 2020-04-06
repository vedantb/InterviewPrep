/**
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return dfs(inorder.length - 1, 0, inorder.length - 1);

    function dfs(index, startPos, endPos) {
        if (startPos > endPos)
            return null;

        var node = new TreeNode(postorder[index]);
        var pos = inorder.indexOf(postorder[index]);

        node.left = dfs(index - (endPos - pos) - 1, startPos, pos - 1);
        node.right = dfs(index - 1, pos + 1, endPos);

        return node;
    }
};


var buildTree2 = function(inorder, postorder) {
    let hash = {};
    for (let i = 0; i < inorder.length; i++) hash[inorder[i]] = i;

    let recur = function(start, end) {
        if (start > end) return null;
        let val = postorder.pop();
        let root = new TreeNode(val);
        root.right = recur(hash[val] + 1, end);
        root.left = recur(start, hash[val] - 1);
        return root;
    }

    return recur(0, inorder.length - 1);
};