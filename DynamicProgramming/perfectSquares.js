/**
 * Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let dp = new Array(n + 1).fill(Infinity);

    dp[0] = 0;
    let maxSquareIndex = Math.floor(Math.sqrt(n)) + 1;
    let squareNums = new Array(maxSquareIndex);
    for (let i = 1; i < maxSquareIndex; i++) {
        squareNums[i] = i * i;
    }

    for (let i = 1; i <= n; i++) {
        for (let s = 1; s < maxSquareIndex; s++) {
            if (i < squareNums[s]) break;
            dp[i] = Math.min(dp[i], dp[i - squareNums[s]] + 1);
        }
    }
    return dp[n];
};
