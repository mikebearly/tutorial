let a = [1, 2, 2, 3];

// using ES6 Set Collections
// console.log([...new Set(a)]);

// Normal Implementation

console.log(uniqueArrayForEach(a));

function uniqueArray(a) {
  unique = [];
  hashmap = {};
  for (var i = 0; i < a.length; i++) {
    if (!hashmap.hasOwnProperty(a[i])) {
      hashmap[a[i]] = 1;
      unique.push(a[i]);
    }
  }
  return unique;
}

function uniqueArrayForEach(a) {
  let unique = [];
  let hashmap = {};

  a.forEach((item) => {
    if (!hashmap.hasOwnProperty(item)) {
      hashmap[item] = 1;
      unique.push(item);
    }
  });

  return unique;
}
