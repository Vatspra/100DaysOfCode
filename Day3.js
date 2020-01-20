var isPalindrome = function(x) {
    var arr = [];
    var num;
    if(x < 0) {
       return false;
    } 
    
    if(x < 10) {
        return true;
    }
        num = x;
    
    while(num) {
        var lastDigit = num % 10;
        arr.push(lastDigit)
        num = Math.floor(num / 10);
    }
    
    var tempResult = arr[0];
    
    for(var i = 1; i < arr.length;i++) {
        tempResult = tempResult * 10 + arr[i];
    }
    
    if(x === tempResult) {
        return true;
    } else {
        return false
    }
};