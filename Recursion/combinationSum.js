/**
 * Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
 * 
 * The same repeated number may be chosen from candidates unlimited number of times.
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let combinations = [];
    let combination = [];

    let explore = function(start, target) {
        if (target === 0) {
            combinations.push([...combination]); // YAY! Valid solution found
            return;
        }
        if (target < 0) return; // this is when we lose hope and backtrack :( so sad!

        for (let i = start; i < candidates.length; i++) {
            // explore all solutions using candidates[i] at least once
            combination.push(candidates[i]);
            explore(i, target - candidates[i]);
            // explore solutions that don't use candidates[i]
            combination.pop();
        }
    }

    explore(0, target);
    return combinations;
};

console.log(combinationSum([2, 3, 6, 7], 7));