/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * Example: Input [2,2,1] Output: 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    nums.forEach(function(num) {
        result ^= num;
    })
    return result;
};