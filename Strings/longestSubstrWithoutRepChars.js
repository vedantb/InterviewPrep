/**
 * Given a string, find the length of the longest substring without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let map = {};
    let ans = 0;
    for (let j = 0, i = 0; j < s.length; j++) {
        if (map[s[j]]) {
            i = Math.max(map[s[j]], i);
        }
        ans = Math.max(ans, j - i + 1);
        map[s[j]] = j + 1;
    }
    return ans;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringArray = function(s) {

    let map = new Array(128).fill(0);
    let ans = 0;
    for (let j = 0, i = 0; j < s.length; j++) {
        i = Math.max(map[s.charCodeAt(j)], i);
        ans = Math.max(ans, j - i + 1);
        map[s.charCodeAt(j)] = j + 1;
    }
    return ans;
};