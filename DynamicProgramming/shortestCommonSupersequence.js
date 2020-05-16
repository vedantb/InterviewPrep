/**
 * Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences.
 * If multiple answers exist, you may return any of them.
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
    let dp = [];

    for (let i = 0; i < str2.length + 1; i++) {
        dp.push(new Array(str1.length + 1).fill(''));
    }

    for (let i = 1; i < str2.length + 1; i++) {
        dp[i][0] = str2.substring(0, i);
    }
    for (let j = 1; j < str1.length + 1; j++) {
        dp[0][j] = str1.substring(0, j);
    }

    for (let i = 1; i <= str2.length; ++i) {
        for (let j = 1; j <= str1.length; ++j) {
            if (str2[i - 1] === str1[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + str2[i - 1];
            } else {
                dp[i][j] =
                    dp[i - 1][j].length > dp[i][j - 1].length ? dp[i][j - 1] + str1[j - 1] : dp[i - 1][j] + str2[i - 1];
            }
        }
    }

    return dp[str2.length][str1.length];
};

console.log(shortestCommonSupersequence('abac', 'cab'));
