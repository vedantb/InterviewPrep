let almostSortedArray = (arr, k) => {
    let minHeap = new MinHeap();

    let n = arr.length;

    for (let i = 0; i < k && i < n; i++) {
        minHeap.push(arr[i]);
    }

    let readIndex = k;
    let placementIndex = 0;
    while (readIndex < n) {
        minHeap.push(arr[readIndex]);
        readIndex++;

        arr[placementIndex] = minHeap.pop();
        placementIndex++;
    }

    while (minHeap.heap.length > 0) {
        arr[placementIndex] = minHeap.pop();
        placementIndex++;
    }

    return arr;
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
            if (this.heap[parent] < this.heap[idx]) break;
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

            if (rightChild < heapSize && this.heap[leftChild] > this.heap[rightChild]) {
                if (this.heap[idx] <= this.heap[rightChild]) break;
                [this.heap[rightChild], this.heap[idx]] = [this.heap[idx], this.heap[rightChild]];
                idx = rightChild;
            } else {
                if (this.heap[idx] <= this.heap[leftChild]) break;
                [this.heap[leftChild], this.heap[idx]] = [this.heap[idx], this.heap[leftChild]];
                idx = leftChild;
            }
        }

        return valToReturn;
    }
}

console.log(almostSortedArray([3, 4, 1, 2, 5], 2));