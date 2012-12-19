DIRECTION_RIGHT = 0;
DIRECTION_LEFT = 1;
var direction = DIRECTION_RIGHT;
var N = 3;
var image = createImage(3);
var image2 = createImage(4);

function createImage(n) {
  var image = [];
  for(var i=0; i < n; i++) {
    image.push([]);
  }

  var num = 1;
  for(var j=0; j < n; j++) {
    for(var k=0; k < n; k++) {
      image[j][k] =num;
      num++;
    }
  }
  // image[0].push(1);image[0].push(2);image[0].push(3);
  // image[1].push(4);image[1].push(5);image[1].push(6);
  // image[2].push(7);image[2].push(8);image[2].push(9);
  return image;
}



function printImage(image) {
  for(var i=0; i < image.length; i++) {
    var out = "";
    for(var j=0; j < image.length; j++) {
      out += image[i][j] + "-";
    }
    console.log(out);
  }
  console.log("===========");
}



function rotateImage(image, direction) {
  var pixelRotator = getRotator(direction);
  var startingCol = 0;
  var N = image.length;
  var endingCol = N-1;

  for(var row = 0; row < Math.floor(N / 2); row++) {
    console.log('rotating row ' + row);
    for(var col=startingCol; col < endingCol ; col++) {
      console.log('rotating col ' + col);
      pixelRotator.rotate(row, col, image, N);
    }
    endingCol--;
    startingCol++;
  }
}

function getRotator(direction) {
  if(direction === DIRECTION_RIGHT) {
    return new RightRotator();
  } else {
    return new LeftRotator();
  }
}

function RightRotator() {
}

RightRotator.prototype.rotate = function(row, col, image, N) {
  var temp = image[row][col];
  var nextPoint = this.getNextPoint(row, col, N);
  image[row][col] = image[nextPoint.x][nextPoint.y];
  var nextPoint2 = this.getNextPoint(nextPoint.x, nextPoint.y, N);
  image[nextPoint.x][nextPoint.y] = image[nextPoint2.x][nextPoint2.y];
  var nextPoint3 = this.getNextPoint(nextPoint2.x, nextPoint2.y, N);
  image[nextPoint2.x][nextPoint2.y] = image[nextPoint3.x][nextPoint3.y];
  image[nextPoint3.x][nextPoint3.y] = temp;
};

RightRotator.prototype.getNextPoint = function(x, y, N) {
  var newY = x;
  var newX = N - 1 - y;
  return {x: newX, y: newY};
};

function LeftRotator() {
}

LeftRotator.prototype.rotate = RightRotator.prototype.rotate;

LeftRotator.prototype.getNextPoint = function(x, y, N) {
  var newX = y;
  var newY = N - 1 - x;
  return {x: newX, y: newY};
};

printImage(image);
rotateImage(image, direction);
printImage(image);

printImage(image2);
rotateImage(image2, direction);
printImage(image2);
rotateImage(image2, DIRECTION_LEFT);
rotateImage(image2, DIRECTION_LEFT);
printImage(image2);
