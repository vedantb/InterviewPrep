var sampleOfflineData = function(arr, k) {
    let maxKPossibility = arr.length - 1;
    if (k <= 1) {
        return arr[Math.floor(Math.random() * maxKPossibility) + 1];
    }

    for (let i = 0; i < k; i++) {
        let rand = Math.floor(Math.random() * maxKPossibility) + 1;
        let temp = arr[rand];
        arr[rand] = arr[i];
        arr[i] = temp;
        maxKPossibility--;
    }

    return arr.slice(0, k);
}

let a = sampleOfflineData([1, 2, 3, 4, 5, 6, 7, 8, 9], 1);
let b = sampleOfflineData([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);
let c = sampleOfflineData([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

console.log(a);
console.log(b);
console.log(c);