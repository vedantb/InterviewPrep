/**
 * Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n === 0) return [
        []
    ];
    if (n === 1) return [
        [1]
    ];

    let result = [],
        num = 1;

    let rowStart = 0,
        rowEnd = n - 1,
        colStart = 0,
        colEnd = n - 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {

        // to the right
        for (let i = colStart; i <= colEnd; i++) {
            result[rowStart] = result[rowStart] || [];
            result[rowStart][i] = num;
            num++;
        }
        rowStart++;

        // time to go down
        for (let i = rowStart; i <= rowEnd; i++) {
            result[i] = result[i] || [];
            result[i][colEnd] = num;
            num++;
        }
        colEnd--;

        // to the left
        for (let i = colEnd; i >= colStart; i--) {
            result[rowEnd] = result[rowEnd] || [];
            result[rowEnd][i] = num;
            num++;
        }
        rowEnd--;

        // up we go
        for (let i = rowEnd; i >= rowStart; i--) {
            result[i] = result[i] || [];
            result[i][colStart] = num;
            num++;
        }
        colStart++;
    }
    return result;
};