const numbers = [1, 2, 3, 4, 5];
const allNumbers = [...numbers, 6, 7, 8];
console.log(allNumbers);

const name = {
  firstName: "Navis",
  lastName: "Michael",
};

const nameDetails = {
  ...name,
  address: "Amudham colony, T Nagar",
};

console.log(nameDetails);

// Simple sum

function sum(x, y, z) {
  return x + y + z;
}

let nums = [1, 2, 3];

console.log(sum(...nums));

// Copying an arrray

arrayOriginal = [3, 4, 5];

arrayOriginal2 = [1, 2];

arrayCopy = [...arrayOriginal];

arrayConcat = [...arrayOriginal2, ...arrayOriginal];

console.log(arrayCopy);

console.log(arrayConcat);

// spreading elements in function calls.

let fruits = ["Apple", "Banana", "Orange"];

let getFruits = (f1, f2, f3) => {
  console.log(`Fruits are ${f1} ${f2} ${f3}`);
};

getFruits(...fruits);

// spread syntax for object literals

var obj1 = { name: "Name", age: 42 };
var obj2 = { role: "Software Engineer", location: "Chennai" };

const employee = {
  ...obj1,
  ...obj2,
};

console.log(employee);
