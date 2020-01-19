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
var addTwoNumbers = function(l1, l2) {
    var temp = new ListNode(0);
    var p = l1, q = l2;
    var carry = 0;
    var curr = temp;
    
    while(p != null || q != null) {
        var x = (p != null) ? p.val : 0;
        var y = (q != null) ? q.val : 0;
        var sum = carry + x + y;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        curr.next = new ListNode(sum);
        curr = curr.next;
        
        if(p != null) {
            p = p.next;
        }
        
        if(q != null) {
            q = q.next;
        }
    }
    
    if(carry > 0) {
        curr.next = new ListNode(carry)
    }
    
    return temp.next
};