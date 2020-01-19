/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    var str = x.toString();
    var reversedString = tempReverse(str);
    var result;
    if (x < 0) {
        result = parseInt(reversedString) * -1;
    } else {
        result = parseInt(reversedString)
    }

    if (isInFinite(result)) {
        return 0;
    }
    return result;

};


function tempReverse(str) {
    if (str.length <= 1) {
        return str;
    }
    return reverse(str.substring(1)) + str[0];
}

function isInFinite(x) {
    var maxNum = Math.pow(2, 31);
    var minNum = -1 * maxNum;
    if (x >= maxNum || x <= minNum) {
        return true;
    } else {
        return false;
    }
}