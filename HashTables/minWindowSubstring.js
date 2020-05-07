/**
 * Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(searchString, t) {
    let requiredCharacters = buildMappingOfCharactersToOccurrences(t);
    let windowCharacterMapping = {};

    let left = 0;
    let right = 0;

    let totalCharFrequenciesToMatch = Object.keys(requiredCharacters).length;
    let charFrequenciesInWindowThatMatch = 0;

    let minWindowLengthSeenSoFar = Number.MAX_VALUE;
    let minWindow = "";

    while (right < searchString.length) {
        let characterAtRightPointer = searchString[right];
        addCharacterToHashTableMapping(windowCharacterMapping, characterAtRightPointer);

        let rightCharIsARequirement = characterAtRightPointer in requiredCharacters;
        if (rightCharIsARequirement) {
            let requirementForCharacterMet = requiredCharacters[characterAtRightPointer] === windowCharacterMapping[characterAtRightPointer];
            if (requirementForCharacterMet) {
                charFrequenciesInWindowThatMatch++;
            }
        }

        while (charFrequenciesInWindowThatMatch === totalCharFrequenciesToMatch && left <= right) {
            let characterAtLeftPointer = searchString[left];
            let windowSize = right - left + 1;
            if (windowSize < minWindowLengthSeenSoFar) {
                minWindowLengthSeenSoFar = windowSize;
                minWindow = searchString.substring(left, right + 1);
            }
            windowCharacterMapping[characterAtLeftPointer] = windowCharacterMapping[characterAtLeftPointer] - 1;
            let leftCharIsARequirement = characterAtLeftPointer in requiredCharacters;
            if (leftCharIsARequirement) {
                let characterFailsRequirement = windowCharacterMapping[characterAtLeftPointer] < requiredCharacters[characterAtLeftPointer];
                if (characterFailsRequirement) {
                    charFrequenciesInWindowThatMatch--;
                }
            }
            left++;
        }
        right++;
    }
    return minWindow;
};

var buildMappingOfCharactersToOccurrences = function(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    return map;
}

var addCharacterToHashTableMapping = function(map, char) {
    map[c] = (map[c] || 0) + 1;
}