/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans;

    let traverse = function(currentNode, p, q) {
        if (currentNode === null) return false;

        let left = traverse(currentNode.left, p, q) ? 1 : 0;
        let right = traverse(currentNode.right, p, q) ? 1 : 0;

        let mid = (currentNode === p || currentNode === q) ? 1 : 0;

        if (mid + left + right >= 2) {
            ans = currentNode;
        }

        return (mid + left + right) > 0;
    }

    traverse(root, p, q);

    return ans;
};
// Time Complexity = O(N), N is number of nodes of binary tree
// Space Complexity = O(N). max space used by recursion stack as height can be N

var lowestCommonAncestorParentPointer = function(root, p, q) {
    // for tree traversal
    let stack = [];

    let parent = new Map();

    parent.set(root, null);
    stack.push(root);

    while (!parent.has(p) || !parent.has(q)) {

        let node = stack.pop();

        if (node.left) {
            parent.set(node.left, node);
            stack.push(node.left);
        }
        if (node.right) {
            parent.set(node.right, node);
            stack.push(node.right);
        }
    }

    let ancestors = new Set();

    while (p !== null) {
        ancestors.add(p);
        p = parent.get(p);
    }

    while (!ancestors.has(q)) {
        q = parent.get(q);
    }

    return q;
}
// Time Complexity = O(N), where N is the number of nodes in a binary tree. In the worst case, we visit all nodes
// Space Complexity = O(N). In the worst case space utilized by the stack, parent pointer map and ancestor set would be N each

var lowetCommonAncestorNoParentPointer = function(root, p, q) {

    const BOTH_PENDING = 2;
    const LEFT_DONE = 1;
    const BOTH_DONE = 0;

    let stack = [];
    stack.push({
        'node': root,
        'status': BOTH_PENDING
    });

    let oneNodeFound = false;
    let LCA = null;
    let childNode = null;

    while (stack.length > 0) {
        let top = stack[stack.length - 1];
        let parentNode = top['node'];
        let parentState = top['status'];

        if (parentState !== BOTH_DONE) {
            if (parentState === BOTH_PENDING) {
                if (parentNode === p || parentNode === q) {
                    if (oneNodeFound) {
                        return LCA;
                    } else {
                        oneNodeFound = true;
                        LCA = stack[stack.length - 1]['node'];
                    }
                }
                childNode = parentNode.left;
            } else {
                childNode = parentNode.right;
            }
            stack.pop();
            stack.push({
                'node': parentNode,
                'status': parentState - 1
            });

            if (childNode) {
                stack.push({
                    'node': childNode,
                    'status': BOTH_PENDING
                });
            }
        } else {
            if (LCA === stack.pop()['node'] && oneNodeFound) {
                LCA = stack[stack.lengtth - 1]['node'];
            }
        }
    }
    return null;
}
// Time Complexity:  O(N), where NN is the number of nodes in the binary tree. In the worst case we might be visiting all the nodes of the binary tree. The advantage of this approach is that we can prune backtracking. We simply return once both the nodes are found.
// Space Complexity: O(N). In the worst case the space utilized by stack would be NN since the height of a skewed binary tree could be N.