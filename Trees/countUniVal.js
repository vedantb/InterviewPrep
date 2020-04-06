const countUnivalSubtrees = function(root) {
    if (!root) return 0;

    let count = 0;

    const traverse = (node) => {
        if (!node) return true;

        if (!node.left && !node.right) {
            count++;
            return true;
        }

        const leftSubtree = traverse(node.left);
        const rightSubtree = traverse(node.right);

        if (leftSubtree && rightSubtree) {
            if (!node.right && node.val === node.left.val) {
                count++;
                return true;
            }

            if (!node.left && node.val === node.right.val) {
                count++;
                return true;
            }

            if (node.left.val === node.val && node.right.val === node.val) {
                count++
                return true
            }
        }
        return false;
    }
    traverse(root);

    return count;
}