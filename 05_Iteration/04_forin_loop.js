// ++++++++++++++++++++++++++++++++++++ 1.] For in loop :-- ++++++++++++++++++++++++++++++++++++++++++++++

// SYNTAX: --
// for (const element in iterable) {
//     // code block to be executed
//   }

// ---> You can print value use syntax :- [ objectName[keyName] ]

// 1.] EXAMPLE :--------- Used Object
const names = {
  name: "ishika",
  age: "19",
};

for (const lname in names) {
  console.log(`${lname} :- ${names[lname]}`);
}

// 2.]EXAMPLE :---------Used Array
const goddes = ["Radha", "Sita", "Parvati"];

for (const god in goddes) {
  console.log(goddes[god]);
}

// 3.] EXAMPLE :-------Used Map
const map = new Map();
map.set("1", "Radha");
map.set("2", "Sita");
map.set("3", "Gopi");
map.set("4", "Parvati");

for (const key in map) {
  console.log(map[key]);
}
// OUTPUT :-- not show anything beacuse, not work map in forin loop
