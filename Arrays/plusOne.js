/**
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) digits[i] = 0;
        else {
            digits[i]++;
            return digits;
        }
    }

    digits.unshift(1);
    return digits;
};

/**
 * LEARNINGS - The JS unshift method adds to the beginning of the array and returns the new length of the array.
 * So you cannot use digits.unshift(1) since it will return the new length of the array. You need to unshift and then return
 * the array itself.
 */