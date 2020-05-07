/**
 * Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.
 * 
 * If there is no such window in S that covers all characters in T, return the empty string "".
 * If there are multiple such minimum-length windows, return the one with the left-most starting index.
 */


/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindowSubsequnce = function(S, T) {
    let sIndex = 0;
    let tIndex = 0;
    let sLen = S.length;
    let tLen = T.length;

    let result = '';
    let subStringLen = Number.MAX_VALUE;

    // until all characters of S have been iterated
    while (sIndex < sLen) {
        // the current character of S matches the current character of the pattern T
        if (S[sIndex] === T[tIndex]) {
            tIndex++; // advance the pattern pointer

            //all of patterns characters have been matched
            if (tIndex === tLen) {
                var end = sIndex + 1; // index aftter the last matched character
                tIndex--; // move this pointer back to last matched pattern character

                while (tIndex >= 0) {
                    if (S[sIndex] === T[tIndex]) tIndex--;
                    sIndex--;
                }

                sIndex++; // move S pointer to the first match index
                tIndex++; //  move T pointer to the first match index
                if (end - sIndex < subStringLen) {
                    subStringLen = end - sIndex;
                    result = S.substring(sIndex, end);
                }
            }
        }
        sIndex++; // advance S Pointer
    }

    return subStringLen === Number.MAX_VALUE ? '' : result;
};