/**
 * Given a string, determine if a permutation of the string could form a palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let arr = new Array(128).fill(0);
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s.charCodeAt(i);
        arr[char]++;
        if (arr[char] % 2 === 0) count--;
        else count++;
    }

    return count <= 1;
};