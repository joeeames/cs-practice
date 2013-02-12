/// find the intersection of two unsorted lists

function findIntersection(list1, list2) {
  var hash = {};
  result = [];

  for(var i=0; i < list1.length; i++) {
    var strVal = list1[i].toString();
    if(hash[strVal] === undefined) {
      hash[strVal] = 1;
    } else {
      hash[strVal]++;
    }
  } 

  for(var i=0; i < list2.length; i++) {
    strVal = list2[i].toString();
    if(hash[strVal] !== undefined) {
      result.push(list2[i]);
      if(hash[strVal] === 1) {
        delete hash[strVal];
      } else {
        hash[strVal]--;
      }
    }
  }

  return result;
}