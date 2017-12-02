var arr = [170, 45, 75, 90, 802, 24, 2, 66];

var getMax = function (arr) {
    var max = arr[0];
    for (var i = 1; arr[i]; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

var radixSort = function (arr) {
    var max = getMax(arr);
    for (var exp = 1; max / exp > 0; exp *= 10) {
        countSort(arr, exp);
    }
}

var countSort = function (arr, exp) {
    var n = arr.length;
    var count = new Array(10);
    var output = new Array(n);
    var i;
    for (i = 0; i < 10; i++) {
        count[i] = 0;
    }
    for (i = 0; i < n; i++) {
        count[(Math.floor(arr[i] / exp) )% 10]++;
    }
    for (i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    for (i = n - 1; arr[i]; i--) {
        output[count[(Math.floor(arr[i] / exp) )% 10] - 1] = arr[i];
        count[(Math.floor(arr[i] / exp) )% 10]--;
    }
    
    for (i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

radixSort(arr);
console.log(arr);
