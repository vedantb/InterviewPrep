/**
 * Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.
 * You have the following 3 operations permitted on a word:
 * Insert a character
 * Delete a character
 * Replace a character
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let dp = [];

    for (let i = 0; i < word1.length + 1; i++) {
        dp.push(new Array(word2.length + 1).fill(0));
    }

    for (let i = 1; i < word1.length + 1; i++) {
        dp[i][0] = i;
    }

    for (let j = 1; j < word2.length + 1; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i < word1.length + 1; i++) {
        for (let j = 1; j < word2.length + 1; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[word1.length][word2.length];
};

console.log(minDistance('zoogeologist', 'zoologicoarchaeologist'));
