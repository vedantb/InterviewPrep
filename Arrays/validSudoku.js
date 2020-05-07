/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowsMap = [];
    let colsMap = [];
    let boxes = [];

    for (let i = 0; i < 9; i++) {
        rowsMap[i] = {};
        colsMap[i] = {};
        boxes[i] = {};
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num !== '.') {
                let n = parseInt(num);
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                rowsMap[i][n] = rowsMap[i][n] ? rowsMap[i][n] + 1 : 1;
                colsMap[j][n] = colsMap[j][n] ? colsMap[j][n] + 1 : 1;
                boxes[boxIndex][n] = boxes[boxIndex][n] ? boxes[boxIndex][n] + 1 : 1;

                if (rowsMap[i][n] > 1 || colsMap[j][n] > 1 || boxes[boxIndex][n] > 1) return false;
            }
        }
    }
    return true;
};