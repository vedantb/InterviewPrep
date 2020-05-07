const threeSum = (A) => {
    A.sort((a, b) => a - b)

    const allThreeSums = [];
    const secondToLastIndex = A.length - 2;

    for (let i = 0; i < secondToLastIndex; i++) {
        if (A[i] > 0) break;
        if (i > 0 && A[i] === A[i - 1]) continue;
        findTwoSum(i, A, allThreeSums);
    }

    return allThreeSums
}

const findTwoSum = (rootIndex, A, allThreeSums) => {
    let left = rootIndex + 1;
    let right = A.length - 1;

    while (left < right) {
        const threeNumberSum = A[rootIndex] + A[left] + A[right];

        if (threeNumberSum === 0) {
            allThreeSums.push([A[rootIndex], A[left], A[right]]);
            while (A[left] === A[left + 1]) left++;
            while (A[right] === A[right - 1]) right--;
            left++;
            right--;
        } else if (threeNumberSum < 0) {
            left++;
        } else {
            right--;
        }
    }
}

// [-4,-1,-1,-1,0,1,2,,2]
/**
 * Learnings - You cannot use a set to prevent storing duplicate arrays in JS.
 * [1,2,3] === [1,2,3] is false since references are different
 */