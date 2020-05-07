let targetSum = (nums, target, i = 0, sum = 0) => {
  // When we have gone through every item, see if we have reached our target sum
  if (i === nums.length) {
    return sum === target ? 1 : 0;
  }

  // Combine the possibilities by adding and subtracting current value
  return targetSum(nums, target, i + 1, sum + nums[i]) + targetSum(nums, target, i + 1, sum - nums[i]);
};

let targetSumRecursiveDP = (nums, target, i = 0, sum = 0, cache = {}) => {
  if (i === nums.length) {
    return sum === target ? 1 : 0;
  }

  //check cache and return if we get a hit
  let cached = cache[i] && cache[i][sum];
  if (cached || cached === 0) return cached;

  // if we didn't hit the cache compute the value and store in cache
  let toReturn =
    targetSumRecursiveDP(nums, target, i + 1, sum + nums[i], cache) +
    targetSumRecursiveDP(nums, target, i + 1, sum - nums[i], cache);

  if (!cache[i]) {
    cache[i] = {};
  }
  cache[i][sum] = toReturn;
  return toReturn;
};

let targetSumiterativeDP = (nums, target) => {
  let sum = 0;
  // our cache has to range from -sum(nums) to sum(nums)
  for (let num of nums) sum += num;
  let cache = new Array(nums.length + 1).fill(0).map(() => new Array(2 * sum + 1).fill(0));

  cache[0][sum] = 1;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < 2 * sum + 1; j++) {
      let prev = cache[i - 1][j];
      if (prev !== 0) {
        cache[i][j - nums[i - 1]] += prev;
        cache[i][j + nums[i - 1]] += prev;
      }
    }
  }
  return cache[nums.length][sum + target];
};

console.log(targetSumiterativeDP([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0));
