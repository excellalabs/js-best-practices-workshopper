//solution.js
var arrayLength = process.argv.length;
var totalCost = 0;
for (i = 2; i < arrayLength; i+=2) {
	console.log(process.argv[i], ': ', process.argv[i+1]);
	totalCost = totalCost + parseFloats(process.argv[i+1]);
}

console.log('Your total is: $', totalCost);