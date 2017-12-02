var num = 103400042019;

var repalce0 = function (num) {
    if (num === 0) return 0;
    var digit = num % 10;
    if (digit === 0) {
        digit = 5;
    }
    return repalce0(Math.floor(num/10))*10+digit;
}

console.log('Replaced number: ',repalce0(num));
