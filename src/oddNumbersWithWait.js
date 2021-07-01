var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}

//to pring odd numbers
/*
for (var i = 1; i < 20; i++) {
  if (i % 2 != 0) {
    // console.log(i);
    ((i) => {
      setTimeout(function () {
        console.log(`waited for ${i} seconds `);
      }, i * 1000);
    })(i);
  }
}
*/

/*
for (var i = 1; i < 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
    ((i) => {
      setTimeout(function () {
        console.log(`waited for ${i} seconds`);
      }, i * 1000);
    })(i);
  }
}
*/

for (var i = 1; i < 20; i++) {
  if (i % 2 != 0) {
    ((i) => {
      setTimeout(() => {
        console.log(`waited for ${i} seconds`);
      }, i * 1000);
    })(i);
  }
}
