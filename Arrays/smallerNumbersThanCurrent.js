/**
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
 * That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
 * Return the answer in an array.
 * 
 * e.g. Input: nums = [8,1,2,2,3] Output: [4,0,1,1,3]
 * e.g. Input: nums = [7,7,7,7] Output: [0,0,0,0]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {

    // 1. slice is used just to get a shallow iterable copy of nums
    // 2. nums is then sorted in ascening order
    // 3. For each value in sorted nums we generate an array of [val,index] for the map.
    // 4. we reverse this and store in the map. It is reversed so that in case of duplicates
    //      the smallest value is stored in the map at the end;
    const map = new Map(
        nums.slice().sort((a, b) => a - b).map((val, idx) => [val, idx]).reverse()
    );
    return nums.map(n => map.get(n));
};

/**
 * LEARNINGS: 
 * slice -  Array.prototype.slice() can be used without args to create a shallow iterable copy of the array
 * sort - the JS sory converts its elements to strings and then sorts it. To sort integers we need to ALWAYS
 * provide a comparator function.
 * map - The map constructor takes an iterable which can be an array whose elements are key value pairs
 * e.g. [[1,'one'],[2,'two']]. Each key value pair is added to the map
 */