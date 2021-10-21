function reverse(word) {
  return word.split("").reverse().join("")
}

function isPalindrome(word= racecar) {
  const reverseWord = reverse(word)
  return word === reverseWord
}




/* 
  Add your pseudocode here
  character matches: char[0] === char [-1]; char(1) ===char(-2) then return true
*/

/*
  Add written explanation of your solution here
const str = 'mañana mañana'
const strReverse = str.split(0,).reverse().join('')
// => "anãnam anañam" // notice how the first word has an ã rather ñ*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
