### Introduction

A `Binary Search Tree` is a special form of Binary Tree. The value in each node must be `greater than` (or equal to) any values in its `left subtree` but `less than` (or equal to) any values in its `right subtree`.

Like a normal binary tree, we can traverse a BST in preorder, inorder, postorder or level-order. However, it is noteworthy that `inorder traversal` in BST will be in `ascending order`. Therefore, the inorder traversal is the most frequent used traversal method of a BST.

#### Search in BST

BSTs support 3 main operations: search, insertion and deletion.
According to the property of BST, for each node:

1. return the node if the target value is equal to the node.
2. continue searching the left subtree if target value is less than the value of the node
3. continue searching the right subtree if target value is larger than the value of the node

#### Insertion in a BST

The main idea is to find out a proper leaf position for the target node and then insert the node as a leaf.

1. search the left or right subtrees according to the relation of the value of the node and the value of our target node;
2. repeat STEP 1 until reaching an external node;
3. add the new node as its left or right child depending on the relation of the value of the node and the value of our target node.

#### Deletion in a BST

Deletion is more complicated than the other operations. Our solution is to replace the target node with a proper child.

1. If the target node has **no child**, we can simply remove the node
2. If the target node has **one child**, we can use its child to replace itself.
3. If the target node has **two children**, replace the node with its in-order successor or predecessor node and delete that node

### Conclusion - Introduction

The strength of a BST is that you can perform all search, insertion and deletion operations in `O(h)` time complexity even in the worst case.

Usually, if you want to store data in order and need several operations, such as search, insertion or deletion, at the same time, a BST might be a good choice.

Example: kth Largest Element in a Stream

A most obvious way to solve this problem is to sort the array in descending order first and then return the kth element in the array.

But we have to sort for the new element everytime when we insert a new value in order to perform the search operation in `O(1)` time complexity. But the time complexity of the insertion operation will be `O(N)`.

Since we need insertion and search operations at the same time, what about using a BST to store the values?

As we know, for each node in a BST, all the values in the `right subtree` are `larger than` the value of the node itself while all values in `left subtree` are `smaller than` the value of the node.

In other words, for each node in a BST, if `m` nodes in the right subtree, the node itself is the `m + 1` largest element in the existed array.

### Height Balanced BST

A `height-balanced` (or `self-balancing`) BST is a binary search tree that automatically keeps its height small in the face of arbitrary item insertions and deletions. That is, the height of a balanced BST with `N` nodes is always `logN`. Also, the height of the two subtrees of every node never differs by more than 1.

Using the definition, we can determine if a BST is height-balanced
We can calculate the total number of nodes and the height of the tree to determine if this BST is a height-balanced BST.

Also, in the definition, we mentioned a property of height-balanced BST: the depth of the two subtrees of every node never differ by more than 1. We can also validate the tree recursively according to this rule.

##### Why use a height balanced BST?

When we analyze the time complexity of search, insert, delete operations, it is worth noting that the height of the tree is the most important factor. Taking search operation as an example, if the height of the BST is `h`, the time complexity will be `O(h)`. The height of the BST really matters.

The height of a BST with `N` nodes can vary from `logN` to `N`. That is, the time complexity of search operation can vary from `logN` to `N`. It is a huge difference in the performance.

##### How to implement a height balanceed BST?

There are several different implementations for height-balanced BSTs. The details of these implementations are different but they have similar goals:

1. The data structure should satisfy the binary search property and the height-balanced property.
2. The data structure should support the basic operations of BST, including search, insertion and deletion within `O(logN)` even in the worst case.

Popular height-balanced BSTs:

- Red-Black Tree
- AVL Tree
- Splay Tree
- Treap

##### Practical Application of the Height-balanced BST

The most profound use is in set/map. The principle of set and map are similar. We will focus on the set in the following discussion.

Typically, there are two kinds of sets which are widely used: `hash set` and `tree set`.

The `tree set`, is implemented by the height balanced BST. Therefore, the time complexity of search, insertion and deletion are all `O(logN)`.

The `hash set` also used the height balanced BST for an important role. When there are too many elements with the same hash key, it will cost `O(N)` time complexity to look up for a specific element, where `N` is the number of elements with the same hash key. Typically, the height-balanced BST will be used here to improve the performance from `O(N)` to `O(logN)`.

The essential difference between the hash set and the tree set is that keys in the tree set are `ordered`.
