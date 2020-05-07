/**
 * @param {number} n
 * @return {Array<Array<string>>}
 */
const solveNQueens = (n) => {
    const results = [];
    const colPlacements = [];

    let solve = (row) => {
        if (row === n) {
            results.push(generateBoardFromPlacements(colPlacements, n));
            return;
        }

        for (let col = 0; col < n; col++) {
            // Choose
            colPlacements.push(col);
            //Constraint
            if (isValidPlacement(colPlacements)) {
                // Explore
                solve(row + 1);
            }
            //Unchoose
            colPlacements.pop();
        }
    };
    solve(row);
    return results;
}

const isValidPlacement = (colPlacements) => {
    const rowWeAreValidatingOn = colPlacements.length - 1;
    for (let ithQueenRow = 0; ithQueenRow < rowWeAreValidatingOn; ithQueenRow++) {
        const absoluteColumnDistance = Math.abs(colPlacements[ithQueenRow] - colPlacements[rowWeAreValidatingOn]);
        const rowDistance = rowWeAreValidatingOn - ithQueenRow;

        if (absoluteColumnDistance === 0 || absoluteColumnDistance === rowDistance) return false;
    }
    return true;
}

const generateBoardFromPlacements = (colPlacements, n) => {
    const board = [];
    const totalItemsPlaced = colPlacements.length;

    // A row for each queen that we placed
    for (let row = 0; row < totalItemsPlaced; row++) {
        let s = "";
        for (let col = 0; col < n; col++) {
            if (col === colPlacements[row]) {
                s += "Q";
            } else {
                s += "-";
            }
        }

        board.push(s);
    }
    return board;
}