/**
 * Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.
 *
 * https://leetcode.com/problems/triangle/
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let cache = new Array(triangle.length).fill(0).map(() => new Array(triangle[triangle.length - 1].length).fill(0));

    let minTotalHelper = (i, j) => {
        if (i === triangle.length) return 0;
        if (cache[i][j]) return cache[i][j];
        let current = triangle[i][j];
        let sum = current + Math.min(minTotalHelper(i + 1, j), minTotalHelper(i + 1, j + 1));
        cache[i][j] = sum;
        return sum;
    };

    return minTotalHelper(0, 0);
};

var minimumTotalIterative = function (triangle) {
    let cache = [triangle[0][0]];
    let min = Infinity;
    for (let i = 1; i < triangle.length; i++) {
        const tempCache = [];
        for (let j = 0; j < triangle[i].length; j++) {
            let topLeft = cache[j] || cache[j] === 0 ? cache[j] : Infinity;
            let topRight = cache[j - 1] || cache[j - 1] === 0 ? cache[j - 1] : Infinity;
            tempCache[j] = triangle[i][j] + Math.min(topLeft, topRight);
            if (i === triangle.length - 1 && tempCache[j] < min) {
                min = tempCache[j];
            }
        }
        console.log(tempCache);
        cache = tempCache;
    }
    return min === Infinity ? triangle[0][0] : min;
};

console.log(minimumTotalIterative([[1], [-5, -2], [3, 6, 1], [-1, 2, 4, -3]]));
