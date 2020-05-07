/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReach = 0;
    let goal = nums.length - 1;

    for (let i = 0; i <= maxReach && maxReach < goal; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return maxReach >= goal;
};

/**
 * For each element in the array we're calculating at this point what is the furthest we can reach.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */