/**
 * @param {Array<ListNode>} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {

    let minHeap = new MinHeap();
    let result = new ListNode(0);
    let tail = result;
    lists.forEach(listNode => {
        minHeap.push(listNode);
    });

    while (minHeap.heap.length >= lists.length) {
        let minNode = minHeap.pop();
        tail.next = minNode;
        tail = minNode;
        if (minNode.next) {
            minHeap.push(minNode.next);
        }
        tail.next = null;
    }

    while (minHeap.heap.length > 0) {
        tail.next = minHeap.pop();
        tail = tail.next;
        tail.next = null;
    }

    return result.next;
}

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null; // Points to another ListNode object
    }
}

class MinHeap {

    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent].val < this.heap[idx].val) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }

    pop() {
        if (this.heap.length === 0) return;

        let valToReturn = this.heap[0];

        if (this.heap.length === 1) {
            this.heap.pop();
            return valToReturn;
        }

        this.heap[0] = this.heap.pop();

        let idx = 0;
        let heapSize = this.heap.length;
        while (idx < Math.floor(heapSize / 2)) {
            let leftChild = 2 * idx + 1;
            let rightChild = 2 * idx + 2;

            if (rightChild < heapSize && this.heap[leftChild].val > this.heap[rightChild].val) {
                [this.heap[rightChild], this.heap[idx]] = [this.heap[idx], this.heap[rightChild]];
                idx = rightChild;
            } else {
                if (this.heap[idx].val <= this.heap[leftChild].val) break;
                [this.heap[leftChild], this.heap[idx]] = [this.heap[idx], this.heap[leftChild]];
                idx = leftChild;
            }
        }

        return valToReturn;
    }
}

let a1 = new ListNode(-1);
let a11 = new ListNode(3);
a1.next = a11;

let b1 = new ListNode(2);
let b11 = new ListNode(3);
b1.next = b11;

let c = new ListNode(6);

console.log(mergeKLists([a1, b1, c]).next.next, 'result');

/**
 * [
 * [-3,2,2],
 * [-9],
 * [-10,-5,-4,-2,-1,1,3,4],
 * [-10,-9,-8,3,4],
 * [-5,-3,3,4],
 * [-9,-8,-5,-4,-2,-1,3]
 * ]
 */