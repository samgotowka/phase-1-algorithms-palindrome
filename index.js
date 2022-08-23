function isPalindrome(word) {
  // Write your algorithm here
  var reversed = ''

  for(var char of word) {
    reversed = char + reversed
  }
  return reversed === word
}
console.log(isPalindrome)
/* 

  Add your pseudocode here

  
*/

/*
  Add written explanation of your solution here



  if the string provided is a palindrome it will return true
  if the string is not a palindrome it will return false




*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  
  
  
  /* my custom tests */

  console.log("Expecting:true");
  console.log('=>', isPalindrome('abba'));

  console.log("Expecting:true");
  console.log('=>',isPalindrome('a'));

  console.log("Expecting:false");
  console.log('=>',isPalindrome('ab'));



// ------------------------------------

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
