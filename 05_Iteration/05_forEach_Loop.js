// Using ForEach Loop also Use in (Give The Call Back) Function ,array function ,printMe function with ,
//  Item  -> Return Value ,
//  Index -> Return Number of index ,
//  Arr   -> Return all value in array

// NOTE :---------- use item, index, arr all same time , otherwise not apply

// 1.] EXAMPLE :-----------
const coding = ["HTML", "CSS", "Bootstrap", "JavaScript", "Jquery"];

// ++++++++++++++++++++++++++++++ Using Function() :--
coding.forEach(function (item, index, arr) {
  console.log(item, index, arr);
});
// OUTPUT :--s
// HTML 0 [ 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Jquery' ]
// CSS 1 [ 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Jquery' ]
// Bootstrap 2 [ 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Jquery' ]
// JavaScript 3 [ 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Jquery' ]
// Jquery 4 [ 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Jquery' ]

// +++++++++++++++++++++++++++++  Using Array() :-
coding.forEach((item) => {
  console.log(item);
});
// OUTPUT :--
// HTML
// CSS
// Bootstrap
// JavaScript
// Jquery

// +++++++++++++++++++++++++++++  Using Printme() :-
coding.forEach(function Printme(e) {
  console.log(e);
});
// OUTPUT  :---
// HTML
// CSS
// Bootstrap
// JavaScript
// Jquery

// +++++++++++++++++++++++++++++ Using Array in Object :-
const coding1 = [
  {
    Fname: "javaScript",
    Lname: "Js",
  },
  {
    Fname: "Python",
    Lname: "py",
  },
  {
    Fname: "C++",
    Lname: "cpp",
  },
];

coding1.forEach((e) => {
  console.log(e.Lname);
});

// OUTPUT :-
// Js
// py
// cpp

// ++++++++++++++++++++++++++++ :-- Used condition in forEach loop :-
const no = [1, 2, 3, 4, 5];
const newno = [];
no.forEach((num) => {
  if (num > 3) {
    newno.push(num);
  }
});
console.log(newno);
// OUTPUT :- [4,5]

// +++++++++++++++++++++++++++++ Using Declare Variable :-
const coding2 = ["HTML", "CSS", "Bootstrap", "JavaScript", "jquery"];

const value = coding2.forEach((e) => {
  console.log(e);
});
console.log(value);

// OUTPUT :-
// HTML
// CSS
// Bootstrap
// JavaScript
// jquery
// undefined

// NOTE :--  declare variable with ForEach Loop , this is not return any value Just return "Undefied"

//  the declare variable used filter()
