/**
 * Design an algorithm for removing all first name duplicates from an array.
 *  e.g. if the input is [{fN: Ian, lN: Botham},{fN: David, lN: Gower},{fN: Ian, lN: Bell}]
 * result could be [{fN: Ian, lN: Botham},{fN: David, lN: Gower}] or [{fN: David, lN: Gower},{fN: Ian, lN: Bell}]
 */

let eliminateDuplicateName = (arr) => {
    arr.sort((a, b) => (a.fN > b.fN) ? 1 : (a.fN === b.fN) ? ((a.lN > b.lN) ? 1 : -1) : -1);
    let result = 0;
    for (let first = 1; first < arr.length; first++) {
        if (arr[first].fN !== arr[result].fN) {
            arr[++result] = arr[first];
        }
    }
    arr.length = result + 1;
    return arr;
}

eliminateDuplicateName([{
    fN: 'Ian',
    lN: 'Botham'
}, {
    fN: 'David',
    lN: 'Gower'
}, {
    fN: 'Ian',
    lN: 'Bell'
}]);