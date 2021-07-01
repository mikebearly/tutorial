let profile = {
  name: "techsith",
};

Object.defineProperty(profile, "age", {
  value: 3,
  writable: false,
});

profile.age = 5;

console.log(profile);
