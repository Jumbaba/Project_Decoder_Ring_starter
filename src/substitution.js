// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false; // check to see if there is even an alphabet given
    const userAlphabet = alphabet.toLowerCase().split(''); // turning given alphabet string into array of individual characters
    for (let char of userAlphabet) {
        if (userAlphabet.length !==26 || userAlphabet.indexOf(char) !== userAlphabet.lastIndexOf(char)) return false; // check to see if the alphabet is 26 characters long and there are no duplicates
    }
    const actualAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const splitInput = input.toLowerCase().split(''); // turning given message string into array of individual characters
    let emptyArray = [];
    if (encode) { // if encoding we cross reference the actual alphabet and pull from the user alphabet
        for (let char of splitInput) { 
            const isValidChar = actualAlphabet.includes(char); // naming variable for readability
            if (!isValidChar) emptyArray.push(char);
            const index = actualAlphabet.indexOf(char); //naming variable for readability
            emptyArray.push(userAlphabet[index]);
        }
    } else if (!encode) { // if decoding we cross reference the user alphabet and pull from the actual alphabet
        for (let char of splitInput) {
            const isValidChar = userAlphabet.includes(char); //naming variable for readability
            if (!isValidChar) emptyArray.push(char); 
            const index = userAlphabet.indexOf(char); //naming variable for readability
            emptyArray.push(actualAlphabet[index]);
        }
    }
    return emptyArray.join(""); // puts everything back into a string
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
