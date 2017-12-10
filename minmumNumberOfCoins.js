var coins = [25, 10, 5];
var V = 30;
var m = coins.length;

var min = function (a, b) {
    return (a < b) ? a : b;
}

var minCoins = function (coins, m, V) {
    if (V == 0) return 0;
    if (m == 0) return 99999;
    if (V - coins[m - 1] >= 0) {
        return min(1 + minCoins(coins, m, V - coins[m - 1]), minCoins(coins, m - 1, V));
    }
    return minCoins(coins, m - 1, V);
}

// console.log(minCoins(coins, m, V));

var minCoinsDP = function (coins, m, V) {
    var i, j;
    var dp = new Array(V + 1);
    for (i = 0; i <= V; i++) {
        dp[i] = new Array(m);
    }

    for (i = 0; i <= V; i++) {
        dp[i][0] = 99999;
    }

    for (j = 0; j <= m; j++) {
        dp[0][j] = 0;
    }
    //real code begins
    for(i = 1;i<=V;i++){
        for(j = 1;j<=m;j++) {
            if(i-coins[j-1]>=0) {
                dp[i][j] = min(1+dp[i-coins[j-1]][j], dp[i][j-1]);
            } else {
                dp[i][j] = dp[i][j-1];
            }
        }
    }
    return dp[V][m];
}

console.log(minCoinsDP(coins, m, V));