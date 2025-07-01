// SYNTAX :--     function(){}

// Basic Example Of Function:---
function UserName() {
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("I");
  console.log("K");
  console.log("A");
}
UserName();

// Sum of function :--

// 1.] 1st way :---   RONG WAY
function Numbers(number1, number2) {
  console.log(number1 + number2);
}
Numbers(); //Show Output :-NaN
const numbers = Numbers(2, 5); //Show Output :- 7
console.log("Numbers", numbers); //Show data-type :- undefind

// 2.] 2nd way :--- RIGHT WAY
function TwoNumbers(number1, number2) {
  let results = number1 + number2;
  return results;

  // OR

  return number1 + number2;
}
TwoNumbers();
const results = TwoNumbers(2, 5);
console.log("Result :", results);

// Print Name :-
function Myname(name) {
  return `${name} This Is My Name!`;
}
Myname("Ishika"); //Not write consol.log so, this function is not store value ,so direct write console.log
console.log(Myname("Ishika")); //Show output :- Ishika This Is My Name!
console.log(Myname("")); //Show Output :- This Is My Name!
// // You can not pass any argument so ,it return Undefind ..
console.log(Myname()); //Show Output :- undefined This Is My Name!

// Example , used with if statment :-

function iname(myname) {
  //   if (myname === undefined)
  // OR
  if (!myname) {
    console.log("please enter the name!"); //OUTPUT :- please enter the name!
    return;
  }
  return `${myname} This Is My Name!`;
}
console.log(iname()); //OUTPUT :--  undefined

// you can write any value like :--

function name(myname = "me") {
  //   if (myname === undefined)
  // OR
  if (!myname) {
    console.log("please enter the name!");
    return;
  }
  return `${myname} This Is My Name!`;
}
console.log(name("ishika")); //OUTPUT :- ishika This Is My Name! ,
//  Not defiend name so it return "me This Is My Name!"

//  Print multiple value :--
function calculator(num1) {
  return num1;
}
console.log(calculator(2)); //OUTPUT :-2

function calculator1(num1) {
  return num1;
}
console.log(calculator1(2, 3, 4, 5)); //Output :-2

// Solve this problem using
//   :----------------
function calculator2(...num1) {
  return num1;
}
console.log(calculator2(2, 3, 4, 5)); //OUTPUT :- [ 2, 3, 4, 5 ]

//Function using objects :--
const user = {
  username: "ishika",
  age: "19",
};
function users(myuser) {
  console.log(`user name is ${myuser.username} , she's age is ${myuser.age}`);
}
// users(user)
// OR
users({ username: "radha", age: 19 });

// Function using array :-----
const myarray = [200, 400, 500];

function returnarray(getarray) {
  return getarray[1];
}

console.log(returnarray(myarray));
// OR
console.log(returnarray([200, 400, 600]));
