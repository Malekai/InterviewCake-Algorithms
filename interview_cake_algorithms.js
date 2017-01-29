// Write an efficient function that takes stockPricesYesterday and
// returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

function myFunction(stockPricesYesterday) {
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
