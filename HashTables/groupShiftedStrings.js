/**
 * Given a string, we can "shift" each of its letter to its successive letter,
 * for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:
 * "abc" -> "bcd" -> ... -> "xyz"
 * 
 * Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.
 * 
 * Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
 * Output: 
 * [
 *  ["abc","bcd","xyz"],
 *  ["az","ba"],
 *  ["acef"],
 *  ["a","z"]
 * ]
 */

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    if (strings.length < 1) return [];

    let map = {};

    for (let str of strings) {
        let key = '';
        for (let i = 1; i < str.length; i++) {
            let diff = str.charCodeAt(i) - str.charCodeAt(i - 1);
            if (diff < 0) diff += 26;
            key += diff;
        }

        if (map[key]) {
            map[key].push(str);
        } else {
            map[key] = [str];
        }
    }
    return Object.values(map);
};