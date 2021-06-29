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
