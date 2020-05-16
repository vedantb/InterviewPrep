/**
 * Given a string, your task is to count how many palindromic substrings in this string.
 * The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let count = 0;
    let dp = []; // dp[i][j] = 1 if substring from si to sj is a palindrome

    // creating a dp table of [s.length][s.length] and initializing with all 0s
    for (let char of s) {
        dp.push(new Array(s.length).fill(0));
    }

    // every single character of the string is a palindrom, so we set the single character
    // entries in the dp table to be 1 and update the count
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = 1;
        count++;
    }

    for (let col = 1; col < s.length; col++) {
        for (let row = 0; row < col; row++) {
            // checking for 2 chracter strings. If both their characters are equal we update the table
            if (row === col - 1 && s[col] === s[row]) {
                dp[row][col] = 1;
                count++;
            } else if (dp[row + 1][col - 1] === 1 && s[col] === s[row]) {
                // else if the substring from bottom left is 1 and both chars are equal
                dp[row][col] = 1;
                count++;
            }
        }
    }
    return count;
};
