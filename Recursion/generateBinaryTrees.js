let generateBinaryTrees = (n) => {
    let result = [];
    if (n === 0) result.push(null);

    for (let leftNodes = 0; leftNodes < n; leftNodes++) {
        let rightNodes = n - 1 - leftNodes;
        let leftSubtrees = generateBinaryTrees(leftNodes);
        let rightSubtrees = generateBinaryTrees(rightNodes);

        for (left of leftSubtrees) {
            for (right of rightSubtrees) {
                result.push(new TreeNode(0, left, right));
            }
        }
    }

    return result;
}

function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}

console.log(generateBinaryTrees(3));