/**
 * Implement run length encoding
 */

var encoding = function(str) {
    let count = 1;
    let ss = "";
    for (let i = 1; i <= str.length; i++) {
        if (i === str.length || str[i] !== str[i - 1]) {
            ss += count;
            ss += str[i - 1];
            count = 1;
        } else {
            count++;
        }
    }
    return ss;
}

var decoding = function(str) {
    let count = 0;
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (isNaN(c)) {
            while (count > 0) {
                result += c;
                count--;
            }
        } else {
            count = parseInt(c);
        }
    }

    return result;
};

console.log(encoding("aaaabcccaa"));
console.log(decoding("4a1b3c2a"));