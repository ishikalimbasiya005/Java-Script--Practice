// Two type of Scope :-
// 1.] Block Scope
// 2.] Global Scope

//  +++++++++++++++++++++++++  Example  :-- Why Not Use "Var" Keyword .. +++++++++++++++++++++++++++++++++++++

// const a = 10;
// let b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// OUTPUT :-    10 20 30

//  ===================  Example Using Block Scope :Run This code above Eample is Comment:----=============

if (true) {
  const a = 10;
  let b = 20;
  var c = 30;
}
// console.log(a);        //OUTPUT :-  a is not defined  Then a is comment & check another
// console.log(b);        //OUTPUT :-  b is not defined  Then b is comment & check another
console.log(c); //OUTPUT :- 30

//PROBLEM :-- Not Show 30 beacuse use block scope not global scope ...

var a = 300; //This is global scope

if (true) {
  var a = 30; //This is block scope
}
console.log("Global scpor value :", a);
//  OUTPUT :- 30

// So, many coder working in same program ,then this time coming bug ..
// so never use use in javaScript "var" keyword

// +++++++++++++++++++++++++++++++             Neasted Function :----              +++++++++++++++++++++++++++

function one() {
  const username = "ishika";

  function two() {
    const website = "github";
    console.log(username);
  }
  // console.log(website);        //OUTPUT :- website is not defined
  two();
}
one(); //OUTPUT :- ishika

// NOTE   :-- for example :-- parent function child ko access nahi kar sakta but,
// child parent function ko access kar sakta hey

// ++++++++++++++++++++++++++++++      USING nested if statment :--- ------------- ++++++++++++++++++++
if (true) {
  const username = "ishika";
  if (true) {
    const website = " github";
    console.log("username + github");
  }
  // console.log(website);
}
// console.log(username);

// NOTE :-- {}scope k bahar function ka scope access nahi hota

// ++++++++++++++++++++++++++++++++++++   Declaring Function :--- +++++++++++++++++++++++++++++++++++++++

// first way :-------------
console.log(addone(5));

function addone(num) {
  return num + 1;
}
// OUTPUT :--6

// NOTE :- before initialization function it is excecuted

console.log(addtwo(5));

const addtwo = function (num) {
  return num + 2;
};
// OUTPUT :- error -- Cannot access 'addtwo' before initialization

// NOT :-- before initialization function it is not excecuted , it return error
