// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const cipher = [11, 21, 31, 41, 51, 12, 22, 32, 42, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55];
    const splitInput = input.toLowerCase().split(''); // turns message string input into an array by individual characters
    let emptyArray = [];
    if (encode) { // if encoding turn the letters into a pair of numbers and push into array
        for (let char of splitInput) { // loop through array of individual characters
            const isValidChar = alphabet.includes(char);
            if (!isValidChar) emptyArray.push(char); // if character is not in the alphabet then it is a special character and should be pushed as is
            const index = alphabet.indexOf(char);
            emptyArray.push(cipher[index]); // otherwise cross reference the alphabet and pull from cipher
        }
    } else if (!encode) { // if decoding turn the pair of numbers into letters and push into array
        let actualLength = 0; // length counter
        for (let char of splitInput) { // loop through array of individual characters
            const isNum = !isNaN(parseInt(char)); // making the number check more readable
            if (isNum) actualLength++; // only increases length given a number
        }
        if (actualLength%2!=0) return false; // check to see if actual length is not even since numbers need to be decoded in pairs
        let toDecodeArray = []; // an array for the number pairs and spaces i.e. ['34', ' ' , '51']
        let numPairArray = []; // an array to put numbers into to make pairs i.e. [] -> ['3'] -> ['3','4'] -> []
        for (let char of splitInput) { // loop through array of individual characters
            const isNum = !isNaN(parseInt(char)); // making the number check more readable 
            if (isNum) {
                numPairArray.push(parseInt(char)); // if its a number put it into the number pair array
            }
            else toDecodeArray.push(char); // otherwise put it into the to decode array
            if (numPairArray.length === 2) { // check to see if there are 2 numbers in the num pair array
                numPair = `${numPairArray[0]}${numPairArray[1]}`; 
                toDecodeArray.push(numPair); // pushes number pair in the to decode array
                numPairArray = []; // clears number pair array for next use
            }
        }
        for (let i = 0; i < toDecodeArray.length; i++) { // loops through the to decode array to finally start decoding
            const isNum = !isNaN(parseInt(toDecodeArray[i])); // readability for condition
            const cipherIndex = cipher.indexOf(parseInt(toDecodeArray[i])); // much needed readability
            if (isNum && cipherIndex !== 8) emptyArray.push(alphabet[cipherIndex]); // if its a number and isn't 'i' then translate and push into final array
            else if (cipherIndex === 8) { // special case that if 'i' is being taken then also give 'j'
                emptyArray.push(alphabet[cipherIndex]);
                emptyArray.push(alphabet[cipherIndex + 1]);
            }
            else emptyArray.push(toDecodeArray[i]);
        }
    }
    return emptyArray.join(""); // putting it all together
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
