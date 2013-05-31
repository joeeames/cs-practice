/* given a pyramid of integers, find the largest sum of root to leaf node path

5
6  2
8  3  8

5-6-8
5-6-3
5-2-3
5-2-8

possible inputs:  single node - 5
a sample scenario

start at the top, find the sum from the current node to the top
	if current node is top, then sum is self
	else sum is highest of 2 possible parents plus self

last row is all negative
some negative numbers
single node
all positive #'s

*/

function findHighestPyramidSum(pyramid) {
	var highestSumSoFar = pyramid[0].value;
	var len = pyramid.length;
	var lastRow = pyramid[len-1].row;
	pyramid[0].sum = pyramid[0].value;
	for(var i=1; i < len; i++) {
		var parent1, parent2;

		if(pyramid[i].col > 1) {
			parent1 = pyramid[i - pyramid[i].row];
		}
		if(pyramid[i].col < pyramid[i].row) {
			parent2 = pyramid[i - pyramid[i].row + 1];
		}
		if(!parent1) {
			pyramid[i].sum = pyramid[i].value + parent2.sum;
		} else if(!parent2) {
			pyramid[i].sum = pyramid[i].value + parent1.sum;	
		} else {
			pyramid[i].sum = pyramid[i].value + Math.max(parent1.sum, parent2.sum);
		}
		if(pyramid[i].row === lastRow && pyramid[i].sum > highestSumSoFar) {
			highestSumSoFar = pyramid[i].sum;
		}
	}

	return highestSumSoFar;
}

function make(val, col, row) {
	return {value: val, col: col, row: row};
}

var p1 = [make(5,1,1), make(6,1,2), make(2,2,2), make(-8,1,3), make(-3,2,3), make(-8,3,3)];
var p2 = [make(3,1,1)];

console.log(findHighestPyramidSum(p1));
console.log(findHighestPyramidSum(p2));