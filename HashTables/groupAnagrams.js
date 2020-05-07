/**
 * Given an array of strings, group anagrams together.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};

    for (let str of strs) {
        const key = [...str].sort().join('');
        if (!map[key]) map[key] = [];
        map[key].push(str);
    }

    return Object.values(map);
};

var groupAnagramsFasr = function(strs) {
    if (strs.length === 0) return [];

    const result = new Map();
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 107];

    const getKey = str => {
        let key = 1;
        for (let i = 0; i < str.length; i++) {
            key = primes[str.charCodeAt(i) - 97] * key;
        }
    };

    strs.forEach(str => {
        let key = getKey(str);
        if (result.has(key)) {
            result.get(key).push(str);
        } else {
            result.set(key, [str]);
        }
    });

    return [...result.values()];
}