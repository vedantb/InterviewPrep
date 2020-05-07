/**
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
 * Each number in candidates may only be used once in the combination.
 */

var combinationSum = function(candidates, target) {
    let combinations = [];
    let combination = [];
    candidates.sort();

    let explore = function(start, target) {
        if (target === 0) {
            combinations.push([...combination]); // YAY! Valid solution found
            return;
        }
        if (target < 0) return; // this is when we lose hope and backtrack :( so sad!

        for (let i = start; i < candidates.length; i++) {

            if (i > start && candidates[i] === candidates[i - 1]) continue;

            // explore all solutions using candidates[i] at least once
            combination.push(candidates[i]);
            explore(i + 1, target - candidates[i]);
            // explore solutions that don't use candidates[i]
            combination.pop();
        }
    }

    explore(0, target);
    return combinations;
};

console.log(combinationSum([2, 3, 6, 7], 7));