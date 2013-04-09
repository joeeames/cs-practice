/// find the shortest prefix of a word that is not a prefix of 
// any other word in the list given.  i.e. given "catalog" and a list
// of "bob", "camera", "cod" return "cat"

function findShortestUniquePrefix(word, list) {
  var tree = createPrefixTree(list);
  console.log(tree);
  var prefix = tree.findUniquePrefix(word);
  return prefix;
}

function createPrefixTree(wordList) {
  var tree = new PrefixTree();
  for(var i=0; i < wordList.length; i++) {
    var word = wordList[i];
    console.log(word);
    tree.addWord(word);
  }
  return tree;
}

function PrefixTree() {
  this.head = new TreeNode();
}

PrefixTree.prototype.addWord = function(word, curNode)  {
  if(curNode === undefined) {
    this.addWord(word, this.head);
  // } else if(curNode === null) {
    // this.head = new TreeNode(word[0]);
    // this.addWord(word.substr(1), child);
  } else if(word.length === 0) {
    return;
  } else {
    var child = curNode.findChild(word[0]);
    if(child === null) {
      child = curNode.add(word[0]);
    }
    this.addWord(word.substr(1), child);
  }
};
PrefixTree.prototype.findUniquePrefix = function(word) {
  var current = this.head;
  var idx = 0;
  while(current !== null) {
    current = current.findChild(word[idx]);
    if(current === null) {
      console.log(word);
      console.log(idx);
      return word.substr(0, idx);
    } else {
      idx++;
      if(idx >= word.length) {
        return word;
      }
    }
  }
};


console.log(findShortestUniquePrefix("camero", ["cat"]));