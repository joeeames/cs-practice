function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.addToHead = function(value) {
  var node;
  if(this.length === 0) {
    node = { value: value, next: null};
    this.tail = node;
  } else {
    node = { value: value, next: this.head};
  }
  this.head = node;
  this.length++;
};

LinkedList.prototype.addToTail = function(value) {
  var node = { value: value, next: null };
  if(this.length === 0) {
    this.head = node;
  } else {
    this.tail.next = node;
  }
  this.tail = node;
  this.length++;
};

LinkedList.prototype.removeHead = function() {
  if(this.length === 1) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  if(this.length > 1) {
    var temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
  }
};

LinkedList.prototype.removeTail = function() {
  if(this.length === 1) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  if(this.length > 1) {
    var current = this.head;
    for(var i=0; i < this.length-2; i++) {
      current = current.next;
    }
    this.tail = current;
    this.tail.next = null;
    this.length--;
  }
};

LinkedList.prototype.toString = function() {
  var string = "";
  var current = this.head;
  while(current !== null) {
    string += current.value;
    if(current.next !== null) {
      string += "->";
    }
    current = current.next;
  }
  return string;
};