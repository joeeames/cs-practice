// you are receiving a stream of integers.  Implement two functions.  track(x) that tracks an integer, and 
// getRankOf(x) that will return the rank of that number, i.e. the # of integers less than or equal to that number
// not including itself


function streamRanker() {
	this.root = null;
}

streamRanker.prototype.track = function(x) {
	if(this.root === null) {
		this.root = new Node(x, 0)
		return;
	}
	var cur = this.root;
	var placed = false;
	var curRank = 0;
	while(!placed) {
		if(cur.value >= x) {
			cur.rank++;
			if(cur.left === null) {
				cur.left = new Node(x, curRank);
				placed = true;
			} else {
				cur = cur.left;
			}
		} else {
			// curRank = cur.rank + 1;
			if(cur.right === null) {
				cur.right = new Node(x, curRank);
				placed = true;
			} else {
				// curRank++;
				cur = cur.right;
			}
		}
	}
}

streamRanker.prototype.getRankOf = function(x) {
	var cur = this.root;
	var rank = 0;
	var found = false;
	while(cur !== null) {
		if(cur.value > x) {
			cur = cur.left;
		} else if(cur.value === x) {
			rank += cur.rank;
			return rank;
		} else {
			rank += cur.rank + 1;
			cur = cur.right;
		}
	}
	return rank;
}

function Node(x, rank) {
	this.left = null;
	this.right = null;
	this.value = x;
	this.rank = rank;
}

var ranker = new streamRanker();
ranker.track(6);
ranker.track(2);
ranker.track(63);
ranker.track(3);
ranker.track(9);
ranker.track(12);
ranker.track(1);
ranker.track(2);
console.log(ranker.root);

console.log(ranker.getRankOf(2));
console.log(ranker.getRankOf(6));
console.log(ranker.getRankOf(1));
console.log(ranker.getRankOf(3));
console.log(ranker.getRankOf(4));
console.log(ranker.getRankOf(63));
console.log(ranker.getRankOf(9));
console.log(ranker.getRankOf(12));
console.log(ranker.getRankOf(64));
console.log(ranker.getRankOf(13));
console.log(ranker.getRankOf(10));