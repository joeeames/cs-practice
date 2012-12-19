
console.log(fngv('1234', '5321'));
console.log(fngv('8888', '7977'));

function sortDigits(digits) {
  return digits.split('').sort('').join('');
}

function fngv(value, digits) {
  var sortedDigits = sortDigits(digits);
  var result = fngv_rec(value, sortedDigits, "", "");
  return result;
}

function fngv_rec(target, digits, matchSoFar, matchedValueSoFar) {
  //console.log('fngc_rec', target, digits, matchSoFar, matchedValueSoFar);
  if(digits.length === 0) {
    if(target.length === 0 && +matchSoFar > +matchedValueSoFar) {
      return matchSoFar;
    } else {
      return null;
    }
  }
  if(+matchSoFar > +matchedValueSoFar) {
    return fngv_rec(target.substr(1), digits.substr(1), matchSoFar + digits[0],
      matchedValueSoFar + target[0]);
  } else {
    var usedDigits = [];
    var nextDigit;
    var result = null;
    while(result === null) {
      nextDigit = getSmallestDigitOver(target[0], digits, usedDigits);
      if(nextDigit === null) {
        return null;
      }
      usedDigits.push(nextDigit);
      result = fngv_rec(target.substr(1), removeDigits(digits, [nextDigit]), matchSoFar + nextDigit,
        matchedValueSoFar + target[0]);

    }
    return result;
  }
}

function getSmallestDigitOver(digit, digits, usedDigits) {
  var remainingDigits = removeDigits(digits, usedDigits);
  for(var i=0; i < remainingDigits.length; i++) {
    if(+remainingDigits[i] >= +digit) {
      return remainingDigits[i];
    }
  }
  return null;
}

function removeDigits(sortedDigits, digitsToRemove) {
  var localDigitsToRemove = digitsToRemove.slice(0);
  var result = [];
  for(var i=0; i < sortedDigits.length; i++) {
    var found = false;
    for(var j=0; j < localDigitsToRemove.length; j++) {
      if(localDigitsToRemove[j] === sortedDigits[i]) {
        found = true;
        localDigitsToRemove.splice(j, 1);
        break;
      }
    }
    if(!found) {
      result.push(sortedDigits[i]);
    }
  }
  return result.join('');
}