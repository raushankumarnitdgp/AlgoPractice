var quickSort = function(arr,l,u) {
    if(l>=u) return ;

    var pivIndex = partition(arr,l,u);
    quickSort(arr,l,pivIndex-1);
    quickSort(arr,pivIndex+1,u);
}

var partition = function(arr,l,u) {
    var smallerIndex = l-1;
    for(var j=l; j<=u; j++) {
        if(arr[j]<=arr[u]) {
            smallerIndex++;
            var t = arr[j];
            arr[j] = arr[smallerIndex];
            arr[smallerIndex] = t;
        }
    }
    return smallerIndex;
}

var arr = [1,4,5,2,0,9,7,8,3];
console.log(arr);
quickSort(arr,0,arr.length-1);
console.log(arr);
