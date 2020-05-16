const countWays = (n) => {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    return dp[n];
};

console.log(`Number of ways: ---> ${countWays(3)}`);
console.log(`Number of ways: ---> ${countWays(4)}`);
console.log(`Number of ways: ---> ${countWays(5)}`);
