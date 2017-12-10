var coins = [1, 2, 3];
var amount = 4;

var possibleCount = function (coins, amount) {
    var m = coins.length,
        i, j, x, y;
    var dp = new Array(amount + 1);
    for (i = 0; i <= amount; i++) {
        dp[i] = new Array(m);
    }
    for (j = 0; j < m; j++) {
        dp[0][j] = 1;
    }

    for (i = 1; i <= amount; i++) {
        for (j = 0; j < m; j++) {
            // if include in solution
            x = (i - coins[j] >= 0) ? dp[i - coins[j]][j] : 0;
            // if exclude
            y = (j > 0) ? dp[i][j - 1] : 0;
            dp[i][j] = x + y;
        }
    }
    return dp[amount][m-1];
}

console.log(possibleCount(coins,amount));
