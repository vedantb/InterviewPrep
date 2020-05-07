/**
 * A "palindromic decomposition" is a splitting of the string into segments such that each segment is a palindrome.
 */

const partition = (s) => {
    const decompositions = [];
    const partialDecomposition = [];

    const backtrack = (workingIndex) => {
        if (workingIndex === s.length) {
            decompositions.push([...partialDecomposition]);
            return;
        }

        for (let i = workingIndex; i < s.length; i++) {
            if (isPalindrome(workingIndex, i, s)) {
                // 1. Choose - Take the snippet & add it to our decomposition 'path'
                const palindromicSnippet = s.substring(workingIndex, i + 1);
                partialDecomposition.push(palindromicSnippet);

                // 2. Explore -  Recurse and advance progress 1 past right bound of palindromicSnippet which is 'i+1'
                backtrack(i + 1);

                // 3. Unchoose - We are done searching, remove the snippet from our 'path'. Next iteration will
                // try another snippet in this stack frame. 
                partialDecomposition.pop();
            }
        }
    }

    backtrack(0);
    return decompositions;
}

const isPalindrome = (left, right, s) => {
    while (left < right) {
        if (s.charAt(left) !== s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(partition('aab'));