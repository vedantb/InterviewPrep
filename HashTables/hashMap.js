/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this._keys = [];
    this._vals = [];
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    if (this._keys[key]) {
        this._vals[this._keys[key]] = value;
    } else {
        this._vals.push(value);
        this._keys[key] = this._vals.length - 1;
    }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    if (this._keys[key]) {
        return this._vals[this._keys[key]];
    }
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    if (this._keys[key]) {
        this._vals[this._keys[key]] = undefined;
        this._keys[key] = undefined;
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */