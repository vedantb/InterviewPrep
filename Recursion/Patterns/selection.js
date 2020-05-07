let combinations = function(n) {
    let results = [];
    combinationsHelper(n, 0, results, []);
    return results;
}

let combinationsHelper = function(n, i, results, path) {
    if (i === n.length) {
        results.push(path);
        return;
    }

    let pathWithCurrent = [...path];
    pathWithCurrent.push(n[i]);

    // Find all combinations that exclude current item
    combinationsHelper(n, i + 1, results, path);

    // find all combinations that include current item
    combinationsHelper(n, i + 1, results, pathWithCurrent);
}

/** TESTING */
console.log(combinations([1, 2, 3]));