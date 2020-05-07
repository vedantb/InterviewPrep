/**
 * Given an array A[], write a function that segregates even and odd numbers. The functions should put all even numbers first, and then odd numbers.
 */

/**
 * input = [12,34,45,9,8,90,3]  
 */

var segregateEvenOdd = function(nums) {
    if (!nums) return null;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        while (nums[left] % 2 === 0 && left < right) left++;
        while (nums[right] % 2 === 1 && left < right) right--;
        if (left < right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }

    return nums;
}

/**
 * Time Complexity: O(n) constant amount of processing per entry
 */

console.log(segregateEvenOdd([]));
console.log(segregateEvenOdd([12, 34, 45, 9, 8, 90, 3]));
console.log(segregateEvenOdd([1, 3, 5]));
console.log(segregateEvenOdd([2, 4, 6]));
console.log(segregateEvenOdd([1, 3, 5, 2, 4, 6]));
console.log(segregateEvenOdd([2, 4, 6, 1, 3, 5]));