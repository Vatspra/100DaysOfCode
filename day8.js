/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let map = new Map();
    let temp = head;
    let prev = null;
    if(!temp) {
        return null;
    }
    
    while(temp !== null) {
        
        if(!map.get(temp.val)) {
            map.set(temp.val, true);
            prev = temp;
            temp= temp.next
        }else  {
            prev.next = temp.next;
            temp = temp.next;
        }
    }
    
    return head;
    
}
