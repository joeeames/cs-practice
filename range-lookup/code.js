// implement a key value store that can do the following two operations:
// lookup
// rangeLookup (key1, key2)

function RangeKeyValue() {
  this.data = new LinkedList();
  this.index = {};
}
RangeKeyValue.prototype.insert = function(key, val) {
    this.index[key] = this.insertData(val);
};
RangeKeyValue.prototype.lookup = function(key) {
  // valid check
  return this.index[key].value;
};
RangeKeyValue.prototype.lookupRange = function(key1, key2) {
  var range = [];
  var currentNode = this.index[key1];
  var endVal = this.index[key2].value;
  while(currentNode !== null && currentNode.value <= endVal) {
    range.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return range;
};
RangeKeyValue.prototype.insertData = function(val) {
  var currentNode = this.data.head;
  if(currentNode === null || val < currentNode.value) {
    this.data.addToHead(val);
    return this.data.head;
  }
  while(currentNode.next !== null && currentNode.next.value <= val) {
    currentNode = currentNode.next;
  }
  var node = {value: val};
  node.next = currentNode.next;
  currentNode.next = node;
  this.data.length++;
  return node;
};
