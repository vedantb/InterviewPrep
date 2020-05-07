/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let powerSet = []; // stores all subsets
    let subset = []; // temp subset which will be updated as recursive function executes

    let backtrack = function(start) {
        powerSet.push([...subset]);

        for (let i = start; i < nums.length; i++) {
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

console.log(subsets([1, 2, 3]));