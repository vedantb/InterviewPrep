const mergeSort = (head) => {
    if (head === null || head.next === null) {
        return head;
    }

    const mid = getMiddleAndSplitInHalf(head);

    const leftHalf = mergeSort(head);
    const rightHalf = mergeSort(mid);

    return merge(leftHalf, rightHalf);
}

const merge = (l1Pointer, l2Pointer) => {
    const dummyHead = new ListNode(0);
    let endOfSortedList = dummyHead;

    while (l1Pointer !== null && l2Pointer !== null) {
        if (l1Pointer.val < l2Pointer.val) {
            endOfSortedList.next = l1Pointer;
            l1Pointer = l1Pointer.next;
        } else {
            endOfSortedList.next = l2Pointer;
            l2Pointer = l2Pointer.next;
        }

        endOfSortedList = endOfSortedList.next;
    }

    if (l1Pointer !== null) endOfSortedList.next = l1Pointer;
    if (l2Pointer !== null) endOfSortedList.next = l2Pointer;

    return dummyHead.next;
}

const getMiddleAndSplitInHalf = (head) => {
    let prev = null;
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;

    return slow;
}

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null; // Points to another ListNode object
    }
}