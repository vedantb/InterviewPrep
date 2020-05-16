/**
 * Given a string S and a string T, count the number of distinct subsequences of S which equals T.
 * A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing
 * the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinctRecursiveNaive = function (s, t) {
    let m = s.length;
    let n = t.length;

    let numDistinctHelper = (i, j) => {
        // Base Case
        if (i === m || j === n || m - i < n - j) {
            return j === n ? 1 : 0;
        }

        //always calculate this for both cases
        let ans = numDistinctHelper(i + 1, j);

        if (s.charAt(i) === t.charAt(j)) {
            ans += numDistinctHelper(i + 1, j + 1);
        }
        return ans;
    };

    return numDistinctHelper(0, 0);
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    let dp = [];

    for (let i = 0; i < s.length + 1; i++) {
        dp.push(new Array(t.length + 1).fill(0));
        dp[i][0] = 1;
    }

    for (let i = 1; i <= s.length; ++i) {
        for (let j = 1; j <= t.length; ++j) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[s.length][t.length];
};

console.log(numDistinct('rabbbit', 'rabbit'));
