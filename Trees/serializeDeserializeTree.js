/**
 * Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root, str = "") {
    if (!root) {
        str += "null,";
    } else {
        str += `${root.val},`;
        str = serialize(root.left, str);
        str = serialize(root.right, str);
    }
    return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let treeArr = data.split(",");

    let recur = function(treeArr) {
        if (treeArr[0] === "null") {
            treeArr.shift();
            return null;
        }
        let root = new TreeNode(treeArr[0]);
        treeArr.shift();
        root.left = recur(treeArr);
        root.right = recur(treeArr);

        return root;
    }


    return recur(treeArr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */