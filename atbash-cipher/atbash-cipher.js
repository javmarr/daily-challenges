function encode(string) {
  const lookupTable = {};
  let charValue = 122; // 'z' char
  const maxWordSize = 5;
  let currentWordSize = 0;
  let output = '';
  let currentChar = '';
  const lowerCaseString = string.toLowerCase();  // ignore uppercase

  // setup the table for easy lookup
  // from 'a' to 'z'
  for (let i = 97; i < 123; i++) {
    // set values from 'z' to 'a'
    // console.log(`[${String.fromCharCode(i)}] |  ${String.fromCharCode(charValue)}`);
    lookupTable[String.fromCharCode(i)] = String.fromCharCode(charValue);

    charValue--; // move from 'z' to 'a'
  }

  for (let i = 0; i < lowerCaseString.length; i++) {
    currentChar = lowerCaseString.charAt(i);
    // it's a lowercase letter or number
    if (currentChar.search(/[a-z0-9]/g) !== -1) {
      if (currentWordSize >= maxWordSize) {
        output += ' ';
        currentWordSize = 0; // reset counter
      }

      // it's a number
      if (currentChar.search(/[0-9]/g) !== -1) {
        output += currentChar;
      } else {
        output += lookupTable[currentChar];
      }
      currentWordSize++;
    }
  }
  // console.log(`Result: ${output}`);
  return output;
}
module.exports = { encode };
