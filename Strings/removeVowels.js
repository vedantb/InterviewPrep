/**
 * Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
 */

/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return S.split('').filter(str => !vowels.includes(str)).join('');
};