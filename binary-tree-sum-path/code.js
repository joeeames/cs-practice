// given a binary tree and a target sum value, print out all paths that sum to that value

function findPathFrom(node, target) {
  if(node === null) {
    return;
  }
  var path = node.value.toString();
  if(node.value === target) {
    console.log(path);
  }
  if(node.value < target) {
    searchForPath(node, node.parent, target-node.value, path);
    searchForPath(node, node.left, target-node.value, path);
    searchForPath(node, node.right, target-node.value, path);
  }
  findPathFrom(node.left, target);
  findPathFrom(node.right, target);
}

function searchForPath(prev, current, target, path) {
  if(current === null) {
    return;
  }
  if(current.value > target) {
    return;
  }
  path += "," + current.value;
  if(current.value === target) {
    console.log(path);
    return;
  }
  if(current.parent !== prev) {
    searchForPath(current, current.parent, target-current.value, path);
  }
  if(current.left !== prev) {
    searchForPath(current, current.left, target-current.value, path);
  }
  if(current.right !== prev) {
    searchForPath(current, current.right, target-current.value, path);
  }
}

function Node(value, parent) {
  this.value = value;
  this.parent = parent;
  this.left = null;
  this.right = null;
}

var root = new Node(12, null);
root.left = new Node(4, root);
root.left.left = new Node(8, root.left);
root.left.left.left = new Node(2, root.left.left);
root.left.left.right = new Node(5, root.left.left);
root.left.right = new Node(2, root.left);
root.left.right.left = new Node(1, root.left.right);
root.left.right.left.left = new Node(6, root.left.right.left);
root.left.right.left.right = new Node(7, root.left.right.left);
root.right = new Node(2, root);
root.right.left = new Node(1, root.right);
root.right.left.left = new Node(2, root.right.left);
root.right.left.right = new Node(3, root.right.left);
root.right.right = new Node(3, root.right);
root.right.right.right = new Node(9, root.right.right);

findPathFrom(root, 9);








