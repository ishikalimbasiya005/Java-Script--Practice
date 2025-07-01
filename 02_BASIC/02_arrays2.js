// 1.] Push() :-
const god = ["krishna", "ganesha", "shiva"];
const goddess = ["radha", "siddhi", "parvati"];

god.push(goddess);

console.log(god);
console.log(god[3][1]);

// 2.] Concat() :- [You can use only one value]
const god1 = ["krishna", "ganesha", "shiva"];
const goddess1 = ["radha", "siddhi", "parvati"];
const Mygod = god1.concat(goddess1);
console.log(Mygod);

// 3.] Spread() :- [You can use multiple value ]
const god2 = ["krishna", "ganesha", "shiva"];
const goddess2 = ["radha", "siddhi", "parvati"];
const My_god = [...god2, ...goddess2];
console.log(My_god);

// 4.]Flat() :-
const array = [1, [2, 3, 4, 5], [6, 7, [8, 9, 10]]];
const array1 = array.flat(2); //Also Also you use Infinity
console.log(array1);

// 5.] isArray() :
console.log(Array.isArray("Ishika")); //OUTPUT :-false
console.log(Array.isArray([1, 2, 3])); //OUTPUT :- true
console.log(Array.isArray(new Array())); //OUTPUT :-true

// 6.] from() :-
console.log(Array.from("ishika")); //OUTPUT :- [ 'i', 's', 'h', 'i', 'k', 'a' ]

console.log(Array.from({ name: "Ishika" })); //OUTPUT :- []

console.log(Array.from([1, 2, 3], (x) => x * x)); //OUTPUT :-[1,4,9]

// 7.] of() :-
let A = 100;
let B = 200;
let C = 300;

console.log(Array.of(A, B, C)); //OUTPUT :- [100,200,300]
