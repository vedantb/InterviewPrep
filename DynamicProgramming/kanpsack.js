let knapsackNaive = (items, weight, i = 0) => {
  // If we have gone through all the items, return
  if (i === items.length) return 0;

  // If the item is too big to fill the remaining place, skip it
  if (weight - items[i].weight < 0) {
    return knapsackNaive(items, weight, i + 1);
  }

  // find the maximum of including and not including the current item
  return Math.max(
    knapsackNaive(items, weight - items[i].weight, i + 1) + items[i].value,
    knapsackNaive(items, weight, i + 1)
  );
};

let knapsackRecursiveDP = (items, weight) => {
  let cache = {};
  return knapsackRecursiveDPHelper(items, weight, 0, cache);
};

let knapsackRecursiveDPHelper = (items, weight, i, cache) => {
  if (i === items.length) return 0;

  let cached = cache[i] && cache[i][weight];
  if (cached) return cached;

  let toReturn;
  if (weight - items[i].weight < 0) {
    toReturn = knapsackRecursiveDPHelper(items, weight, i + 1, cache);
  } else {
    toReturn = Math.max(
      knapsackRecursiveDPHelper(items, weight - items[i].weight, i + 1, cache) + items[i].value,
      knapsackRecursiveDPHelper(items, weight, i + 1, cache)
    );
  }
  if (!cache[i]) {
    cache[i] = {};
  }
  cache[i][weight] = toReturn;

  return toReturn;
};

let knapsackIterativeDP = (items, weight) => {
  // initialize cache[items.length + 1][weight + 1] to 0s
  let cache = new Array(items.length + 1).fill(0).map(() => new Array(weight + 1).fill(0));

  // for each item and weight, compute the max value of the items up to that item that doesn't go over W weight
  for (let i = 1; i <= items.length; i++) {
    for (let j = 0; j <= weight; j++) {
      if (items[i - 1].weight > j) {
        cache[i][j] = cache[i - 1][j];
      } else {
        cache[i][j] = Math.max(cache[i - 1][j], cache[i - 1][j - items[i - 1].weight] + items[i - 1].value);
      }
    }
  }
  return cache[items.length][weight];
};

let knapsackIterativeDPOptimized = (items, weight) => {
  let cache = [];
  for (let i of items) {
    let newCache = [];
    for (let j = 0; j <= weight; j++) {
      if (i.weight > j) {
        newCache[j] = cache[j] || 0;
      } else {
        newCache[j] = Math.max(cache[j] || 0, (cache[j - i.weight] || 0) + i.value);
      }
    }
    cache = newCache;
  }
  return cache[weight];
};

console.log(
  knapsackIterativeDPOptimized(
    [
      { weight: 2, value: 6 },
      { weight: 2, value: 10 },
      { weight: 3, value: 12 }
    ],
    5
  )
);
