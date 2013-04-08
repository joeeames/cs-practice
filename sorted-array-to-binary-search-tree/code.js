/// given a sorted array, create a balanced binary search tree (minimal height binary search tree)


function createBinarySearchTree(arr) {
  if(arr.length === 0) {
    return;
  }
  var root = new Node();
  createSubTree(root, arr, 0, arr.length-1);
  return root;
}

function createSubTree(node, arr, start, end) {
  var midPointIdx = getMidPoint(arr, start, end);
  node.value = arr[midPointIdx];
  if(start < midPointIdx) {
    node.left = new Node();
    createSubTree(node.left, arr, start, midPointIdx-1);
  }
  if(end > midPointIdx) {
    node.right = new Node();
    createSubTree(node.right, arr, midPointIdx+1, end);
  }
}

function getMidPoint(arr, start, end) {
  var range = end-start;
  return Math.floor(range / 2) + start;
}



function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}


console.log(createBinarySearchTree([1,2,3,4,5,6,7,8,9]));