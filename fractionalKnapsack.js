var W = 50;
var items = [{
    wt: 10,
    val: 60
}, {
    wt: 20,
    val: 100
}, {
    wt: 30,
    val: 120
}];
// sort in descending order
items.sort(function (a, b) {
    return (b.val / b.wt - a.val / a.wt);
})

console.log(items);

var i = 0;
var profit = 0;
while (W >= items[i].wt) {
    profit += items[i].val;
    W -= items[i].wt;
    i++;
}

if (W > 0) {
    profit += items[i].val * W/items[i].wt;
}

console.log('Profit: ',profit);
