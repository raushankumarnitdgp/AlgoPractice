var arr1 = [2, 3, 5, 7, 1, 4, 5, 3, 7, 9, 1, 2, 5, 6, 9];

var arr = [12, 11, 13, 5, 6, 7];

var swap = function (a, b) {
    var t = a;
    a = b;
    b = t;
}

var heapify = function (arr, n, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }

    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    if (largest !== i) {
        swap(arr[i],arr[largest]);
        var t = arr[i];
        arr[i] = arr[largest];
        arr[largest] = t;
        heapify(arr,n,largest);
    }
}

var heapSort = function (arr) {
    var n = arr.length,
        i;
    // create a max heap,  in O(n) time
    for (i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    // now sort array
    for (i = n - 1; i > 0; i--) {
        var t = arr[i];
        arr[i] = arr[0];
        arr[0] = t;
        heapify(arr, i, 0);
    }
}

heapSort(arr1);
console.log(arr1);