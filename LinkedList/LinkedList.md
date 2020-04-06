### Introduction

Similar to the array, the linked list is also a `linear` data structure. Here is an example:

![alt text](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/12/screen-shot-2018-04-12-at-152754.png 'Linked List 1')

As you can see, each element in the linked list is actually a separate object while all the objects are `linked together by the reference field` in each element.

There are two types of linked list: singly linked list and doubly linked list. The example above is a singly linked list and here is an example of doubly linked list:

![alt text](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/17/screen-shot-2018-04-17-at-161130.png 'Linked List 1')

#### Singly Linked List

Each node in a singly-linked list contains not only the value but also `a reference field` to link to the next node. By this way, the singly-linked list organizes all the nodes in a sequence.

Here is the typical definition of a node in a singly-linked list:

```js
var Node = function (element) {
  this.element = element;
  this.next = null;
};
```

In most cases, we will use the `head` node (the first node) to represent the whole list.

#### Operations

Unlike the array, we are not able to access a random element in a singly-linked list in constant time. If we want to get the ith element, we have to traverse from the head node one by one. It takes us `O(N)` time on average to `visit an element by index`, where N is the length of the linked list.

##### Add Operation

If we want to add a new value after a given node `prev`, we should:

1. Initialize a new node `cur` with the given value;
2. Link the "next" field of `cur` to prev's next node `next`
3. Link the "next" field in `prev` to `cur`.

Unlike an array, we don’t need to move all elements past the inserted element. Therefore, you can insert a new node into a linked list in `O(1)` time complexity, which is very efficient.

###### Add a node at the beginning

As we know, we use the head node `head` to represent the whole list.
So it is essential to update `head` when adding a new node at the beginning of the list.

1. Initialize a new node `cur`;
2. Link the new node to our original head node `head`.
3. Assign `cur` to `head`.

##### Delete Operation

If we want to delete an existing node `cur` from the singly linked list, we can do it in two steps:

1. Find cur's previous node `prev` and its next node `next`;
2. Link `prev` to cur's next node `next`.

In our first step, we need to find out `prev` and `next`. It is easy to find out `next` using the reference field of `cur`. However, we have to traverse the linked list from the head node to find out `prev` which will take `O(N)` time on average, where `N` is the length of the linked list. So the time complexity of deleting a node will be `O(N)`.

The space complexity is `O(1)` because we only need constant space to store our pointers.

###### Delete the First Node

If we want to delete the first node, we can simply `assign the next node to head`.

### Two-Pointer in Linked List

The classic problem:

`Given a linked list, determine if it has a cycle in it.`

You can come up with a solution using the `hash table`. But there is a more efficient solution using the `two-pointer technique`.

Imagine there are two runners with different speed. If they are running on a straight path, the fast runner will first arrive at the destination. However, if they are running on a circular track, the fast runner will catch up with the slow runner if they keep running.

That's exactly what we will come across using two pointers with different speed in a linked list:

1. `If there is no cycle, the fast pointer will stop at the end of the linked list.`
2. `If there is a cycle, the fast pointer will eventually meet with the slow pointer.`

So, the only remaining problem is:

`What should be the proper speed for the two pointers?`

It is a safe choice to move the slow pointer `one step` at a time while moving the fast pointer `two steps` at a time. For each iteration, the fast pointer will move one extra step. If the length of the cycle is M, after M iterations, the fast pointer will definitely move one more cycle and catch up with the slow pointer.

`What about other choices? Do they work? Would they be more efficient?`

#### Summary - Two-Pointer in Linked List

Template:

```js
let slow = head;
let fast = head;

/**
 * Change this condition to fit specific problem.
 * Attention: remember to avoid null-pointer error
 **/
while (slow && fast && fast.next) {
  slow = slow.next; // move slow pointer one step each time
  fast = fast.next.next; // move fast pointer two steps each time
  if (slow === fast) return true; // change this condition to fit specific problem
}
return false; // change return value to fit specific problem
```

##### Tips

1. **Always examine if the node is null before you call the next field.**
2. **Carefully define the end conditions of your loop.**

##### Complexity Analysis

It is easy to analyze the space complexity. If you only use pointers without any other extra space, the space complexity will be `O(1)`. However, it is more difficult to analyze the time complexity. In order to get the answer, we need to analyze `how many times we will run our loop` .

For detecting a cycle and similar problems it is `O(N)`

### Summary - Linked List Classic Problems

Tips:

1. **Going through some test cases will save you time.**

   It is not easy to debug when using a linked list. Therefore, it is always useful to try several different examples on your own to validate your algorithm before writing code.

2. **Feel free to use several pointers at the same time.**

   Sometimes when you design an algorithm for a linked-list problem, there might be several nodes you want to track at the same time. You should keep in mind which nodes you need to track and feel free to use several different pointers to track these nodes at the same time.

3. **In many cases, you need to track the previous node of the current node.**

   You are not able to trace back the previous node in a singly linked list. So you have to store not only the current node but also the previous node.

### Doubly Linked List

The doubly linked list works in a similar way but has `one more reference field` which is known as `the "prev" field`. With this extra field, you are able to know the previous node of the current node.

![alt text](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/17/screen-shot-2018-04-17-at-161130.png 'Doubly Linked List 1')

Here is a typical definition of the node structure in a doubly linked list:

```js
var DoublyListNode = function (val) {
  this.val = val;
  this.next = null;
  this.prev = null;
};
```

Similar to the singly linked list, we will use the `head` node to represent the whole list.

#### Operations

We can access data in the same exact way as in a singly linked list:

1. We are `not able to access a random position` in constant time.
2. We have to `traverse from the head` to get the `i-th` node we want.
3. The time complexity in the worse case will be `O(N)`, where `N` is the length of the linked list.

For addition and deletion, it will be a little more complicated since we need to take care of the "prev" field as well.

#### Add Operation - Doubly Linked List

If we want to insert a new node `cur` after an existing node `prev`, we can divide this process into two steps:

1. link `cur` with `prev` and `next`, where `next` is the original next node of `prev`;

![alt text](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/28/screen-shot-2018-04-28-at-173045.png 'Add Node Doubly Linked List 1')

2. re-link the `prev` and `next` with `cur`.

![alt text](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/29/screen-shot-2018-04-28-at-173055.png 'Add Node Doubly Linked List 2')

#### Delete Operation - Doubly Linked List

If we want to delete an existing node `cur` from the doubly linked list, we can simply link its previous node `prev` with its next node `next`.

Unlike the singly linked list, it is easy to get the previous node in constant time with the "prev" field.

Since we no longer need to traverse the linked list to get the previous node, both the time and space complexity are `O(1)`.

#### Review

Let's briefly review the performance of the singly linked list and doubly linked list.

They are similar in many operations:

1. Both of them are `not able to access the data at a random position` in constant time.
2. Both of them are able to `add a new node after given node or at the beginning of the list in O(1) time`.
3. Both of them are able to `delete the first node in O(1) time`.

But it is a little different to `delete a given node` (including the last node).

- In a singly linked list, it is not able to get the previous node of a given node so we have to spend `O(N)` time to find out the previous node before deleting the given node.
- In a doubly linked list, it will be much easier because we can get the previous node with the "prev" reference field. So we can delete a given node in `O(1)` time.
