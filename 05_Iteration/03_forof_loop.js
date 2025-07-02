// ++++++++++++++++++++++++++++++++++++ 1.] For of loop :-- ++++++++++++++++++++++++++++++++++++++++++++++

// SYNTAX: --
// for (const element of iterable) {
//     // code block to be executed
//   }

// 1.]EXAMPLE :------- Use Array
let numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(`${num}`);
}
// OUTPUT :--
// 1
// 2
// 3
// 4
// 5

// 2.] EXAMPLE :-- Use String :---- difference "Foor Loop" & "Foor Of Loop"
let greeting = "Hello world!";

// Foor loop :--
for (let greet = 0; greet < greeting.length; greet++) {
  console.log(greeting[greet]);
}
//  OUTPUT :--
// H
// e
// l
// l
// o

// w
// o
// r
// l
// d
// !

// OR

// Foor of loop :--
for (const greet of greeting) {
  console.log(`The character is :${greet}`);
}
// OUTPUT :--
// The character is :H
// The character is :e
// The character is :l
// The character is :l
// The character is :o
// The character is :
// The character is :w
// The character is :o
// The character is :r
// The character is :l
// The character is :d
// The character is :l
// The character is :d
// The character is :!

// 3.] EXAMPLE :-- ++++++++++++++++++++++++++++++++++++ MAP() +++++++++++++++++++++++++++++++++++++

// Map() define 2 values :-- 1.]key 2.] value

const map = new Map();
map.set("IN", "india"),
  map.set("US", "America"),
  map.set("UK", "United Kingdom"),
  console.log(map);
// OUTPUT :- Map(3) { 'IN' => 'india', 'US' => 'America', 'UK' => 'United Kingdom' }

// +++++++++++++++++  Used map :- for of loop ++++++++++++++++++++++++
for (const [mymap, value] of map) {
  console.log(mymap, " :- ", value);
}
// OUTPUT :--
// IN  :-  india
// US  :-  America
// UK  :-  United Kingdom

// ++++++++++ Use map:- for of loop in array : --+++++++++++++++
const maps = new Map();
maps.set("no1", ["1", "2", "3", " 4", "5"]);
maps.set("no2", ["6", "7", "8", "9", "10"]);

for (const [arr, value] of maps) {
  console.log(arr, `:-`, value);
}

// Foor of Loop using array , map() etc.. BUT
// Foor Of loop is not use in object

// +++++++++++++++++++++++++++++++++++++++ Use :- for of loop in object :- +++++++++++++++++
// Generate Error:------------

// const obj = { a: 1, b: 2 };

// //  Error: obj is not iterable
// for (const item of obj) {
//   console.log(item);
// }

//  OBJECT use :-- Use Object.entries()

const obj = { a: 1, b: 2 };
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

// NOTE :----- you can use object in loop so , use "for in loop".
