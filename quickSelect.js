var arr = [12, 3, 5, 7, 4, 19, 26];
var k = 3;

var partition = function (arr, l, r) {
    var j = l - 1;
    for (var i = l; i <= r; i++) {
        if (arr[i] <= arr[r]) {
            j++;
            var t = arr[j];
            arr[j] = arr[i];
            arr[i] = t;
        }
    }
    return j;
}

var quickSelect = function (arr, l, r, k) {
    if (l <= r) {
        var i = Math.floor((Math.random())) % (r - l + 1) + l;
        var t = arr[i];
        arr[i] =arr[r];
        arr[r] = t;
        var pivIndex = partition(arr, l, r);
        if (pivIndex - l + 1 === k) {
            return arr[pivIndex];
        }
        if (pivIndex - l + 1 > k) {
            return quickSelect(arr, l, pivIndex - 1, k);
        }
        return quickSelect(arr, pivIndex + 1, r, k - pivIndex + l - 1);
    }
    return 99999;
}
console.log(quickSelect(arr, 0, arr.length - 1, k));