let squareSubMatrixNaive = (arr) => {
  let max = 0;
  // compute for each cell, the biggest subarray
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === '1') {
        max = Math.max(max, squareSubMatrixNaiveHelper(arr, i, j));
      }
    }
  }
  return max;
};

let squareSubMatrixNaiveHelper = (arr, i, j) => {
  // Base case at bottom or right of the matrix
  if (i === arr.length || j === arr[0].length) return 0;

  // if the cell is '0', then its not part of a valid submatrix
  if (!arr[i][j] || arr[i][j] === '0') return 0;

  // Find the size of the right, bottom, and bottom right submatrices and add 1 to the min of those 3 to get the result
  return (
    1 +
    Math.min(
      Math.min(squareSubMatrixNaiveHelper(arr, i + 1, j), squareSubMatrixNaiveHelper(arr, i, j + 1)),
      squareSubMatrixNaiveHelper(arr, i + 1, j + 1)
    )
  );
};

let squareSubMatrixDP = (arr) => {
  let cache = new Array(arr.length).fill(0).map(() => new Array(arr[0].length).fill(0));
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === '1') {
        max = Math.max(max, squareSubMatrixDPHelper(arr, i, j, cache));
      }
    }
  }
  return max;
};

let squareSubMatrixDPHelper = (arr, i, j, cache) => {
  // Base case at bottom or right of the matrix
  if (i === arr.length || j === arr[0].length) return 0;

  // if the cell is '0', then its not part of a valid submatrix
  if (!arr[i][j] || arr[i][j] === '0') return 0;

  if (cache[i][j] > 0) return cache[i][j];
  // Find the size of the right, bottom, and bottom right submatrices and add 1 to the min of those 3 to get the result
  cache[i][j] =
    1 +
    Math.min(
      Math.min(squareSubMatrixDPHelper(arr, i + 1, j, cache), squareSubMatrixDPHelper(arr, i, j + 1, cache)),
      squareSubMatrixDPHelper(arr, i + 1, j + 1, cache)
    );

  return cache[i][j];
};

let squareSubMatrixIterative = (arr) => {
  let max = 0;
  let cache = new Array(arr.length).fill(0).map(() => new Array(arr[0].length).fill(0));

  for (let i = 0; i < cache.length; i++) {
    for (let j = 0; j < cache[0].length; j++) {
      // if we're in the first row or column, the value is 1 is the cell is 1 else 0.
      if (i === 0 || j === 0) {
        cache[i][j] = arr[i][j] === '1' ? 1 : 0;
      } else if (arr[i][j] && arr[i][j] === '1') {
        cache[i][j] = Math.min(Math.min(cache[i][j - 1], cache[i - 1][j]), cache[i - 1][j - 1]) + 1;
      }
      if (cache[i][j] > max) max = cache[i][j];
    }
  }
  return max;
};

console.log(
  squareSubMatrixDP([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ])
);
