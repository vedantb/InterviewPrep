/**
 * In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order.
 * The order of the alphabet is some permutation of lowercase letters.
 * 
 * Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if
 * the given words are sorted lexicographicaly in this alien language.
 */

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {

    let orderMap = {};
    // Place the order in the orderMap with the letter as the key and the index it appears as the value
    for (let index = 0; index < order.length; index++) {
        const orderCharacter = order[index]
        orderMap[orderCharacter] = index;
    }


    for (let index = 1; index < words.length; index++) {

        const prevWord = words[index - 1];
        const currWord = words[index];
        const firstLetterOfPrevWord = prevWord[0];
        const firstLetterOfCurrWord = currWord[0];

        // If the first letter of current and previous words and not in order return false
        if (orderMap[firstLetterOfPrevWord] > orderMap[firstLetterOfCurrWord]) {
            return false;
        }

        /* If the first letter of current and previous words are equal, we loop through and continue
         * checking subsequent letters of the two words till we confirm if they are in order or not
         */
        if (orderMap[firstLetterOfPrevWord] === orderMap[firstLetterOfCurrWord]) {
            for (let letterIndex = 1; letterIndex < prevWord.length; letterIndex++) {
                //if previous letters are the same and current word is shorter than the previous word, we return false
                if (letterIndex > currWord.length) return false;

                const orderOfPrevLetter = orderMap[prevWord[letterIndex]];
                const orderOfCurrentLetter = orderMap[currWord[letterIndex]]

                // If the letters are still the same, we continue till we find a difference
                if (orderOfPrevLetter === orderOfCurrentLetter) continue;

                // if the letters are out of order we return false
                if (orderOfPrevLetter > orderOfCurrentLetter) return false;
            };
        }

        // If the first letters are not equal and ordered correctly, we continue to the next two words
    }
    return true;
};