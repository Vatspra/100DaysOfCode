/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let start = 0;
    let end = nums.length  - 1;
    let mid;
    while(start <=end) {
         mid = Math.floor((start + end)/ 2);
        if(target === nums[mid])  {
            return mid
        }
        
        if(target < nums[mid]) {
            end = mid-1;
            mid = Math.floor((start + end)/ 2);
        } else {
            start = mid + 1;
        }
    }
    
    return mid+1
    
};