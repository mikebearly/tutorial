const points = [40, 100, 1, 5, 25, 10];
const sorted = points.sort((a, b) => {
  return a - b;
});
console.log(sorted);
const desorted = points.sort((a, b) => {
  return b - a;
});
console.log(desorted);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let odds = arr.filter((n) => n % 2);
console.log(odds);

var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray); // console output [ 1, 3, 5, 7, 9 ]
