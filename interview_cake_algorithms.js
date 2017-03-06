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

// Given an arrayOfInts,
// find the highestProduct you can get from three of the integers.

function myFunction(arr) {
	arr.sort();
    var current = 0;
    var store = [];
    for (var i = 1; i < arr.length; i++) {
    	store.push(arr[current] * arr[i] * arr[i+1])
        current ++;
    }
    // remove NaN
    store = store.filter(Boolean);
    return Math.max(...store);
}

// Write a function mergeRanges() that takes an array of meeting time ranges
// and returns an array of condensed ranges.

function myFunction(arr) {
    arr.sort((a, b) => { return a.startTime - b.startTime });
    // start with lowest
    var merged = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        // store last merged
        var lastMerged = merged[merged.length - 1];
        if (arr[i].startTime <= lastMerged.endTime) {
            // get maximum of end times and make the newest merge
            lastMerged.endTime = Math.max(arr[i].endTime, lastMerged.endTime);
        } else {
            // add to arr
            merged.push(arr[i]);
        }
    }
    return merged;
}
