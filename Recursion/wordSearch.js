/**
 * Given a 2D board and a word, find if the word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring.
 *  The same letter cell may not be used more than once.
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let noRows = board.length;
    let noCols = board[0].length;

    for (let row = 0; row < noRows; row++) {
        for (let col = 0; col < noCols; col++) {
            if (backtrack(row, col, 0)) return true;
        }
    }

    let backtrack = (row, col, index) => {
        if (index >= word.length) return true;

        if (row < 0 || row === noRows || col < 0 || col === noCols || board[row][col] !== word[index]) {
            return false;
        }

        let result = false;
        board[row][col] = '#';
        let rowOffsets = [0, 1, 0, -1];
        let colOffsets = [1, 0, -1, 0];

        for (let i = 0; i < 4; i++) {
            result = backtrack(row + rowOffsets[i], col + colOffsets[i], index + 1);
            if (result) break;
        }

        board[row][col] = word[index];
        return result;
    }

    return false;
};