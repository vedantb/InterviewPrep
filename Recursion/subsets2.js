/**
 * Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).
 * Note: The solution set must not contain duplicate subsets.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let powerSet = []; // stores all subsets
    let subset = []; // temp subset which will be updated as recursive function executes

    nums.sort();

    let backtrack = function(start) {
        powerSet.push([...subset]);

        for (let i = start; i < nums.length; i++) {

            //skip duplicates
            if (i > start && nums[i] === nums[i - 1]) continue;

            // recording all subsets that include nums[i];
            subset.push(nums[i]);
            backtrack(i + 1);

            //remove nums[i] from the present subset and move further to explore subsets that don't contain nums[i]
            subset.pop();
        }
    };
    backtrack(0);
    return powerSet;
};