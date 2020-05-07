/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    let row = 0;
    let col = 0;

    const EMPTY_ENTRY = ".";

    let solveSudokuHelper = function(row, col) {
        if (col === board[row].length) {
            col = 0;
            row++;

            if (row === board.length) {
                return true;
            }
        }

        if (board[row][col] !== EMPTY_ENTRY) {
            return solveSudokuHelper(row, col + 1);
        }

        for (let value = 1; value <= board.length; value++) {
            const charToPlace = `${value}`;

            if (canPlaceValue(row, col, board, charToPlace)) {
                board[row][col] = charToPlace;
                if (solveSudokuHelper(row, col + 1)) {
                    return true;
                }
                board[row][col] = EMPTY_ENTRY;
            }
        }
        return false;
    };

    solveSudokuHelper(row, col);
};

let canPlaceValue = function(row, col, board, charToPlace) {
    // check column for placement
    for (let i = 0; i < board.length; i++) {
        if (charToPlace === board[i][col]) return false;
    }

    // check row of placement
    for (let i = 0; i < board[row].length; i++) {
        if (charToPlace === board[row][i]) return false;
    }

    // check region constraints - get size of sub box
    let regionSize = parseInt(Math.sqrt(board.length));

    let verticalBoxIndex = Math.floor(row / regionSize);
    let horizontalBoxIndex = Math.floor(col / regionSize);

    let topLeftOfSubBoxRow = regionSize * verticalBoxIndex;
    let topLeftOfSubBoxCol = regionSize * horizontalBoxIndex;

    for (let i = 0; i < regionSize; i++) {
        for (let j = 0; j < regionSize; j++) {
            if (charToPlace === board[topLeftOfSubBoxRow + i][topLeftOfSubBoxCol + j]) return false;
        }
    }

    return true;
}