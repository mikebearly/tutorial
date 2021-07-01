// Array destruring

const foo = [1, 2, 3, 4];
const [one, two, three, four] = foo;
console.log(one);
console.log(two);
console.log(three);
console.log(four);

// object destructuring

const person = {
  name: "Navis",
  age: 23,
  address: "Chennai",
};

const { name, age, address } = person;

console.log(name);
console.log(age);
console.log(address);
