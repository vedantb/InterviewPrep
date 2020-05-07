/**
 * Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent,
 * with the colors in the order red, white and blue
 * 
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 * 
 * Note: You are not suppose to use the library's sort function for this problem.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let zeroRightBoundary = 0;
    let twoLeftBoundary = nums.length - 1;
    let currentElement = 0;
    let temp;

    while (currentElement <= twoLeftBoundary) {
        if (nums[currentElement] === 0) {
            temp = nums[zeroRightBoundary];
            nums[zeroRightBoundary++] = nums[currentElement];
            nums[currentElement++] = temp;
        } else if (nums[currentElement] === 2) {
            temp = nums[currentElement];
            nums[currentElement] = nums[twoLeftBoundary];
            nums[twoLeftBoundary--] = temp;
        } else {
            currentElement++;
        }
    }
};