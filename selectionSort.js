var arr = [2, 3, 5, 7, 1, 4, 5, 3, 7, 9, 1, 2, 5, 6, 9];

var selectSort = function (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        var t = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = t;
    }
}

selectSort(arr);
console.log(arr);