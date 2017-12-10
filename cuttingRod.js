var price = [1, 5, 8, 9, 10, 17, 17, 20];
var n = 8;

var max = function (a, b) {
    return (a > b) ? a : b;
}

var cutRod = function (price, n) {
    var i, j;
    var dp = new Array(n + 1);
    dp[0] = 0;
    for (i = 1; i <= n; i++) {
        dp[i] = 0;
        for (j = 0; j < i; j++) {
            dp[i] = max(dp[i], price[j] + cutRod(price, n - j - 1));
        }
    }
    return dp[n];
}

console.log('Max profit earn by selling this rod in parts: ', cutRod(price, n));
