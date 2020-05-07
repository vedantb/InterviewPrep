/**
 * Implement strStr().
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

var primeBase = 31;

function searchRabinKarp(text, str) {
    let matches = [];

    let hashStr = hashFromTo(str, 0, str.length);
    let hashTextPart = hashFromTo(text, 0, str.length);

    let primeToPower = Math.pow(primeBase, str.length);
    let maxIndexForPotentialMatch = text.length - str.length;

    for (let i = 0; i <= maxIndexForPotentialMatch; i++) {
        if (hashTextPart === hashStr) {
            if (matchesAtIndex(i, text, str)) matches.push(i);
        }
        hashTextPart = primeBase * hashTextPart - primeToPower * text.charCodeAt(i) + text.charCodeAt(i + str.length);
    }

    return matches;
}

function matchesAtIndex(index, text, str) {
    var matches = true;

    for (var j = 0; j < str.length; j++) {
        if (text[index + j] !== str[j]) {
            matches = false;
            break;
        }
    }
    return matches;
}

function hashFromTo(str, from, to) {
    var hash = 0;
    for (var i = from; i < to && i < str.length; i++) {
        hash = primeBase * hash + str.charCodeAt(i);
    }
    return hash;
}