const add = (...numbers) => {
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum;
};

console.log(add(1, 1, 1, 1, 1));
