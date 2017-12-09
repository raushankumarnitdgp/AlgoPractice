var p = [1, 2, 3, 4];

var dp = new Array(4);
for (var i = 0; i < 4; i++) {
    dp[i] = new Array(4);
}

for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        dp[i][j] = -1;
    }
}

var matrixChainOrder = function (p, i, j) {
    if (i === j) {
        return 0;
    }
    if (dp[i][j] !== -1) {
        return dp[i][j];
    }
    var min = 99999,
        count;
    for (var k = i; k < j; k++) {
        count = matrixChainOrder(p, i, k) + matrixChainOrder(p, k + 1, j) + p[i - 1] * p[k] * p[j];
        if (count < min) {
            min = count;
        }
    }
    dp[i][j] = min;
    return min;
}
var n = 4;
// console.log('Min Operation Cost:,', matrixChainOrder(p, 1, n - 1));


// tabulation approach

var matrixChainOrderTab = function (p, n) {
    var i, j, k, l, q;
    for (i = 1; i < n; i++) {
        dp[i][i] = 0;
    }
    for (l = 2; l < n; l++) {
        for (i = 1; i <= n - l; i++) {
            j = i + l - 1;
            dp[i][j] = 999999;
            for (k = i; k < j; k++) {
                q = dp[i][k] + dp[k + 1][j] + p[i - 1] * p[k] * p[j];
                if (q < dp[i][j]) {
                    dp[i][j] = q;
                }
            }
        }
    }
    return dp[1][n - 1];
}

console.log('Min number of operations required: ', matrixChainOrderTab(p,4));
