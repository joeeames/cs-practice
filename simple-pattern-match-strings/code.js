// given s1 where s1 contains A-Z and s2 where s2 contains A-Z,?,*
// if ? matches 0 or 1 char, and * matches 0+ chars, 
// determine if s1 matches s2

function match(candidate, pattern) {
  if(candidate.length === 0 && pattern.length === 0) {
    return true;
  }
  if(pattern[0] === '?') {
    var a = match(candidate, pattern.substr(1));
    var b = match(candidate.substr(1), pattern.substr(1));
    return a || b;
  } else if(pattern[0] === '*') {
    if(pattern.length === 1) {
      return true;
    }
    var restOfPattern = null;
    for(var i=1; i < pattern.length; i++) {
      if(pattern[i] !== '?' && pattern[i] !== '*') {
        restOfPattern = pattern.substr(i);
      }
    }
    if(restOfPattern === null) {
      return true;
    }

    for(var j=0; j < candidate.length; j++) {
      if(candidate[j] === restOfPattern[0]) {
        if(match(candidate.substr(j), restOfPattern)) {
          return true;
        }
      }
    }

    return false;
  } else {
    if(candidate[0] === pattern[0]) {
      return match(candidate.substr(1), pattern.substr(1));
    } else {
      return false;
    }
  }
}

