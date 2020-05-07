/**
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];

    const helper = (current, index) => {
        if (current.length === k) {
            result.push([...current]);
            return;
        }
        for (let i = index + 1; i < n; i++) {
            current.push(i + 1);
            helper(current, i)
            current.pop();
        }
    }
    helper([], -1);
    return result;
};