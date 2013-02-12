/// Social network connectivity. Given a social network containing N members and a log file containing M timestamps
// at which times pairs of members formed friendships, design an algorithm to determine the earliest time at which
// all members are connected (i.e., every member is a friend of a friend of a friend ... of a friend).
//  Assume that the log file is sorted by timestamp and that friendship is an equivalence relation. The
//  running time of your algorithm should be MlogN or better and use extra space proportional to N.

function findNetworkConnectedTime(size, friendships) {
  var friends = new Array(size);
  for(var i=0; i < size; i++) {
    friends[i] = i;
  }
  var treeSizes = new Array(size);

  for(i=0; i < friendships.length; i++) {
    var friendship = friendships[i];
    var treeSize = union(friendship.left, friendship.right, friends, treeSizes);
    if(treeSize === size) {
      return friendship.timestamp;
    }
  }
}

function union(left, right, nodes, sizes) {
  var leftRoot = getRoot(left, nodes);
  var rightRoot = getRoot(right, nodes);
  var leftSize = sizes[leftRoot] || 1;
  var rightSize = sizes[rightRoot] || 1;

  if(nodes[leftRoot] !== nodes[rightRoot]) {
    nodes[leftRoot] = rightRoot;
    sizes[rightRoot] = leftSize + rightSize;

  }
  return sizes[rightRoot];
}

function getRoot(child, nodes) {
  currentNode = child;
  while(nodes[currentNode] !== currentNode) {
    currentNode = nodes[currentNode];
  }
  return currentNode;
}

var friendships = [];
friendships.push({left: 0, right: 1, timestamp: 1});
friendships.push({left: 0, right: 2, timestamp: 2});
friendships.push({left: 1, right: 2, timestamp: 3});
friendships.push({left: 1, right: 3, timestamp: 4});
friendships.push({left: 0, right: 4, timestamp: 5});
friendships.push({left: 2, right: 5, timestamp: 6});
friendships.push({left: 3, right: 6, timestamp: 7});
friendships.push({left: 3, right: 8, timestamp: 8});
friendships.push({left: 8, right: 7, timestamp: 9});

console.log(findNetworkConnectedTime(9, friendships));