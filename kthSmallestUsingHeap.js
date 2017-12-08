var arr = [12, 3, 5, 7, 4, 19, 26];
var k = 3;

var heapify = function (arr, i, n) {
    var largest = i,
        l = 2 * i + 1,
        r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }
    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    if (largest !== i) {
        var t = arr[i];
        arr[i] = arr[largest];
        arr[largest] = t;
        heapify(arr, largest, n);
    }
}

var findKthSmallest = function (arr, k) {
    var i;
    for (i = Math.floor(k / 2) - 1; i >= 0; i--) {
        heapify(arr, i, k); // limit of heap is k
    }
    for (i = k; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            var t = arr[i];
            arr[i] = arr[0];
            arr[0] = t;
            heapify(arr, 0, k);
        }
    }
    return arr[0];
}

console.log(findKthSmallest(arr, k));