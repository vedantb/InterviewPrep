const quicksort = (arr) => {
    quickSortHelper(arr, 0, arr.length - 1);

    return arr;
}

const quickSortHelper = (arr, left, right) => {
    if (left < right) {
        const pivotFinalRestingPosition = partition(arr, left, right);

        quickSortHelper(arr, left, pivotFinalRestingPosition - 1);
        quickSortHelper(arr, pivotFinalRestingPosition + 1, right);
    }
}

const partition = function(arr, left, right) {
    const pivot = arr[right];

    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, right);

    return i + 1;
}

const swap = (arr, first, second) => {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}