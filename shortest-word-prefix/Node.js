function TreeNode(value) {
  this.value = value;
  this.children = [];
}

TreeNode.prototype.add = function(value) {
  var newNode = new TreeNode(value);
  this.children.push(newNode);
  return newNode;
};

TreeNode.prototype.findChild = function(value) {
  for(var i=0; i < this.children.length; i++) {
    if(this.children[i].value === value) {
      return this.children[i];
    }
  }
  return null;
};