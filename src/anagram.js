// "fairy tales" = "rail safety"
// "Astronomer" = "Moon starer"
// "The Morse Code" = "Here come dots"
// "A gentleman" = "Elegant man"
// "Eleven plus two" = "Twelve plus one"

console.log(anagrams('A gentleman!!!!', 'Elegatn man'));
console.log(anagrams2(123, 213));

function anagrams(string1, string2) {
  string1 = string1.replace(/[^\w]/g, '').toLowerCase();
  string2 = string2.replace(/[^\w]/g, '').toLowerCase();

  if (string1.length !== string2.length) return false;

  let hashCharMapString1 = {};
  for (let char of string1) {
    if (!hashCharMapString1.hasOwnProperty(char)) {
      hashCharMapString1[char] = 1;
    } else {
      hashCharMapString1[char] = hashCharMapString1[char] + 1;
    }
  }

  let hashCharMapString2 = {};
  for (let char of string2) {
    if (!hashCharMapString2.hasOwnProperty(char)) {
      hashCharMapString2[char] = 1;
    } else {
      hashCharMapString2[char] = hashCharMapString2[char] + 1;
    }
  }

  let returnBool = false;
  for (const property in hashCharMapString1) {
    returnBool = hashCharMapString1[property] === hashCharMapString2[property];
    if (returnBool === false) {
      return false;
    }
  }
  return returnBool;
}

function anagrams2(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str) {
  return str
    .toString()
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}
