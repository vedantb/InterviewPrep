/**
 * Given a set of strings words and a string pattern return a list of all of the strings in words that matches the pattern
 * of the pattern string.
 * 
 * Input: words = ["aa", "bb"] pattern = "cc" 
 * Output: ["aa", "bb"]
 */

/**
 * @param {Array<string>} words
 * @param {string} pattern
 * @return {Array<string>}
 */
const findAndReplacePattern = (words, pattern) => {
    let res = [];
    words.forEach(word => {
        if (word.length !== pattern.length) return;
        let wordMap = {};
        let patternMap = {};
        for (let i = 0; i < word.length; i++) {
            if (!wordMap[word[i]]) wordMap[word[i]] = pattern[i];
            if (!patternMap[pattern[i]]) patternMap[pattern[i]] = word[i];

            if (wordMap[word[i]] !== pattern[i] || patternMap[pattern[i]] !== word[i]) return false;
        }
        res.push(word);
    });
    return res;
}