/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N, memo) {
    memo = memo || new Map();

    if (memo.has(N)) return memo.get(N);
    if (N < 2) return N;

    memo.set(N, fib(N - 1, memo) + fib(N - 2, memo));
    return memo.get(N);
};