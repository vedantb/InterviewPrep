## Longest Increasing Subsequence

#### Approach 1 - Brute Force Recursion

The simplest approach is to find all increasing subsequences and then returning the max length of longest increasing subsequence. In order to do this, we make use of a recursive function `lengthofLIS` which returns the length of the LIS possible from the current element onwards. Inside each function call we will consider two cases:

1. The currrent element is larger than the previous element included in the LIS. In this case, we can include the current element in the LIS. Thus, we find out the length of the LIS obtained by including it. Further, we also find out the length of the LIS possible by not including the current element. The value returned by the function is the maximum of two lengths.
2. The current element is smaller than the previous element included in the LIS. In this case, we can't include the current element in the LIS. Thus, we find out only the length of the LIS possible by not including the current element in the LIS, which is returned by the function call.

Time Complexity: O(2 ^ n)
Space Complexity: O(n ^ 2)


#### Approach 2 - Recursion with Memoization

We store the results of the call in a 2d array. `cache[i][j]` represents the length of LIS possible using `nums[i]` as the previous element considered to be included/not included in the LIS, with `nums[j]` as the current element considered to be included in the LIS.

Time Complexity: O(n^2)
Space Complexity: O(n^2)

#### Approach 3 - Dynamic Programming

We will have a cache of `nums.length` and `cache[i]` should represent the longest increasing subsequence till that element.
We initialize the cache to all 1's to start with.
We start iterating (`j`) from element 2 and move it till the end of the array.
For every `j` position we iterate `i` from 0 to `j`. 
If `nums[j]` >= `nums[i]`, we update the cache. `cache[j] = Math.max(cache[j], cache[i] + 1)`.
So if the number at j increases the longest subsequence, we're taking the longest subsequence from the elments before j, adding 1 to it so that the number at j is added and storing it in `cache[j]`.

<br>
<br>

## Longest Common Subsequence

LeetCode Problem:

Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

<br>

Most of the string problems requires a solution that can be accepted in O(N^2) complexity.

``` js
// i = indexing string s1
// j = indexing string s2
for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= m; j++) {
        if(s1[i-1] === s2[j-1]) {
            dp[i][j] = /* code */
        } else {
            dp[i][j] = /* code */
        }
    }
}
```



