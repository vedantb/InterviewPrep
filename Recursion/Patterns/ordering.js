let permutations = function(n) {
    var results = [];
    permutationsHelper(n, results, []);
    return results;
}

let permutationsHelper = function(n, results, path) {
    if (n.size === 0) {
        results.push(path);
        return;
    }

    n.forEach(i => {
        n.delete(i);
        var pathWithCurrent = [...path];
        pathWithCurrent.push(i);
        permutationsHelper(n, results, pathWithCurrent);
        n.add(i);
    });
}

/** TESTING */
let s = new Set([1, 2, 5]);
console.log(permutations(s));