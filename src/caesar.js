// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift >= 25 || shift <= -25 || shift === 0) return false; // check to see if shift value is valid
    shift = encode ? shift : -(shift); // changes shift's sign depending on whether encode is true or false;
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const splitInput = input.toLowerCase().split(''); // turns string input into an array by individual characters
    let emptyArray = [];
    for (let char of splitInput) { // loop through array of individual characters
        const isValidChar = (alphabet.includes(char)); //  just naming variables to make more readable
        const shiftedReference = char.charCodeAt(0) + shift;
        if (!isValidChar) emptyArray.push(char); // if the given character is not in the alphabet then it is a special character and should be pushed to emptyArray
        else if (shiftedReference > 122) emptyArray.push(String.fromCharCode(shiftedReference - 26)); // if the shifted reference number is too big make it smaller
        else if (shiftedReference < 97) emptyArray.push(String.fromCharCode(shiftedReference + 26)); // if the shifted reference number is too small make it bigger
        else emptyArray.push(String.fromCharCode(shiftedReference)); // otherwise the shifted reference number should be just right 
    }
    return emptyArray.join(""); // puts everything back into a string
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
