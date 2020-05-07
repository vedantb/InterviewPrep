/**
 * Design a class to find the kth largest element in a stream.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * 
 */

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.root = null;
    this.mK = k;
    for (let i = 0; i < nums.length; i++) {
        this.root = this._insertNode(this.root, nums[i]);
    }
};

KthLargest.prototype._insertNode = function(root, num) {
    if (!root) return new Node(num, 1);

    if (root.val < num) {
        root.right = this._insertNode(root.right, num);
    } else {
        root.left = this._insertNode(root.left, num);
    }
    root.cnt++;
    return root;
}

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.root = this._insertNode(this.root, val);
    return this._searchKth(this.root, this.mK);
};

KthLargest.prototype._searchKth = function(root, k) {
    let m = root.right ? root.right.cnt : 0;
    if (k === m + 1) {
        return root.val;
    }
    if (k <= m) {
        return this._searchKth(root.right, k);
    } else {
        return this._searchKth(root.left, k - m - 1);
    }
}

var Node = function(val, cnt) {
    this.val = val;
    this.cnt = cnt;
    this.left = null;
    this.right = null;
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */