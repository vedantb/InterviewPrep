/**
 * Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear
 * exactly twice. Find the two elements that appear only once.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let bitmask = 0;
    nums.forEach((num) => {
        bitmask ^= num;
    });

    let diff = bitmask & (-bitmask);
    let x = 0;
    nums.forEach(num => {
        if ((num & diff) !== 0) x ^= num;
    });
    return [x, bitmask ^ x];
};