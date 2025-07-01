// "this keyword" is refere current context

// +++++++++++++++++++++++++++++++++++++++++++1.] EXAMPLE :------------- +++++++++++++++++++++++++++++

const user = {
  username: "ishika",
  age: 19,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
  },
};
user.welcomeMessage();
// OUTPUT :---  ishika, welcome to website

//                      ++++++++ Some Chenges :-- +++++++++++
const users = {
  username: "ishika",
  age: 19,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
  },
};
users.welcomeMessage();
// Add this lines :-
users.username = "Nisha";
users.welcomeMessage();

// OUTPUT :---
//  ishika, welcome to website
// Nisha, welcome to website

//                        ++++++++++Some Chenges :--- +++++++++++++++
const users1 = {
  username: "ishika",
  age: 19,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this); //Add this line
  },
};
users1.welcomeMessage();
users1.username = "Nisha";
users1.welcomeMessage();

// OUTPUT :--
//  ishika, welcome to website
//   {
//          username: 'ishika',
//          age: 19,
//          welcomeMessage: [Function: welcomeMessage]
//   }
//  Nisha, welcome to website
//   {
//          username: 'Nisha',
//          age: 19,
//           welcomeMessage: [Function: welcomeMessage]
//   }

//                  +++++++++++++++++Some Chenges :-- +++++++++++++++++++
const users2 = {
  username: "ishika",
  age: 19,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};
console.log(this); //Add line
// OUTPUT :- {}
// Run this node so return {} , run this browser so Return Global Object - window Object..

// ++++++++++++++++++++++++++++++++++++  2.] EXAMPLE :--- ++++++++++++++++++++++++++++++++++++++++++
function hello() {
  let username = "ishika";
  console.log(this.username);
}
hello();
// OUTPUT :-- undefined

// Some Chenges :------------
function hello1() {
  console.log(this);
}
hello1();
// OUTPUT :- many functions return

// +++++++++++++++++++++++++++++++++++++  3.] EXAMPLE :-- +++++++++++++++++++++++++++++++++++++++++++
const hello2 = function () {
  let username = " ishika";
  console.log(this.username);
};
hello2();
// OUTPUT: -undefind

// ++++++++++++++++++++++++++++++++++++  4.] Using Arrow Function ++++++++++++++++++++++++++++++++++++++
const person = {
  name: "Ishika",
  greet: () => {
    console.log(this.name);
  },
};
person.greet();
// OUTPUT: -undefind

//                  ++++++ Some Chenges : +++++++++++
const arrow1 = () => {
  let username = "ishika";
  console.log(this.username);
};
console.log(this);
// OUTPUT :- {}

//  +++++++++++++++++++++++++++++++++++++ Example of arrow function :-- ++++++++++++++++++++++++++++++
const addone = (num1, num2) => {
  return num1 + num2;
};
console.log(addone(2, 5));
// OUTPUT: -7

//               ++++++++++++++++ Implicite Return :-----------------
// Means write code only one line

const addone1 = (num1, num2) => num1 + num2;
console.log(addone(2, 5));
// OUTPUT: -7

//                ++++++++++++++ Use Paranthesis() :- ++++++++++++++++++
const addone2 = (num1, num2) => num1 + num2;
console.log(addone(2, 5));
// OUTPUT: -7
// Use paranthesis() not write " Return" , but you can use {}curly brackets write return
