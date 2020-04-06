/**
 * A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
 * Return a deep copy of the list
 */

/**
 * Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomListRecursive = function(head) {
    let visitedHash = new Map();

    let copyList = function(head) {
        if (!head) return null;

        if (visitedHash.get(head)) {
            return visitedHash.get(head);
        }

        let node = new Node(head.val);
        visitedHash.set(head, node);

        node.next = copyList(head.next);
        node.random = copyList(head.random);

        return node;
    }

    return copyList(head);
};


var copyRandomListIterativeMap = function(head) {
    let visitedMap = new Map();

    let clonedNode = function(node) {
        if (node) {
            if (visitedMap.has(node)) {
                return visitedMap.get(node);
            } else {
                visitedMap.set(node, new Node(node.val));
                return visitedMap.get(node);
            }
        }
        return null;
    };

    let copyList = function(head) {
        if (!head) {
            return null;
        }

        let oldNode = head;
        let newNode = new Node(head.val);
        visitedMap.set(oldNode, newNode);

        while (oldNode) {
            newNode.random = clonedNode(oldNode.random);
            newNode.next = clonedNode(oldNode.next);

            oldNode = oldNode.next;
            newNode = newNode.next;
        }

        return visitedMap.get(head);
    };

    return copyList(head);
}

var copyRandomListIterativeNoMap = function() {
    if (!head) return null;

    let ptr = head;
    while (ptr) {
        let newNode = new Node(ptr.val);
        newNode.next = ptr.next;
        ptr.next = newNode;
        ptr = newNode.next;
    }

    ptr = head;

    while (ptr) {
        ptr.next.random = ptr.random ? ptr.random.next : null;
        ptr = ptr.next.next;
    }

    let ptrOldList = head;
    let ptrNewList = head.next;
    let headOld = head.next;

    while (ptrOldList) {
        ptrOldList.next = ptrOldList.next.next;
        ptrNewList.next = ptrNewList.next ? ptrNewList.next.next : null;
        ptrOldList = ptrOldList.next;
        ptrNewList = ptrNewList.next;
    }

    return headOld;
}