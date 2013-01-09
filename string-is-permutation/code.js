function isPermutation(charSet, candidate) {
  var charCounts = new CharCounts();
  var pos = 0;
  for(var i=0; i < candidate.length; i++) {
    while(charCounts.countFor(candidate[i]) === 0) {
      if(charSetHasRunOut(pos, charSet.length)) {
        return false;
      }
      countNextChar(charCounts, charSet, pos);
      pos++;
    }
    charCounts.decrement(candidate[i]);
  }
  return true;
}

function charSetHasRunOut(pos, charSetLength) {
  return pos >= charSetLength;
}

function countNextChar(charCounts, charSet, pos) {
  charCounts.addOne(charSet[pos]);
}

function CharCounts() {
  this.data = {};
}

CharCounts.prototype.addOne = function(char) {
  if(this.data[char] === undefined) {
    this.data[char] = 0;
  }
  this.data[char]++;
};

CharCounts.prototype.decrement = function(char) {
  this.data[char]--;
};

CharCounts.prototype.countFor = function(char) {
  if(this.data[char] === undefined) {
    return 0;
  }
  return this.data[char];
};