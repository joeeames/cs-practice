function addLL(num1, num2) {
  var result = getLLasNumber(num1) + getLLasNumber(num2);
  return convertNumberToLL(result);
}

function getLLasNumber(ll) {
  var result = 0;
  var place = 1;
  var current = ll.head;
  while(current !== null) {
    result += place * current.value;
    current = current.next;
    place *= 10;
  }
  return result;
}

function convertNumberToLL(num) {
  var numAsString = num.toString(10);
  var result = new LinkedList();
  for(var i=0; i < numAsString.length; i++) {
    result.addToHead(numAsString[i]);
  }
  return result;
}


function LinkedList() {
  this.head = null;
}

LinkedList.prototype.addToHead = function(value) {
  var node;
  if(this.head === null) {
    node = {value: value, next: null};
  } else {
    node = {value: value, next: this.head};
  }
  this.head = node;
};

var num1 = convertNumberToLL(4201);
var num2 = convertNumberToLL(8535);

console.log(getLLasNumber(addLL(num1, num2)));