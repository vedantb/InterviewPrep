let lisNaive = (nums) => {
    let lisHelper = (prev, curpos) => {
        if (curpos === nums.length) return 0;

        let taken = 0;
        if (nums[curpos] > prev) {
            taken = 1 + lisHelper(nums[curpos], curpos + 1);
        }

        let notTaken = lisHelper(prev, curpos + 1);
        return Math.max(taken, notTaken);
    };
    return lisHelper(-Infinity, 0);
};

let lisRecursiveMemoization = (nums) => {
    let cache = new Array(nums.length).fill(-1).map(() => new Array(nums.length).fill(-1));

    let lisHelper = (prevIndex, curpos) => {
        if (curpos === nums.length) return 0;

        if (cache[prevIndex + 1][curpos] >= 0) return cache[prevIndex + 1][curpos];

        let taken = 0;
        if (prevIndex < 0 || nums[curpos] > nums[prevIndex]) {
            taken = 1 + lisHelper(curpos, curpos + 1);
        }

        let notTaken = lisHelper(prevIndex, curpos + 1);
        cache[prevIndex + 1][curpos] = Math.max(taken, notTaken);

        return cache[prevIndex + 1][curpos];
    };
    return lisHelper(-1, 0);
};

let lisDP = (nums) => {
    let cache = new Array(nums.length).fill(1);
    let maxCacheValue = 1;

    for (let j = 1; j < nums.length; j++) {
        for (let i = 0; i < j; i++) {
            if (nums[j] >= nums[i]) {
                cache[j] = Math.max(cache[j], cache[i] + 1);
                maxCacheValue = Math.max(cache[j], maxCacheValue);
            }
        }
    }
    return maxCacheValue;
};

console.log(lisDP([-1, 3, 4, 5, 2, 2, 2, 2]));
