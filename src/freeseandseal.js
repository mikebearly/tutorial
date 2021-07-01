let person = {
  name: "Navis Michael Bearly J",
};

Object.freeze(person);

person.age = 42;

console.log(person);

let subject = {
  name: "Maths",
};

Object.seal(subject);

subject.name = "Science";

subject.author = "Ramanujam";

console.log(subject);
