/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let dp = [];
    let lps = '';

    if (s.length <= 1) return s;

    // fills the dp table with ""
    for (let char of s) {
        dp.push(new Array(s.length).fill(false));
    }

    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        lps = s[i];
    }

    for (let col = 1; col < s.length; col++) {
        for (let row = col - 1; row >= 0; row--) {
            //substr of length 2 and chars are equal
            if (row === col - 1 && s[col] === s[row]) {
                dp[row][col] = true;
                lps = col + 1 - row > lps.length ? s.substring(row, col + 1) : lps;
            } else if (s[row] === s[col] && dp[row + 1][col - 1]) {
                dp[row][col] = true;
                lps = col + 1 - row > lps.length ? s.substring(row, col + 1) : lps;
            } else {
                dp[row][col] = false;
            }
        }
    }

    return lps;
};

console.log(longestPalindrome('abadd'));
