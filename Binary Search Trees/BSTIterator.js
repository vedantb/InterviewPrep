/**
 * Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.
 * 
 * Calling next() will return the next smallest number in the BST.
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
 */
var BSTIterator = function(root) {
    this.sorted = [];
    this.index = -1;

    this._inorder(root);
};

BSTIterator.prototype._inorder = function(root) {
    if (!root) return;

    this._inorder(root.left);
    this.sorted.push(root.val);
    this._inorder(root.right);
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.sorted[++this.index];
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.index + 1 < this.sorted.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */


/**
 * Apprach 2: Controlled Recursion
 * 1. Initialize empty stack s 
 * 2. We use a helper function "inorderLeft" which adds leftmost branch of the tree rooted at the given root to the stack till there is no left child
 * 3. The first time next() is called, smallest element of the BST has to be returned and our simulated recursion has to move one step forward
 *     The invariant we maintain is that the stack top always has the smallest element to be returned for the next call. 
 * 4. Initially, given the root node of the BST, we call the function inorderLeft and ensured our invariant holds.
 * 5. The node which we have to return i.e. the next smallest element in the binary search tree iterator is the one sitting at the top of our stack
 *     Now there are 2 possibilities:
 *     5.a.One is where the node at the top of the stack is actually a leaf node. This is the best case and here we don't have to do anything.
 *         Simply pop the node off the stack and return its value
 *     5.b.Second is where the node has a right child. We don't need to check for the left child because of the way we have added nodes onto the stack.
 *         The topmost node either won't have a left child or would already have the left subtree processed.
 *          If it has a right child, then we call our helper function on the node's right child.
 *          This would comparatively be a costly operation depending upon the structure of the tree.
 * 
 * 
 * Complexity Analysis:
 * hasNext: O(1) every time
 * next: to pop the top element is O(1). To maintain the invariant we call "inorderHelper" which is O(N) worsr case.
 *       However, we only call this ever for node with a right child, Otherwise, we simply return. The worse case is only for the skewed tree.
 * Thus, the amortized (average) time complexity for this function would still be O(1). 
 */