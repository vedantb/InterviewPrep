let parentheses = function(s) {
    if (s.length === 1) {
        let result = [];
        result.push(s);
        return result;
    }

    let results = [];

    for (let i = 1; i < s.length; i++) {
        let left = parentheses(s.substring(0, i));
        let right = parentheses(s.substring(i, s.length));

        for (s1 of left) {
            for (s2 of right) {
                results.push("(" + s1 + s2 + ")");
            }
        }
    }

    return results;
}

console.log(parentheses("abcd"));