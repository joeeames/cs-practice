function Cache(size) {
  this.index = {};
  this.data = new DoubleLinkedList();
  this.maxSize = size;
}
Cache.prototype.get = function(name) {
  var data = this.index[name];
  if(data === undefined) {
    this.gather(name);
    this.addToCache(name, data);

  } else {
    data = this.index[name].value.value;
    this.touch(name);
  }
  return data;
};

Cache.prototype.addToCache = function(name, val) {
  this.data.addToHead({value: val, index: name});
  this.index[name] = this.data.head;
  if(this.data.length > this.maxSize) {
    delete this.index[this.data.tail.index];
    this.data.removeTail();
  }
};

Cache.prototype.touch = function(name) {
  var item = this.index[name];
  var next = item.next.prev;
  item.next.prev = item.prev;
  item.prev.next = next;
  this.data.addToHead(item);
};