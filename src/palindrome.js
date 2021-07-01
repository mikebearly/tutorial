/*
function palindrome(str) {
  let reverseString = "";
  for (let char of str) {
    reverseString = char + reverseString;
  }
  return str === reverseString;
}
*/

// palindrome using reduce

function palindrome(str) {
  let reverseStr = str.split("").reduce((acc, curr) => {
    return curr + acc;
  }, "");
  return str === reverseStr;
}

console.log(palindrome("aba"));
