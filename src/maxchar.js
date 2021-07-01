maxChar("abcccccccd") === "c";

function maxChar(str) {
  let max = 0;
  let maxChar;
  let hashChars = {};

  for (let char of str) {
    if (!hashChars.hasOwnProperty(char)) {
      hashChars[char] = 1;
    } else {
      hashChars[char] += 1;
    }
  }
  console.log(hashChars);

  for (let char in hashChars) {
    if (hashChars[char] > max) {
      max = hashChars[char];
      maxChar = char;
    }
  }

  console.log(maxChar);
}
