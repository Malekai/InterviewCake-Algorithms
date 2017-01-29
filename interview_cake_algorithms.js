// Write an efficient function that takes stockPricesYesterday and
// returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

function findProfit(stockPricesYesterday) {
    var min = Math.min(...stockPricesYesterday)
    var start = stockPricesYesterday.indexOf(min);
    var profits = [];
    for (var i = start; i < stockPricesYesterday.length; i++) {
    	if (stockPricesYesterday[i] > min) {
            profits.push(stockPricesYesterday[i] - min)
        }
    }
    return Math.max(...profits);
}

// You have an array of integers, and for each index you want to find the product of every integer
// except the integer at that index.

function productExceptIndex(arr) {
	var products = [];
    for (var i = 0; i < arr.length; i++) {
        var arrCopy = arr;
        var current = arr[i]
    	arrCopy.splice(i,1);
        products.push(arrCopy.reduce((a,b) => a * b));
        arrCopy.splice(i, 0, current);
    }
   	return products;
}
