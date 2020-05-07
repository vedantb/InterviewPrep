class MaxHeap {

    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent] > this.heap[idx]) break;
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

            if (rightChild < heapSize && this.heap[leftChild] < this.heap[rightChild]) {
                if (this.heap[idx] >= this.heap[rightChild]) break;
                [this.heap[rightChild], this.heap[idx]] = [this.heap[idx], this.heap[rightChild]];
                idx = rightChild;
            } else {
                if (this.heap[idx] >= this.heap[leftChild]) break;
                [this.heap[leftChild], this.heap[idx]] = [this.heap[idx], this.heap[leftChild]];
                idx = leftChild;
            }
        }

        return valToReturn;
    }
}

export default MaxHeap;

let test = new MaxHeap();
test.push(5);
console.log(test);
test.push(10);
console.log(test);
test.push(15);
console.log(test);
test.push(6);
console.log(test);
test.pop();
console.log(test);