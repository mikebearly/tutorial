const numbers = [1, -1, 2, 3];

// Method : 1

// let sum = 0;
// numbers.forEach((num) => {
//   sum += num;
// });

// Method : 2

// let sum = 0;
// for (let n of numbers) {
//   sum += n;
// }

// reduce takes callback function with two parameteres accumulater , current value

let sum1 = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

let sum2 = numbers.reduce((acc, curr) => {
  return acc + curr;
});

let sum3 = numbers.reduce((acc, curr) => acc + curr);

console.log(sum3);
