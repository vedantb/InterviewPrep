/**
 * @param {number} numPairs
 * @return {Array<string>}
 */
const generateParentheses = (numPairs) => {
    const result = [];

    let generate = (numLeftParensNeeded, numRightParensNeeded, parenStringInProgress) => {
        if (numLeftParensNeeded === 0 && numRightParensNeeded === 0) {
            result.push(parenStringInProgress);
            return;
        }

        if (numLeftParensNeeded > 0) {
            generate(numLeftParensNeeded - 1, numRightParensNeeded, parenStringInProgress + "(");
        }

        if (numLeftParensNeeded < numRightParensNeeded) {
            generate(numLeftParensNeeded, numRightParensNeeded - 1, parenStringInProgress + ")");
        }
    }

    generate(numPairs, numPairs, "");
    return result;
}

console.log(generateParentheses(2));