/// given a matrix ordered by row and column (i.e. linear but ordered into a matrix)
/// write an algorithm to find a given element

function findInMatrix(matrix, value) {
  var rows = matrix.length;
  if(matrix.lenth === 0) {
    return null;
  }
  var cols = matrix[0].length;

  var beginning = 0;
  var end = rows * cols - 1;
  return searchMatrix(matrix, beginning, end, value);
}

function searchMatrix(matrix, startIdx, endIdx, value) {
  var midway = Math.floor((endIdx - startIdx) / 2) + startIdx;
  // debugger;
  // console.log('midway', midway);
  var midwayCoords = indexToCoords(midway, matrix.length, matrix[0].length);
  var valueAtCoords = matrix[midwayCoords.col][midwayCoords.row];
  if(valueAtCoords === value) {
    return midwayCoords;
  }
  if(valueAtCoords > value && midway > startIdx) {
    return searchMatrix(matrix, startIdx, midway - 1, value);
  }
  if(valueAtCoords > value && midway === startIdx) {
    return null;
  }
  if(valueAtCoords < value && midway < endIdx) {
    return searchMatrix(matrix, midway + 1, endIdx, value);
  } else {
    return null;
  }

}

function indexToCoords(idx, cols, rows) {
  var col = Math.floor(idx / cols);
  var row = idx % rows;
  return {col: col, row: row};
}


var matrix = [
  [0,1,2,3,4],
  [5,6,7,8,9],
  [20,21,22,23,24],
  [35,36,37,38,39],
  [40,41,42,43,44]
]

console.log(findInMatrix(matrix, 0));
console.log(findInMatrix(matrix, 10));
console.log(findInMatrix(matrix, 20));
console.log(findInMatrix(matrix, 44));
console.log(findInMatrix(matrix, 37));
console.log(findInMatrix(matrix, 46));