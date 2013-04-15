/// given a binary tree, determine if it is a binary search tree

function isBinarySearchTree(node) {
  var balancedOnLeft = true;
  var balancedOnRight = true;
  if(node.left !== null) {
    balancedOnLeft = node.left.value < node.value && isBinarySearchTree(node.left);
  }
  if(node.right !== null) {
    balancedOnRight = node.right.value >= node.value && isBinarySearchTree(node.right);
  }
  return balancedOnLeft && balancedOnRight;
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(4);
root.right.right = new Node(20);
root.left.right = new Node(5);
root.left.left.left = new Node(1);

// debugger;
console.log(isBinarySearchTree(root));