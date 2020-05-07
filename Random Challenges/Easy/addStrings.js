/**
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let num1DigitIndex = num1.length - 1;
    let num2DigitIndex = num2.length - 1;
    let carry = 0;
    let sum = '';

    while (num1DigitIndex >= 0 || num2DigitIndex >= 0 || carry > 0) {

        const digit1 = num1DigitIndex < 0 ? 0 : parseInt(num1[num1DigitIndex]);
        const digit2 = num2DigitIndex < 0 ? 0 : parseInt(num2[num2DigitIndex]);

        const digitsSum = digit1 + digit2 + carry;

        sum = `${digitsSum % 10}${sum}`;
        carry = Math.floor(digitsSum / 10);

        // add the next two digits
        i--;
        j--;
    }
    return sum;
};