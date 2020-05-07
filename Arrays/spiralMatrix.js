/**
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 */

let spiralOreder = matrix => {
    let spiralSequence = [];

    if (matrix.length === 0) return spiralSequence;

    let topFence = 0;
    let leftFence = 0;
    let bottomFence = matrix.length - 1;
    let rightFence = matrix[0].length - 1;

    while (topFence <= bottomFence && leftFence <= rightFence) {

        for (let col = leftFence; col <= rightFence; col++) {
            spiralSequence.push(matrix[topFence][col]);
        }
        topFence++;

        for (let row = topFence; row <= bottomFence; row++) {
            spiralSequence.push(matrix[row][rightFence]);
        }
        rightFence--;


        /**
         *  If center is a horizontal line, prevent the bottom from rereading what the
         *  top row already read.
         */
        if (topFence <= bottomFence) {
            for (let col = rightFence; col >= leftFence; col--) {
                spiralSequence.push(matrix[bottomFence][col]);
            }
        }
        bottomFence--;

        /**
         *  If center is a vertical line, prevent the left from rereading what the
         *  right col already read.
         */
        if (leftFence <= rightFence) {
            for (let row = bottomFence; row >= topFence; row--) {
                spiralSequence.push(matrix[row][leftFence]);
            }
        }
        leftFence++;
    }

    return spiralSequence;
}