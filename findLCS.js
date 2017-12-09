var str1 = 'abcdef';
var str2 = 'abxef',
    i, j;

var max = function (a, b) {
    return (a > b) ? a : b;
}
var dp = new Array(str1.length + 1);
for (i = 0; i < str1.length + 1; i++) {
    dp[i] = new Array(str2.length + 1);
}
// tabulation
for (i = 0; i <= str1.length; i++) {
    for (j = 0; j <= str2.length; j++) {
        if (i == 0 || j == 0) {
            dp[i][j] = 0;
        } else if (str1[i - 1] === str2[j - 1]) {
            dp[i][j] = 1 + dp[i - 1][j - 1];
        } else {
            dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
}

console.log('Length of LCS is: ', dp[str1.length][str2.length]);
// printing the longest common subsequence
var m = str1.length;
var n = str2.length;
subsequence = '';
while (m > 0 && n > 0) {
    if (dp[m][n] !== max(dp[m - 1][n], dp[m][n - 1])) {
        m--;
        n--;
        subsequence += str1[m];
    } else {
        if (dp[m - 1][n] >= dp[m][n - 1]) {
            m--;
        } else {
            n--;
        }
    }
}

console.log('Susequence is:', subsequence.split('').reverse().join(''));
