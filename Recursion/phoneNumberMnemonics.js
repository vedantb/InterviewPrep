/**
 * Given a string digits representing a phone number, return all possible character arrangements that can result from the number.
 * 
 */

const digitToPossibleLetters = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

/**
 * @param {string} digits
 * @return {Array<string>}
 */
const letterCombinations = (digits) => {
    if (digits.length === 0) return [];

    const mnemonics = [];
    let partialMnemonic = "";

    let backtrack = function(start) {
        if (start === digits.length) {
            mnemonics.push(partialMnemonic);
            return;
        }
        const digitCharacter = digits.charAt(start);
        const digitAsInt = parseInt(digitCharacter);
        const letters = digitToPossibleLetters[digitAsInt];

        for (let i = 0; i < letters.length; i++) {
            let possibleLetter = letters[i];
            partialMnemonic += possibleLetter;

            backtrack(start + 1);

            partialMnemonic = partialMnemonic.substring(0, partialMnemonic.length - 1);
        }

    };

    backtrack(0);
    return mnemonics;
}

console.log(letterCombinations("22"));