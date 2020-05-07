/**
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];

    for (let rowNum = 0; rowNum < numRows; rowNum++) {
        let row = [];
        row[0] = 1;
        row[rowNum] = 1;

        for (let j = 1; j < rowNum; j++)
            row[j] = result[rowNum - 1][j - 1] + result[rowNum - 1][j];

        result.push(row);
    }

    return result;
};