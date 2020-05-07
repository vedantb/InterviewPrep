/**
 * Given a square array of integers A, we want the minimum sum of a falling path through A.
 * A falling path starts at any element in the first row, and chooses one element from each row.
 * The next row's choice must be in a column that is different from the previous row's column by at most one
 */

/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function (A) {
    let cache = new Array(A.length).fill(0).map(() => new Array(A[0].length).fill(0));

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (i === 0) {
                cache[i][j] = A[i][j];
            } else {
                cache[i][j] =
                    A[i][j] +
                    Math.min(
                        cache[i - 1][j - 1] || Infinity,
                        Math.min(cache[i - 1][j] || Infinity, cache[i - 1][j + 1] || Infinity)
                    );
            }
        }
    }

    let answer = Infinity;
    for (let x of cache[cache.length - 1]) {
        answer = Math.min(answer, x);
    }
    return answer;
};
