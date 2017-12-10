var arr = [10, 22, 9, 33, 21, 50, 41, 60];

var getLis = function (arr, n) {
    var i, j;
    var lis = [];
    for (i = 0; i < n; i++) {
        lis[i] = 1;
    }
    for (i = 1; i < n; i++) {
        for (j = 0; j < i; j++) {
            if (arr[j] < arr[i] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1;
            }
        }
    }

    var max = 0;
    for (i = 0; i < n; i++) {
        if (max < lis[i]) {
            max = lis[i];
        }
    }
    return max;
}

console.log('Maximum LIS:,',getLis(arr,arr.length));