/**
 * Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    let longestLength = 1;
    let dp = [];

    // fills the dp table with 0's
    for (let char of s) {
        dp.push(new Array(s.length).fill(0));
    }

    // initializes table to 1 since longest substring with the character itself is 1
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = 1;
    }

    for (let col = 1; col < s.length; col++) {
        for (let row = col - 1; row >= 0; row--) {
            // this is when substring is of length 2 and both chars are equal, then length is 2 and we update the table
            if (row === col - 1 && s[col] === s[row]) {
                dp[row][col] = 2;
                longestLength = 2;
            } else if (s[col] === s[row]) {
                // if length is more than 2 and both chars are equal, we take the length of longest substring with both of them removed
                // and add 2 (for the two chracters) to the dp table
                dp[row][col] = dp[row + 1][col - 1] + 2;
                longestLength = Math.max(longestLength, dp[row][col]);
            } else {
                // if the chars are different, we take the max of longest substr when either one of them isn't part of it
                dp[row][col] = Math.max(dp[row][col - 1], dp[row + 1][col]);
                longestLength = Math.max(longestLength, dp[row][col]);
            }
        }
    }

    return longestLength;
};
