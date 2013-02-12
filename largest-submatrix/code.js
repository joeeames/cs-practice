/// given a matrix of integers, find the submatrix with the largest sum
//

function findLargestSubMatrix(matrix) {
  var largestSubMatrix = null;
  for(var i=2; i <= matrix.length; i++) {
    var currentLargest = findLargestSubMatrixOfSize(i, matrix);
    if(largestSubMatrix === null || currentLargest.sum > largestSubMatrix.sum) {
      largestSubMatrix = currentLargest;
    }
  }
  return largestSubMatrix;
}

function findLargestSubMatrixOfSize(size, matrix) {
  var largest = null;
  var current;
  for(var x=0; x <= matrix.length - size; x++) {
    for(var y=0; y<= matrix.length - size; y++) {
      current = getSubMatrixAt(x, y, size, matrix);
      if(largest) {console.log(largest.sum, current.sum);}
      if(largest === null || current.sum > largest.sum) {
        largest = current;
      }
    }
  }
  return largest;
}

function getSubMatrixAt(x, y, size, matrix) {
  var sum = 0;
  for(var i=x; i < x + size; i++) {
    for(var j=y; j < y + size; j++) {
      sum += matrix[i][j];
    }
  }
  var result = {x:x, y:y, size: size, sum: sum};
  //console.log(x, y, size, sum);
  return result;
}

