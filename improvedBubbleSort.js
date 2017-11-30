var arr = [2, 3, 5, 7, 1, 4, 5, 3, 7, 9, 1, 2, 5, 6, 9];

var bubbleSort = function (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var swapped = false;
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
                swapped = true;
            }
        }
        if (!swapped) return;
    }
}

bubbleSort(arr);
console.log(arr);