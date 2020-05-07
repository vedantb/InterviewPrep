/**
 * Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
 * 
 * get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
 * 
 * put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
 * 
 * The cache is initialized with a positive capacity.
 */

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this._capacity = capacity;
    this._count = 0;
    this._head = null;
    this._tail = null;
    this._hashTable = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this._hashTable[key];
    if (node) {
        const {
            value,
            prev,
            next
        } = node;

        if (prev) {
            prev.next = next;
        }
        if (next) {
            next.prev = prev || next.prev;
        }
        if (this._tail === node) {
            this._tail = prev || node;
        }

        node.prev = null;
        if (this._head !== node) {
            node.next = this._head;
            this._head.prev = node;
        }
        this._head = node;
        return value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this._hashTable[key]) {
        this._hashTable[key].value = value;
        this.get(key);
    } else {
        this._hashTable[key] = {
            key,
            value,
            prev: null,
            next: null
        };

        if (this._head) {
            this._head.prev = this._hashTable[key];
            this._hashTable[key].next = this._head;
        }

        this._head = this._hashTable[key];

        if (!this._tail) {
            this._tail = this._hashTable[key];
        }

        this._count += 1;

        if (this._count > this._capacity) {
            let removedKey = this._tail.key;

            if (this._tail.prev) {
                this._tail.prev.next = null;
                this._tail = this._tail.prev;
                this._hashTable[removedKey].prev = null;
            }

            delete this._hashTable[removedKey];

            this._count -= 1;
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */