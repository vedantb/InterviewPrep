/**
 * Given two strings text1 and text2, return the length of their longest common subsequence.
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));
    let n = text1.length;
    let m = text2.length;

    for (let i = 1; i <= n; ++i) {
        for (let j = 1; j <= m; ++j) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[text1.length][text2.length];
};
