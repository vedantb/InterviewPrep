/**
 * Count the number of prime numbers less than a non-negative number, n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0;
    let array = []
    for (let i = 2; i < n; i++) {
        if (array[i]) continue;
        else count++;
        for (let j = 2; i * j <= n; j++) {
            array[i * j] = true;
        }
    }
    return count;
};