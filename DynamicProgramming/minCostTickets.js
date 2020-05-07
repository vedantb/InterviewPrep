/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs, minCost = 0) {
    let last7 = [];
    let last30 = [];
    for (let day of days) {
        while (last7.length !== 0 && last7[0][0] + 7 <= day) last7.shift();
        while (last30.length !== 0 && last30[0][0] + 30 <= day) last30.shift();

        last7.push([day, minCost + costs[1]]);
        last30.push([day, minCost + costs[2]]);
        minCost = Math.min(minCost + costs[0], last7[0] && last7[0][2], last30[0] && last30[0][2]);
    }
    return minCost;
};
