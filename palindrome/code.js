/// determine if a linked list is a palindrome

function isPalindrome(list) {
  var stack = [];
  var currentNode = list.head;
  var midPoint = Math.floor(list.length/2);
  for(var i=0; i < midPoint; i++) {
    stack.push(currentNode.value);
    currentNode = currentNode.next;
  }
  if(list.length % 2 === 1) {
    currentNode = currentNode.next;
  }
  for(var i=0; i < midPoint; i++) {
    var matchingVal = stack.pop();
    if(matchingVal !== currentNode.value) {
      return false;
    }
    currentNode = currentNode.next;
  }
  return true;
}


function test() {
  var ll = new LinkedList();
  ll.addToTail('a');
  ll.addToTail('a');
  ll.addToTail('z');
  ll.addToTail('b');
  ll.addToTail('a');
  console.log(isPalindrome(ll));
}

