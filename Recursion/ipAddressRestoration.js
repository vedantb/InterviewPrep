/**
 * Given a "raw" ip address string s, return all "restored" ip address strings that can be recovered from s.
 * A "raw" ip address string is a string of digits that can have . marks inserted to create a valid ip address.
 */

/**
 * @param {string} rawIpString
 * @return {Array<string>}
 */
const restoreIpAddresses = (s) => {
    const result = [];
    const tempArr = [];

    let backtrack = function(start) {
        if (start === s.length && tempArr.length === 4) {
            result.push(tempArr.join('.'));
            return;
        }
        if (tempArr.length === 4 || start > s.length) return;

        for (let i = 1; i < 4; i++) {
            const sub = s.substring(start, start + i);
            if (sub.length > 1 && sub[0] === '0') continue;
            const int = parseInt(sub);
            if (int < 256 && int >= 0) {
                tempArr.push(sub);
                backtrack(start + i);
                tempArr.pop();
            }
        }
    };

    backtrack(0);
    return result;
}

console.log(restoreIpAddresses("12345"));