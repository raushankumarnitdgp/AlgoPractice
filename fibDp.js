var fib = function(n) {
    if(n > 1) {
        return fib(n-1) + fib(n-2);
    }
    return 1;
}

var t1 = new Date().getTime();
console.log('40th Fib is: ',fib(40));
console.log('Time Taken = ',new Date().getTime() - t1);
// same problem using Dp
var dp = [];
var fib = function(n) {
    if(n > 1) {
        if(!dp[n]) {
            return dp[n] = fib(n-1) + fib(n-2);
        } else {
            return dp[n];
        }
    }
    return 1;
}

var t2 = new Date().getTime();
console.log('40th Fib is: ',fib(40));
console.log('Time Taken = ',new Date().getTime() - t2);
//solving using tabulation
var dpTab = [];
dpTab[1] = 1;
dpTab[0] = 1;
for(var i=2;i<42;i++) {
    dpTab[i] = dpTab[i-1] + dpTab[i-2]; 
}
console.log('40th Fib is: ',dpTab[40]);
