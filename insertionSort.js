var arr = [2, 3, 5, 7, 1, 4, 5, 3, 7, 9, 1, 2, 5, 6, 9];

var insertSort = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        var j = i-1;
        var key = arr[i];
        while(j>=0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--; 
        } 
        arr[j+1] = key;
    }
};

insertSort(arr);
console.log(arr);