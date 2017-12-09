var fib = function (n) {
    if (n < 2) return n;
    var t1 = 1;
    var t2 = 1;
    var c = 1;
    while (n > 2) {
        c = t1 + t2;
        t1 = t2;
        t2 = c;
        n--;
    }
    return c;
}

console.log(fib(41));