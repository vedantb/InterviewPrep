/**
 * A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level,
 * we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com",
 * we will also visit the parent domains "leetcode.com" and "com" implicitly.
 * 
 * Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address.
 * An example of a count-paired domain might be "9001 discuss.leetcode.com".
 * 
 * We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order),
 * that explicitly counts the number of visits to each subdomain.
 */

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {

    let result = [];
    let domainToCountMap = {};

    cpdomains.forEach(domain => {
        let domainToArray = domain.split(' ');
        let count = parseInt(domainToArray[0]);
        let fullDomain = domainToArray[1];

        let subDomains = fullDomain.split('.');
        let key = subDomains.pop();
        domainToCountMap[key] = (domainToCountMap[key] || 0) + count;
        while (subDomains.length > 0) {
            key = subDomains.pop() + "." + key;
            domainToCountMap[key] = (domainToCountMap[key] || 0) + count;
        }
    });


    for (let i in domainToCountMap) {
        result.push(domainToCountMap[i] + " " + i);
    }

    return result;

};