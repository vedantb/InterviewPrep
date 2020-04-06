/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
};

var Node = function(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let curr = this.getNode(index);
    return curr ? curr.val : -1;
};


MyLinkedList.prototype.getTail = function() {
    let curr = this.head;
    while (curr && curr.next) {
        curr = curr.next;
    }
    return curr;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {Node}
 */
MyLinkedList.prototype.getNode = function(index) {
    let curr = this.head;
    for (let i = 0; i < index && curr; ++i) {
        curr = curr.next;
    }
    return curr;
};


/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
    } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);

    if (!this.head) {
        this.head = newNode;
    } else {
        const tail = this.getTail();
        tail.next = newNode;
        newNode.prev = tail;
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    let prev = this.getNode(index - 1);
    if (!prev) return;

    let curr = new Node(val);
    let next = prev.next;

    curr.prev = prev;
    curr.next = next;
    prev.next = curr;
    if (next) {
        next.prev = curr;
    }

};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let curr = this.getNode(index);
    if (!curr) return;

    let prev = curr.prev;
    let next = curr.next;
    if (prev) {
        prev.next = next;
    } else {
        this.head = next;
    }
    if (next) {
        next.prev = prev;
    }

};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */