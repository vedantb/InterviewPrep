/**
 * Heaps
 * 
 * left child = i*2
 * right child = i*2 + 1
 */

let minHeap = function() {
    let heap = [null];

    this.insert = function(num) {
        heap.push(num);
        if (heap.length > 2) {
            let idx = heap.length - 1;
            let parentIdx = Math.floor(idx / 2);
            while (heap[idx] < heap[parentIdx]) {
                if (idx >= 1) {
                    [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]];
                    if (parentIdx > 1) {
                        idx = parentIdx;
                    } else {
                        break;
                    }
                }
            }
        }
    };

    this.remove = function() {
        let smallest = heap[1];
        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);
            if (heap.length === 3) {
                if (heap[1] > heap[2])[heap[1], heap[2]] = [heap[2], heap[1]];
                return smallest;
            }
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
                if (heap[left] < heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * i;
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * i + 1;
                }
                left = 2 * i;
                right = 2 * i + 1;
                if (heap[left] === undefined || heap[right] === undefined) {
                    break;
                }
            }
        } else if (heap.length === 2) {
            heap.splice(1, 1);
        } else {
            return null;
        };
        return smallest;
    };

    this.sort = function() {
        let result = new Array();
        while (heap.length > 1) {
            result.push(this.remove());
        };
        return result;
    }


}