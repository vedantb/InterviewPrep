/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return "";
    let minLen = Infinity;
    strs.forEach(str => minLen = Math.min(minLen, str.length));

    let low = 1;
    let high = minLen;
    while (low <= high) {
        let middle = Math.floor((low + high) / 2);
        if (isCommonPrefix(strs, middle)) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }
    return strs[0].substring(0, Math.floor((low + high) / 2));
};

let isCommonPrefix = function(strs, len) {
    let str1 = strs[0].substring(0, len);
    for (let i = 1; i < strs.length; i++) {
        if (!strs[i].startsWith(str1)) return false;
    }
    return true;
}