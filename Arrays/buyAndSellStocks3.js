/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete at most two transactions.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let t1Cost = Infinity;
    let t2Cost = Infinity;
    let t1Profit = 0;
    let t2Profit = 0;

    for (index in prices) {
        t1Cost = Math.min(t1Cost, prices[index]);
        t1Profit = Math.max(t1Profit, prices[index] - t1Cost);
        t2Cost = Math.min(t2Cost, prices[index] - t1Profit);
        t2Profit = Math.max(t2Profit, prices[index] - t2Cost);
    }
    return t2Profit;
};

/**
 * Overall, we run an iteration over the sequence of prices.
 * Over the iteration, we calculate 4 variables which correspond to the costs or the profits of each action respectively, as follows:
 * 
 * t1_cost: The minimal cost of buying the stock in transaction #1.
 *          The minimal cost to acquire a stock would be the minimal price value that we have seen so far at each step.
 * t1_profit: The maximal profit of selling the stock in transaction #1.
 *             Actually, at the end of the iteration, this value would be the answer for the first problem in the series
 * t2_cost: the minimal cost of buying the stock in transaction #2, while taking into account the profit gained from the previous transaction #1.
 *          One can consider this as the cost of reinvestment. Similar with t1_cost, we try to find the lowest price so far,
 *          which in addition would be partially compensated by the profits gained from the first transaction.
 * t2_profit: The maximal profit of selling the stock in transaction #2. With the help of t2_cost as we prepared so far,
 *            we would find out the maximal profits with at most two transactions at each step.
 */


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitDP = function(prices) {
    let length = prices.length;
    if (length <= 1) return 0;

    let leftMin = prices[0];
    let rightMax = prices[length - 1];

    let leftProfits = [0];
    let rightProfits = [];
    rightProfits[length - 1] = 0;
    rightProfits[length] = 0;

    for (let i = 1; i < length; i++) {
        leftProfits[i] = Math.max(leftProfits[i - 1], prices[i] - leftMin);
        leftMin = Math.min(leftMin, prices[i]);

        let r = length - i - 1;
        rightProfits[r] = Math.max(rightProfits[r + 1], rightMax - prices[r]);
        rightMax = Math.max(rightMax, prices[r]);
    }

    let maxProfit = 0;
    for (let i = 0; i < length; i++) {
        maxProfit = Math.max(maxProfit, leftProfits[i] + rightProfits[i + 1]);
    }

    return maxProfit;
};