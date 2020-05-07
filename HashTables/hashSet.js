/**
 * Initialize your data structure here.
 */

var LinkedNode = function(value) {
    this.val = value;
    this.next = null;
}

var MyHashSet = function() {
    this.buckets = [];
    this.bucketsLen = 1000;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let hashCode = key % this.bucketsLen;
    if (!this.buckets[hashCode]) {
        this.buckets[hashCode] = new LinkedNode(0);
        let head = this.buckets[hashCode];
        head.next = new LinkedNode(key);
        return;
    } else {
        let head = this.buckets[hashCode];
        let point = head;
        head = head.next;
        while (head !== null) {
            if (head.val === key) return;
            point = head;
            head = head.next;
        }
        point.next = new LinkedNode(key);
        return;
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let hashCode = key % this.bucketsLen;
    let head = this.buckets[hashCode];
    if (!head) return;
    let point = head;
    let curr = head.next;
    while (curr !== null) {
        if (curr.val === key) {
            point.next = curr.next;
            return;
        }
        point = curr;
        curr = curr.next;
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let hashCode = key % this.bucketsLen;
    let head = this.buckets[hashCode];
    if (!head) return false;
    head = head.next;
    while (head !== null) {
        if (head.val === key) return true;
        head = head.next;
    }
    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */