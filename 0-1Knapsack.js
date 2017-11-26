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