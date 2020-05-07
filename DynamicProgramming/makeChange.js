let makeChangeNaive = function (c) {
    if (c === 0) return 0;

    let minCoins = Infinity;
    const COINS = [10, 6, 1];

    for (coin of COINS) {
        if (c - coin >= 0) {
            let currMinCoins = makeChangeNaive(c - coin);
            if (currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    }
    return minCoins + 1;
};

let makeChangeDP = function (c) {
    let cache = [0];
    return makeChangeHelper(c, cache);
};

let makeChangeHelper = (c, cache) => {
    if (cache[c] >= 0) return cache[c];

    let minCoins = Infinity;
    const COINS = [10, 6, 1];

    for (coin of COINS) {
        if (c - coin >= 0) {
            let currMinCoins = makeChangeHelper(c - coin, cache);
            if (currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    }
    cache[c] = minCoins + 1;
    return cache[c];
};

let makeChangeIterative = function (c) {
    let cache = new Array(c + 1).fill(0);
    const COINS = [10, 6, 1];

    for (let i = 1; i <= c; i++) {
        let minCoins = Infinity;

        // Try removing each coin from the total and see which requires fewest extra coins
        for (let coin of COINS) {
            if (i - coin >= 0) {
                let currCoins = cache[i - coin] + 1;
                if (currCoins < minCoins) {
                    minCoins = currCoins;
                }
            }
        }
        cache[i] = minCoins;
    }
    return cache[c];
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChangeLeetCode = function (coins, amount) {
    let max = amount + 1;
    let cache = new Array(amount + 1).fill(max);
    cache[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                cache[i] = Math.min(cache[i], cache[i - coins[j]] + 1);
            }
        }
    }
    return cache[amount] > amount ? -1 : cache[amount];
};

console.log(makeChangeNaive(25));
console.log(makeChangeDP(25));
console.log(makeChangeIterative(25));
