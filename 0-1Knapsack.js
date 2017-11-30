var knapSackRecursive = function (W, wt, val, n) {
    if (n === 0 || W === 0) {
        return 0;
    }
    if (wt[n - 1] > W) return knapSackRecursive(W, wt, val, n - 1);

    return max(val[n - 1] + knapSackRecursive(W - wt[n - 1], wt, val, n - 1), knapSackRecursive(W, wt, val, n - 1));
}

var max = function (a, b) {
    return (a > b) ? a : b;
}

var val = [60, 100, 120];
var wt = [10, 20, 30];
var W = 50;

console.log(knapSackRecursive(W, wt, val, 3));

var dpArr = new Array(3);
for (var i = 0; i < 3; i++) {
    dpArr[i] = new Array(W);
}
console.log(dpArr[0][0]);
// using memoisation
var knapSackDp = function (dp, W, wt, val, n) {
    if (n === 0 || W === 0) {
        return 0;
    }
    if (dp[n - 1][W - 1]) return dp[n - 1][W - 1];
    if (wt[n - 1] > W) {
        dp[n - 1][W - 1] = knapSackRecursive(W, wt, val, n - 1);
        return dp[n - 1][W - 1];
    }

    dp[n - 1][W - 1] = max(val[n - 1] + knapSackRecursive(W - wt[n - 1], wt, val, n - 1), knapSackRecursive(W, wt, val, n - 1));
    return dp[n - 1][W - 1];
}

console.log(knapSackDp(dpArr, W, wt, val, 3));
// using tabulation method

