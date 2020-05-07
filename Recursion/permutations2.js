/**
 * Given an array arr, return all the permutations of the array.
 */

/**
 * @param {Array<number>} originalArray
 * @return {Array<Array<number>>}
 */
const permute = (nums) => {
    const allPermutations = [];
    const currentPermutation = [];
    const used = new Set();
    nums.sort((a, b) => a - b);

    const backtrack = () => {
        if (currentPermutation.length > 0) {
            allPermutations.push([...currentPermutation]);
        }

        /**
         * Every stack frame of this function call represents the expression of trying (almost) all items in every "slot" in the array.
         * The recursion stops when we are choosing on 1 past the final "slot"
         */
        for (let i = 0; i < nums.length; i++) {
            if (used.has(i)) continue;
            const choice = nums[i];
            if (i > 0 && choice === nums[i - 1] && !used.has(i - 1)) continue;

            // 1. Choose - Add the item to current permutation
            currentPermutation.push(choice);
            used.add(i);

            // 2. Explore - Recurse on the choice
            backtrack();

            // 3. Unchoose - We have returned from the recursion, remove the choice we made.
            // The next iteration will try another item in the "slot" we are working on
            currentPermutation.pop();
            used.delete(i);
        }

    };

    backtrack();
    return allPermutations;
}

console.log(permute([1, 1, 3]));