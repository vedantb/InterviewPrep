/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };

    let res = [];

    let backtrack = function(combination, nextDigits) {
        if (nextDigits.length === 0) {
            res.push(combination);
            return;
        }
        let digit = nextDigits.substring(0, 1);
        let letters = map[digit];
        for (let i = 0; i < letters.length; i++) {
            let letter = letters.substring(i, i + 1);
            backtrack(combination + letter, nextDigits.substring(1));
        }
    };

    backtrack("", digits);
    return res;
};