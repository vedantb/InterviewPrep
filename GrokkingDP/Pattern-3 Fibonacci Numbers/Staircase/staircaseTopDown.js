const countWays = (n) => {
    const dp = [];

    const countWaysRecursive = (n) => {
        // base case, we don't need to take any step, so there is only one way
        if (n === 0) return 1;

        // we can take one step to reach the end, and that is the only way
        if (n === 1) return 1;

        // we can take one step twice or jump two steps to reach at the top
        if (n === 2) return 2;

        if (n in dp) return dp[n];

        // if we take 1 step, we are left with 'n-1' steps;
        const take1Step = countWaysRecursive(n - 1);

        // similarly, if we took 2 steps, we are left with 'n-2' steps;
        const take2Step = countWaysRecursive(n - 2);

        // if we took 3 steps, we are left with 'n-3' steps;
        const take3Step = countWaysRecursive(n - 3);

        dp[n] = take1Step + take2Step + take3Step;

        return dp[n];
    };

    return countWaysRecursive(n);
};

console.log(`Number of ways: ---> ${countWays(3)}`);
console.log(`Number of ways: ---> ${countWays(4)}`);
console.log(`Number of ways: ---> ${countWays(5)}`);
