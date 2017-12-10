var numEggs = 2;
var numFloor = 10;

var max = function (a, b) {
    return (a > b) ? a : b;
}

var eggPuzzle = function (numEggs, numFloor) {
    if (numEggs == 1) {
        return numFloor;
    }
    if (numFloor == 1 || numFloor == 0) {
        return numFloor;
    }
    var min = 9999,
        x, res;
    for (x = 1; x <= numFloor; x++) {
        res = 1 + max(eggPuzzle(numEggs - 1, x - 1), eggPuzzle(numEggs, numFloor - x));
        if (res < min) {
            min = res;
        }
    }
    return min;
}

// console.log('Worst Case Minimum number of trail:', eggPuzzle(numEggs, numFloor));

// using tabulation 
var eggPuzzleTab = function (numEggs, numFloor) {
    var i, j, k,res;
    var dp = new Array(numEggs + 1);
    for (i = 0; i <= numEggs; i++) {
        dp[i] = new Array(numFloor + 1);
    }
    for (i = 0; i <= numEggs; i++) {
        dp[i][1] = 1;
        dp[i][0] = 0;
    }
    for (j = 0; j <= numFloor; j++) {
        dp[1][j] = j;
    }

    for (i = 2; i <= numEggs; i++) {
        for (j = 2; j <= numFloor; j++) {
            dp[i][j] = 99999;
            for (k = 1; k <= j; k++) {
                res = 1 + max(dp[i-1][k-1],dp[i][numFloor-k]);
                if(res < dp[i][j]) {
                    dp[i][j] = res;
                }
            }
        }
    }
    return dp[numEggs][numFloor];
}

console.log('Worst Case Minimum number of trail:', eggPuzzle(numEggs, numFloor));

