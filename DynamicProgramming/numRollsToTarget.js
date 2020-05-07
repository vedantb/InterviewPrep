/**
 * You have d dice, and each die has f faces numbered 1, 2, ..., f.
 * Return the number of possible ways (out of fd total ways) modulo 10^9 + 7 to roll the dice so the sum of the face up numbers equals target.
 */

/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (d, f, target) {
    let dp = [];
    let mathShit = Math.pow(10, 9) + 7;
    if (target === 0 || target > f * d) return 0;
    if (d === 1 && target <= f) return 1;
    for (let i = 0; i <= d; i++) {
        for (let t = 0; t <= target; t++) {
            let sum = 0;
            if (!dp[i]) dp[i] = [];

            if (i === 0 || t === 0) {
                dp[i][t] = 0;
                continue;
            }

            if (t <= f && i === 1) sum++;
            let prev = dp[i - 1];
            if (prev) {
                for (let j = 1; j <= f; j++) {
                    if (prev[t - j]) sum += prev[t - j];
                }
            }

            dp[i][t] = sum % mathShit;
        }
    }

    return dp[d][target] % mathShit;
};
