/// given a two dimensionally arranged calculator of the letters of the alphabet with 5 columns, and 6 rows
/// and given a word, and starting at position 1, 1 (top left) print out the directions to write
/// out the word where r and l are right and left, u, d, is up/down, and ! is enter.

var map = {
  'a': {row: 1, col: 1},
  'b': {row: 1, col: 2},
  'c': {row: 1, col: 3},
  'd': {row: 1, col: 4},
  'e': {row: 1, col: 5},
  'f': {row: 2, col: 1},
  'g': {row: 2, col: 2},
  'h': {row: 2, col: 3},
  'i': {row: 2, col: 4},
  'j': {row: 2, col: 5},
  'k': {row: 3, col: 1},
  'l': {row: 3, col: 2},
  'm': {row: 3, col: 3},
  'n': {row: 3, col: 4},
  'o': {row: 3, col: 5},
  'p': {row: 4, col: 1},
  'q': {row: 4, col: 2},
  'r': {row: 4, col: 3},
  's': {row: 4, col: 4},
  't': {row: 4, col: 5},
  'u': {row: 5, col: 1},
  'v': {row: 5, col: 2},
  'w': {row: 5, col: 3},
  'x': {row: 5, col: 4},
  'y': {row: 5, col: 5},
  'z': {row: 6, col: 1}
};

function getDirections(word) {
  var start = {row: 1, col: 1};
  var directions = "";
  var dest;
  for(var i=0; i < word.length; i++) {
    dest = map[word[i]];
    directions += getLetterDirections(start, dest);
    start = dest;
  }
  return directions;
}

function getLetterDirections(start, dest) {
  var rowMove = getSingleDimensionDirections(start.col, dest.col, 'l', 'r');
  var colMove = getSingleDimensionDirections(start.row, dest.row, 'u', 'd');
  return rowMove + colMove + '!';
}

function getSingleDimensionDirections(start, dest, positiveLetter, negativeLetter) {
  var directions = "";
  var distance = start-dest;
  var letter;
  if(distance <= 0) {
    letter = negativeLetter;
  } else {
    letter = positiveLetter;
  }
  distance = Math.abs(distance);
  while(distance > 0) {
    directions += letter;
    distance--;
  }
  return directions;
}

console.log(getDirections('cat'));