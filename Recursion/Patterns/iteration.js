function printReverse(n) {
    if (n === null) return;
    printReverse(n.next);
    console.log(n.val);
}

/** TESTING IT */

function Node(val) {
    this.val = val;
    this.next = null;
}

let headNode = new Node(1);
let nodeTwo = new Node(2);
let nodeThree = new Node(3);
headNode.next = nodeTwo;
nodeTwo.next = nodeThree;

printReverse(headNode);