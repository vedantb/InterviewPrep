/**
 * Write an algorithm to determine if a number n is "happy".
 * 
 * A happy number is a number defined by the following process: Starting with any positive integer,
 * replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay),
 * or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 * 
 * Return True if n is a happy number, and False if not.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slowPointer = n;
    let fastPointer = getNext(n);

    while (fastPointer !== 1 && slowPointer !== fastPointer) {
        slowPointer = getNext(slowPointer);
        fastPointer = getNext(getNext(fastPointer));
    }

    return fastPointer === 1;
};

var getNext = function(n) {
    let totalSum = 0;
    while (n > 0) {
        let d = n % 10;
        n = Math.floor(n / 10);
        totalSum += d * d;
    }
    return totalSum;
}


// APPROACH 2

var isHappyUsingSet = function(n) {
    let seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }
    return n === 1;
}