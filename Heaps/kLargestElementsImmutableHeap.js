/**
 * Given a max-heap in array representation, return the k largest elements in the heap without performing explicit removals
 * from the max-heap (the heap is immutable).
 */

let kLargestInImmutableHeap = function(heap, k) {
    if (k <= 0) return [];

    let kLargest = [];
    let candidates = new MaxHeap();
    console.log(candidates, '3');
    candidates.push({
        value: heap[0],
        index: 0
    });

    for (let i = 0; i < k; i++) {
        let candidate = candidates.pop();
        kLargest.push(candidate.value);

        let leftChildIndex = 2 * candidate.index + 1;
        if (leftChildIndex < heap.length) {
            candidates.push({
                value: heap[leftChildIndex],
                index: leftChildIndex
            });
        }

        let rightChildIndex = 2 * candidate.index + 2;
        if (rightChildIndex < heap.length) {
            candidates.push({
                value: heap[rightChildIndex],
                index: rightChildIndex
            })
        }
    }

    return kLargest;
};

class MaxHeap {

    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent].value > this.heap[idx].value) break;
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

            if (rightChild < heapSize && this.heap[leftChild].value < this.heap[rightChild].value) {
                [this.heap[rightChild], this.heap[idx]] = [this.heap[idx], this.heap[rightChild]];
                idx = rightChild;
            } else {
                if (this.heap[idx].value >= this.heap[leftChild].value) break;
                [this.heap[leftChild], this.heap[idx]] = [this.heap[idx], this.heap[leftChild]];
                idx = leftChild;
            }
        }

        return valToReturn;
    }
}

console.log(kLargestInImmutableHeap([17, 7, 16, 2, 3, 15, 4], 4));