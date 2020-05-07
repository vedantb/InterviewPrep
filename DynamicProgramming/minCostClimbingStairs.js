/**
 * On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
 *
 * Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top
 * of the floor, and you can either start from the step with index 0, or the step with index 1.
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let val1 = cost[0];
  let val2 = cost[1];
  for (let i = 2; i < cost.length; i++) {
    let currentCost = cost[i] + Math.min(val1, val2);
    val1 = val2;
    val2 = currentCost;
  }
  return Math.min(val1, val2);
};
