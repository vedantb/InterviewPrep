let longestSubarrayWithDistinctEntries = function(arr) {
    let mostRecentOccurrence = {};
    let longestDupFreeSubarrayStartIdx = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let dupIdx;
        if (arr[i] in mostRecentOccurrence) {
            dupIdx = mostRecentOccurrence[arr[i]];
        }
        mostRecentOccurrence[arr[i]] = i;

        if (dupIdx !== undefined) {
            if (dupIdx >= longestDupFreeSubarrayStartIdx) {
                result = Math.max(result, i - longestDupFreeSubarrayStartIdx);
                longestDupFreeSubarrayStartIdx = dupIdx + 1;
            }
        }
    }
    result = Math.max(result, arr.length - longestDupFreeSubarrayStartIdx);
    return result;
}

console.log(longestSubarrayWithDistinctEntries(['f', 's', 'f', 'e', 't', 'w', 'e', 'n', 'w', 'e']));