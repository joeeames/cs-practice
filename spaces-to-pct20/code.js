/// expand a string in place by replacing spaces with %20
/// assume that the string has enough empty spaces at the end.

function escapeSpaces(str) {
  var length = findActualLength(str);
  var numSpaces = countInteriorSpaces(str, length);
  var curReadPos = length - 1;
  var curWritePos = length + numSpaces * 2 - 1;
  while(curReadPos >= 0) {
    if(str[curReadPos] !== ' ') {
      str[curWritePos] = str[curReadPos];
      curWritePos--;
    } else {
      str[curWritePos] = '0';
      str[curWritePos-1] = '2';
      str[curWritePos-2] = '%';
      curWritePos -= 3;
    }
    curReadPos--;
  }
  return str;
}

function findActualLength(str) {
  var i = str.length - 1;
  while(str[i] === ' ') {
    i--;
  }
  return i + 1;
}

function countInteriorSpaces(str, actualLength) {
  var numSpaces = 0;
  for(var i=0; i < actualLength; i++) {
    if(str[i] === ' ') {
      numSpaces++;
    }
  }
  return numSpaces;
}

function writeChar(char, pos, str) {
  str[pos] = char;
}