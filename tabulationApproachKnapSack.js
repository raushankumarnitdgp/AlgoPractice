var val = [60, 100, 120];
var wt = [10, 20, 30];
var W = 50;

var max = function (a, b) {
    return (a > b) ? a : b;
}

var tabulationKnapSack = function (W, wt, val, n) {
    var dp = new Array(n+1),
        i;
    for (i = 0; i <= n; i++) {
        dp[i] = new Array(W+1);
    }

    for (i = 0; i <= n; i++) {
        for (var w = 0; w <= W; w++) {
            if (i === 0 || w === 0) {
                dp[i][w] = 0;
            } else if (wt[i-1] <= w) {
                dp[i][w] = max(val[i-1] + dp[i - 1][w - wt[i-1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][W];
}

console.log('Best Value you can get in your bag:,', tabulationKnapSack(W, wt, val, 3));