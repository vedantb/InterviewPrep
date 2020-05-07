/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let length = nums.length;
  if (length <= 1) return length;

  let i = 0;
  for (let j = 1; j < length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
