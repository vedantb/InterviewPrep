/**
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse();
};

/**
 *  let's use this problem to discuss two things:
 *  1. Does in-place mean constant space complexity?
 *  2. Two pointers approach
 * 
 *  Approach 1.  Recursion, In-Place, O(N) Space
 *  Does in-place mean constant space complexity?
 *  No. By definition, an in-place algorithm is an algorithm which transforms input using no auxiliary data structure.
 *  The tricky part is that space is used by many actors, not only by data structures. The classical example is to use recursive function without any auxiliary data structures.
 *  Is it in-place? Yes.
 *  Is it constant space? No, because of recursion stack.
 * 
 *  Let's implement recursive function helper which receives two pointers, left and right, as arguments.
 *  Base case: if left >= right, do nothing.
 *  Otherwise, swap s[left] and s[right] and call helper(left + 1, right - 1).
 */

var reverseStringRecursive = function(s) {

    let helper = function(s, left, right) {
        if (left >= right) return;
        let temp = s[left];
        s[left] = s[right];
        left++;
        s[right--] = temp;
        helper(s, left, right);
    }

    helper(s, 0, s.length - 1);
}

let str = ['a', 'b', 'c'];
reverseStringRecursive(str);
console.log(str);


/**
 * Approach 2: Two Pointers, Iteration O(1) space
 * In this approach, two pointers are used to process two array elements at the same time.
 * Usual implementation is to set one pointer in the beginning and one at the end and then to move them until they both meet.
 * 
 * Sometimes one needs to generalize this approach in order to use three pointers, like for classical Sort Colors problem.
 * 
 * Algorithm:
 * 1. Set pointer left at index 0, and pointer right at index n - 1, where n is a number of elements in the array.
 * 2. While left < right:
 *  2a. Swap s[left] and s[right].
 *  2b. Move left pointer one step right, and right pointer one step left.
 */
var reverseStringTwoPointers = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let temp = s[left];
        s[left++] = s[right];
        s[right--] = temp;
    }
};