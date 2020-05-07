/**
 * You have a set of tiles, where each tile has one letter tiles[i] printed on it. 
 * Return the number of possible non-empty sequences of letters you can make.
 */

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const allPermutations = [];
    const used = new Set();
    tiles = tiles.split('').sort().join('');

    const backtrack = (currentString) => {
        if (currentString.length > 0) {
            allPermutations.push(currentString);
        }

        /**
         * Every stack frame of this function call represents the expression of trying (almost) all items in every "slot" in the array.
         * The recursion stops when we are choosing on 1 past the final "slot"
         */
        for (let i = 0; i < tiles.length; i++) {
            if (used.has(i)) continue;
            const choice = tiles[i];
            if (i > 0 && choice === tiles[i - 1] && !used.has(i - 1)) continue;

            // 1. Choose - Add the item to current permutation
            currentString += choice;
            used.add(i);

            // 2. Explore - Recurse on the choice
            backtrack(currentString);

            // 3. Unchoose - We have returned from the recursion, remove the choice we made.
            // The next iteration will try another item in the "slot" we are working on
            currentString = currentString.substring(0, currentString.length - 1);
            used.delete(i);
        }

    };

    backtrack("");
    return allPermutations;
};

console.log(numTilePossibilities("cdc"));