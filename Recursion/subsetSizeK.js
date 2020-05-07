/**
 * @param {number} n
 * @param {number} k
 * @return {Array<Array<number>>}
 */
var subsetsSizeK = function(n, k) {
    let powerSet = []; // stores all subsets
    let subset = []; // temp subset which will be updated as recursive function executes

    let backtrack = function(start) {
        if (subset.length === k) {
            powerSet.push([...subset]);
            return;
        }

        for (let i = start; i < n; i++) {
            // recording all subsets that include nums[i];
            subset.push(i + 1);
            backtrack(i + 1);

            //remove nums[i] from the present subset and move further to explore subsets that don't contain nums[i]
            subset.pop();
        }
    };
    backtrack(0);
    return powerSet;
};

console.log(subsets(3, 2));