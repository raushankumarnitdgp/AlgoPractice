
var mergeSort = function (arr, l, r) {
    if (l < r) {
        var mid = Math.floor((l + r) / 2);
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, r);
        merge(arr, l, mid, r);
    }
};


var merge = function (arr, l, mid, r) {
    var L = [];
    var R = [];
    var j = 0,
        i = l,
        k = 0;
    for (i = l; i <= mid; i++) {
        L[j++] = arr[i];
    }
    while (i <= r) {
        R[k++] = arr[i++];
    }
    i = l;
    j = 0;
    k = 0;
    while (j < L.length && k < R.length) {
        arr[i++] = (L[j] < R[k]) ? L[j++] : R[k++];
    }

    while (j < L.length) {
        arr[i++] = L[j++];
    }
    while (k < R.length) {
        arr[i++] = R[k++];
    }
};

var arr = [2, 3, 5, 7, 1, 4, 5, 3, 7, 9, 1, 2, 5, 6, 9];

mergeSort(arr, 0, arr.length - 1);
console.log(arr);
