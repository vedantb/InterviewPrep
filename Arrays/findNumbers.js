/**
 * Given an array nums of integers, return how many of them contain an even number of digits.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    nums.forEach(num => {
        if (num.toString().length % 2 === 0) count++;
    })

    return count;
};

var findNumbersAlt = function(nums) {
    return nums.filter(n => n.toString().length % 2 === 0).length;
}