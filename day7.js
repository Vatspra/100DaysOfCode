/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let newList  = new ListNode(-1)
    if(!l1) {
        return l2;
    }
    if(!l2) {
        return l1;
    }
    
    if(!l1 && !l2) {
        return null;
    }
    
    let head = newList;
    // let temp = head;
    while(l1 !== null && l2 !==null) {
        if(l1.val <= l2.val) {
            newList.next = l1;
            l1 = l1.next;
        } else {
             newList.next = l2;
             l2 = l2.next;
        }
        
        newList = newList.next;
       
    }
    
    while(l1 !== null) {
        newList.next = l1;
        l1 = l1.next
    }
    while(l2 !== null) {
        newList.next = l2;
        l2 = l2.next
    }
    
    return head.next
    
};
