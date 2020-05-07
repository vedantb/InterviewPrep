/**
 * Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.
 * It is guaranteed there is at least one word that isn't banned, and that the answer is unique.
 * 
 * Words in the list of banned words are given in lowercase, and free of punctuation.
 * Words in the paragraph are not case sensitive.  The answer is in lowercase.
 */

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.toLowerCase().split(/\W+/);
    const map = {};
    const bannedSet = new Set(banned);

    let maxCount = 0;
    let maxCountWord = "";

    words.forEach(word => {
        if (word && !bannedSet.has(word)) {
            let count = (map[word] || 0) + 1;
            map[word] = count;
            if (count > maxCount) {
                maxCount = count;
                maxCountWord = word;
            }
        }
    });

    return maxCountWord;
};