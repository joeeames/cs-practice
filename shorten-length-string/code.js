function shortenChars(charString) {
  var currentChar = charString[0];
  var currentCharCount = 0;
  var shortenedString = '';
  for(var i=0; i < charString.length; i++) {
    if(charString[i] === currentChar) {
      currentCharCount++;
    } else {
      shortenedString += currentCharCount + currentChar;
      currentChar = charString[i];
      currentCharCount = 1;
    }
  }
  if(charString.length > 0) {
    shortenedString += currentCharCount + currentChar;
  }
  console.log(shortenedString);
  return shortenedString;
}

function lengthenChars(shortenedString) {
  var longString = '';
  for(var i=0; i < shortenedString.length; i += 2) {
    var count = shortenedString[i];
    var char = shortenedString[i + 1];
    for(var j=0; j < count; j++) {
      longString += char;
    }
  }
  console.log(longString);
  return longString;
}