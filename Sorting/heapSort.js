/** HEAP SORT */

let inputLength;

let heapRoot = function(input, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if (left < inputLength && input[left] > input[max]) {
        max = left;
    }

    if (right < inputLength && input[right] > input[max]) {
        max = right;
    }

    if (max !== i) {
        swap(input, i, max);
        heapRoot(input, max);
    }
};

let swap = function(input, indexA, indexB) {
    let temp = input[indexA];
    input[indexA] = input[indexB];
    input[indexB] = temp;
};

let heapSort = function(input) {
    inputLength = input.length;

    for (let i = Math.floor(inputLength / 2); i >= 0; i--) {
        heapRoot(input, i);
    }

    for (let i = inputLength - 1; i > 0; i--) {
        swap(input, 0, i);
        inputLength--;

        heapRoot(input, 0);
    }
}

let arr = [3, 0, 5, -1, 4, 1];
heapSort(arr);
console.log(arr);