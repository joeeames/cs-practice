// remove duplicates from an unsorted linked list without using a buffer

function removeDups(list) {
  var p1 = list.head;
  var p2, p2prev;
  while(p1 !== null) {
    p2 = p1.next;
    p2prev = p1;
    while(p2 !== null) {
      if(p2.value === p1.value) {
        list.length--;
        p2prev.next = p2.next;
        if(p2 === list.tail) {
          list.tail = p2prev;
        }
      } else {
        p2prev = p2;
      }
      p2 = p2.next;
    }
    p1 = p1.next;
  }
}