// a circus wants to build a pyramid where each person is both shorter and lighter than the person below them.  given a set of heights and weights, build the biggest possible pyramid

/*
order the list of people by height. determine the longest run of ascending weights within that list.  start at the end, and work backwards, noting the # for each starting point.
find the largest for a given node by looking at all the following nodes that are larger weights, and choose the one with the higest run number. 
i.e. weights:

1, 2,  3, 4, 5, 6,  7
5, 14, 6, 9, 8, 10, 14
5   1  4  3   3  2    1

1,5
3,6  4,9
5,8  6,10  7,14



scenarios:
no input
1 input
input where the weights are in inverse order  1,10  2,8  3,5
input where weights are also in ascending order  3,5  4,6  7,9
input where all but a few weights are in asc order    3,5  4,20   5,6   7,9


sort list by height
working backwards 
	calculate # of following nodes with ascending weight
		if no following nodes with ascending weight then 1
		else find the following node with a higher weight with the largest # of following nodes with ascending weight.  result is that plus 1
	answer is the higherst run number
*/

function findLargestTowerSize(people) {
	people.sort(function(personA, personB) {
		return personA.height - personB.height;
	});

	var highestSoFar = 0;

	for(var i=people.length-1; i >= 0; i--) {
		var runLength = calculateFollowingWeightRun(people, i);
		if(runLength > highestSoFar) {
			highestSoFar = runLength;
		}
	}

	return highestSoFar;
}

function calculateFollowingWeightRun(people, i) {
	var len = people.length;
	var personWeight = people[i].weight;
	var highestFollowingRun = 0;
	for(var cur = i + 1; cur < len; cur++) {
		if(people[cur].weight > personWeight && people[cur].followingRun > highestFollowingRun) {
			highestFollowingRun = people[cur].followingRun;
		}
	}
	people[i].followingRun = highestFollowingRun + 1;
	return people[i].followingRun;
}

var a1 = {height: 1, weight:10}
var a2 = {height: 2, weight:8}
var a3 = {height: 3, weight:5}
var a4 = {height: 4, weight:6}
var a5 = {height: 7, weight:9}
var a6 = {height: 4, weight:20}
var a7 = {height: 5, weight:6}
var a8 = {height: 9, weight:30}

console.log(findLargestTowerSize([a1, a2, a3]));
console.log(findLargestTowerSize([a4, a5, a3]));
console.log(findLargestTowerSize([a8, a6, a5, a7, a3]));