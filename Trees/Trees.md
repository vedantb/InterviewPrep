## Introduction

Each node of the tree will have a root value and a list of references to other nodes which are called child nodes. From graph view, a tree can also be defined as a directed acyclic graph which has `N nodes` and `N-1 edges`.

A `Binary Tree` is a tree data structure in which each node has `at most two children` - left and right child.

### Traverse a Tree

1. Pre-order
2. In-order
3. Post-order
4. Recursive or Iterative

#### Pre-Order Traversal

Root first, then left and then right subtree

#### In-Order Traversal

Left subtree first, then visit the root. Finally traverse right subtree

Typically, for `binary search tree`, we can retrieve all data in sorted order using in-order traversal.

#### Post-Order Traversal

Left first, then right and finally root

It is worth noting that when you delete nodes in a tree, deletion will be in post-order. That is, when you delete a node, you will delete its left child and right child before you delete the node itself.

Post-order widely used for math expressions.

![Image of Math expression](https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/Figures/binary_tree/mathematical_expression.png)

You can easily figure out the expression using in-order traversal. However, if you handle this in post-order, you can easily handle the expression using a stack. Each time you meet an operator, pop 2 elements, calculate the result and push it back on the stack.

Time Complexity of Traversal is `O(N)` because we visit each node exactly once. And the depth of the tree might be `N` in the worst case. For recursion, space complexity is `O(N)` as well. For the iterative solution, the space complexity is `O(N)` as well since in the worst case we have all our nodes in the stack. Some iterative solutions can reduce space complexity to `O(1)`.
If the depth of the tree is too large, recursion might suffer from a `stack overflow problem`. That's one of the main reasons why we may want to solve this iteratively sometimes.

#### Level Order Traversal

`Breadth-First-Search` is used to traverse or search. it starts with the root node and visits the node itself first. Then traverse it's neighbors, traverse it's second level neighbors and so on.

Typically, we use a queue to help us do BFS.

Since each node in the tree will be pushed into the queue exactly once, the time complexity for level-order traversal is `O(N)`, where `N` is the total number of nodes in the tree.
the size of the queue will be at most `N` because each node will be pushed into the queue exactly once. Therefore, the space complexity of level-order traversal is also `O(N)`.

### Solve Tree Problems Recursively

Recursion is one of the most powerful and frequently used technqiues for solving tree problems.

Typically, we can solve a tree problem recursively using a top-down approach or bottom-up approach.

#### Top-down Solution

"Top-down" means that in each recursive call, we will visit the node first to come up with some values, and pass these values to its children when calling the function recursively. So the "top-down" solution can be considered as a kind of **preorder traversal**.

```
1. return specific value for null node
2. update the answer if needed // answer <-- params
3. left_ans = top_down(root.left, left_params)   // left_params <-- root.val, params
4. right_ans = top_down(root.right, right_params) // right_params <-- root.val, params
5. return the answer if needed // answer <-- left_ans, right_ans
```

e.g. given a binary tree, find its max depth
We know that depth of root node is `1`. For each node, if we know it's depth, we will know the depth of it's children. Therefore, if we pass the depth of the node as a parameter when calling the function recursively, all the nodes will know their depth. And for lead nodes, we can use the depth to update the final answer.
Pseudocode:

```
1. return if root is null
2. if root is a lead node:
3.      answer = max(answer, depth) // update the answer if needed
4. max_depth(root.left, depth+1) // call function recursively for left child
5. max_depth(root.right, depth+1) // call function recursively for right child
```

#### Bottom-Up Solution

"Bottom-up" is another recursive solution. In each recursive call, we will firstly call the function recursively for all the children nodes and then come up with the answer according to the returned values and the value of the current node itself. This process can be regarded as a kind of **postorder** traversal.

```
1. return specific value for null node
2. left_ans = bottom_up(root.left)          // call function recursively for left child
3. right_ans = bottom_up(root.right)        // call function recursively for right child
4. return answers   // answer <-- left_ans, right_ans, root.val
```

For max depth: for a single node of the tree, what will be the maximum depth `x` of the subtree rooted at itself?
If we know the maximum depth `l` of the subtree rooted at its left child and the maximum depth `r` of the subtree rooted at its right child, we can choose the maximum between them and add 1 to get the maximum depth of the subtree rooted at the current node.

It means that for each node, we can get the answer after solving the problem for its children.

```
1. return 0 if root is null                 // return 0 for null node
2. left_depth = maximum_depth(root.left)
3. right_depth = maximum_depth(root.right)
4. return max(left_depth, right_depth) + 1  // return depth of the subtree rooted at root
```

#### Conclusion

When you meet a tree problem, ask yourself two questions: Can you determine some parameters to help the node know its answer? Can you use these parameters and the value of the node itself to determine what should be the parameters passed to its children? If the answers are both yes, try to solve this problem using a "top-down" recursive solution.

Or, you can think of the problem in this way: for a node in a tree, if you know the answer of its children, can you calculate the answer of that node? If the answer is yes, solving the problem recursively using a bottom up approach might be a good idea.

##### Problems

##### Construct Binary Tree from Inorder and Postorder Traversal

- Start from not inorder traversal, usually it's preorder or postorder one and define the strategy to pick the nodes. For example, for preorder traversal the first value is a root, then its left child, then its right child, etc. For postorder traversal the last value is a root, then its right child, then its left child, etc.
- The value picked from preorder/postorder traversal splits the inorder traversal into left and right subtrees. The only information one needs from inorder is if the current subtree is empty (return `None`) or not (continue to construct subtree)

Algorithm:

- Build hashmap `value -> its index` for inorder traversal
- Return `helper` function which takes as aruments left and right boundaries for the current subtree in the inorder traversal. These boundaries are used only to check if subtree is empty or not. Here is how it works `helper(in_left = 0, in_right = n-1)`:
  - If `in_left` > `in_right`, subtree is empty and return `none`.
  - Pick last element in postorder traversal as root.
  - Root value has index `index` in the inorder traversal, elements from `in_left` to `index-1` belong to left subtree and elements from `index+1` to `in_right` belong to right subtree.
  - Following the postorder logic, proceed recursively first to construct the right subtree `helper(index+1, in_right)` and then to construct the left subtree `helper(in_left, index-1)`.
  - Return `root`
