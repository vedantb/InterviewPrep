/**
 * Write a program which takes as input an array and finds the distance between a closest pair of equal entries
 */

var findNearestRepition = function(paragraph) {
    let wordToLatestIndex = {};
    let nearestRepeatedDistance = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < paragraph.length; i++) {
        const word = paragraph[i];
        if (word in wordToLatestIndex) {
            nearestRepeatedDistance = Math.min(nearestRepeatedDistance, i - wordToLatestIndex[word]);
        }
        wordToLatestIndex[word] = i;
    }
    return nearestRepeatedDistance === Number.MAX_SAFE_INTEGER ? -1 : nearestRepeatedDistance;
}

let ans = findNearestRepition(["All", "work", "and", "no", "play", "makes", "for", "no", "work", "no", "fun", "and", "no", "results"]);
console.log("Answer = " + ans);