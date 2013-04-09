// write an algorithm to print out a tree breadth first

function breadthFirstSearch(root) {
  var level = 0;
  while(printLevel(root, level)) {
    level++;
  }
}

function printLevel(root, levelToPrint) {
  var curLevel = 0;
  var output = "";
  var output = printNodesAtLevel(root, levelToPrint, curLevel, output);
  if(output !== "") {
    console.log(output);
  }
  return output !== "";
}

function printNodesAtLevel(node, levelToPrint, curLevel, output) {
  if(node === null) {
    return output;
  }
  if(levelToPrint === curLevel) {
    if(output.length > 0) {
      output += ",";
    }
    output += node.value;
  } else if(levelToPrint > curLevel) {
    output = printNodesAtLevel(node.left, levelToPrint, curLevel + 1, output);
    output = printNodesAtLevel(node.right, levelToPrint, curLevel + 1, output);
  }
  return output;
}




function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}


var root = new Node(14);
root.left = new Node(3);
root.left.left = new Node(1);
root.left.left.right = new Node(2);
root.left.right = new Node(7);
root.left.right.left = new Node(6);
root.left.right.right = new Node(9);
root.right = new Node(20);
root.right.left = new Node(16);
root.right.left.left = new Node(15);
root.right.left.right = new Node(18);
root.right.right = new Node(22);

breadthFirstSearch(root);