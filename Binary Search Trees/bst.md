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
