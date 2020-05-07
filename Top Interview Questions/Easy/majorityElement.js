/**
 * Given an array of size n, find the majority element.
 * The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate;

    nums.forEach(function(num) {
        if (count === 0) candidate = num;
        count += (num === candidate) ? 1 : -1;
    });

    return candidate;
};