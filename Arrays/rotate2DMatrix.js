/**
 * Given a two-dimensional square matrix (n x n), rotate the matrix 90 degrees to the right (clockwise)
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;

    // transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let tmp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = tmp;
        }
    }

    // reverse every row
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[i][n - j - 1];
            matrix[i][n - j - 1] = tmp;
        }
    }
};

var rotate2 = function(matrix) {
    let size = matrix.length - 1;
    for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {
        for (let i = layer; i < size - layer; i++) {
            let top = matrix[layer][i];
            let right = matrix[i][size - layer];
            let bottom = matrix[size - layer][size - i];
            let left = matrix[size - i][layer];

            matrix[layer][i] = left;
            matrix[i][size - layer] = top;
            matrix[size - layer][size - i] = right;
            matrix[size - i][layer] = bottom;
        }
    }
}