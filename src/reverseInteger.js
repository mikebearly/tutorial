//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
console.log(reverseInt(-15234));
function reverseInt(num) {
  let numSign = num < 0 ? -1 : 1;
  let numString = num.toString();
  let revString = "";
  for (let char of numString) {
    revString = char + revString;
  }
  /*
  revString = numString.split("").reduce((acc, curr) => {
    return (curr = curr + acc);
  }, "");
  */
  return parseInt(revString) * numSign;
}
