/// given a matrix ordered by row and column but with possibly overlapping values
/// write an algorithm to find a given element

function searchMatrix(matrix, value) {
  // debugger;
  var curCol = findFirstPossibleCol(matrix, value);
  if(curCol === null) {
    return null;
  }
  while(colIsPossible(matrix, curCol, value)) {
    var rowIndex = findValueInCol(matrix, curCol, value);
    if(rowIndex !== null) {
      return {col: curCol, row: rowIndex};

    }
    curCol++;
  }
  return null;
}

function findFirstPossibleCol(matrix, value) {
  return findFirstPossibleColInSubMatrix(matrix, value, 0, matrix.length-1)
}

function findFirstPossibleColInSubMatrix(matrix, value, startCol, endCol) {
  var curCol = Math.floor((endCol - startCol)/2) + startCol;
  var curColIsPossible = colIsPossible(matrix, curCol, value);
  if(curColIsPossible) {
    if(curCol === 0) {
      return 0;
    }
    var prevColIsPossible = colIsPossible(matrix, curCol-1, value);
    if(!prevColIsPossible) {
      return curCol;
    } else {
      return findFirstPossibleColInSubMatrix(matrix, value, startCol, curCol);
    }
  } else {
    if(curCol === endCol) {
      return null;
    }
    if(value < matrix[curCol][0]) {
      return findFirstPossibleColInSubMatrix(matrix, value, startCol, curCol);
    } else{
      return findFirstPossibleColInSubMatrix(matrix, value, curCol + 1, endCol);
    }
  }
}

function colIsPossible(matrix, col, value) {
  if(col >= matrix.length) {
    return false;
  }
  return matrix[col][0] <= value && matrix[col][matrix[col].length-1] >= value;
}

function findValueInCol(matrix, col, value) {
  return findValueInColPiece(matrix, col, 0, matrix[col].length-1, value);
}

function findValueInColPiece(matrix, col, start, end, value) {
  var halfway = Math.floor((end - start)/2) + start;
  var curVal = matrix[col][halfway];
  if(curVal === value) {
    return halfway;
  }
  if(curVal < value) {
    if(halfway === end) {
      return null;
    } else {
      return findValueInColPiece(matrix, col, halfway + 1, end, value);
    }
  }
  if(curVal > value) {
    if(halfway === 0 || halfway === end) {
      return null;
    } else {
      return findValueInColPiece(matrix, col, start, halfway, value);
    }
  }
}



var matrix = [
  [0,10,20,30,40],
  [5,12,25,35,45],
  [20,22,34,45,50],
  [30,32,44,55,60],
  [40,42,54,65,70]
]

// console.log(searchMatrix(matrix, -1));
// console.log(searchMatrix(matrix, 0));
// console.log(searchMatrix(matrix, 10));
// console.log(searchMatrix(matrix, 20));
// console.log(searchMatrix(matrix, 44));
// console.log(searchMatrix(matrix, 43));
// console.log(searchMatrix(matrix, 46));
// console.log(searchMatrix(matrix, 70));
console.log(searchMatrix(matrix, 40));
console.log(searchMatrix(matrix, 75));