// by default , code run in line by line ,But change this flow used control flow

// +++++++++++++++++++++++++++++  1.] IF statement :--- ++++++++++++++++++++++++++++++++++++
const age = 19;
if (age >= 18) {
  console.log("You are eligible to vote.");
}
// OUTPUT :-- your age is 18 or >18 So, output is "You are eligible to vote." otherwise not show no output.

// ++++++++++++++++++++++++++++++  2.] If _ Else statment :---  ++++++++++++++++++++++++++++++++
const ages = 17;
if (ages >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are NOT eligible to vote.");
}
// OUTPUT :--your age is >=18 So, output is "You are eligible to vote." otherwise show "You are NOT eligible to vote."

// ++++++++++++++++++++++++++++++   3.] ternary Operator :----------------------  +++++++++++++++++++++++++
// The ternary operator in JavaScript is a shorthand way to write an if-else statement. It's called "ternary" because it takes three operands.

// SYNTAX :-  condition ? true : false

const price = 1000;
price <= 500 ? console.log("price is less") : console.log("price is high");
// OUTPUT :-    price is high

// +++++++++++++++++++++++++++++++++++ Basic Example Generate Error :--------- ++++++++++++++++++++++++
// const score = 30
// if(score > 20){
//     const power = "fly";
//     console.log(`score is : ${power}` );
// }
// console.log(`score is : ${power}` );
//Show Error :- this if statement is block of scope not global scope ,So last console.log() not defined

//  ++++++++++++++++++++++++++++++ Another way But Not use : ----- ++++++++++++++++++++++++++++++++++++++
const money = 1000;
if (money > 500) console.log("yes"), console.log("yes2");

// This is show output right but , This is not proper readbale So, this method is not use.

// ++++++++++++++++++++++++++++++   4.] if _ else _ if statment :-----------  +++++++++++++++++++++++++++
const mark = 82;
if (mark > 90) {
  console.log("Grade = A+");
} else if (mark > 80) {
  console.log("Grade = A");
} else if (mark > 70) {
  console.log("Grade = B");
} else if (mark > 60) {
  console.log("Grade = C");
} else if (mark > 50) {
  console.log("Grade = D");
} else if (mark > 40) {
  console.log("Grade = E");
} else {
  console.log("Grade = Fail");
}

//  +++++++++++++++++++++++++++++++++++++++ 5.] Nested If :--- +++++++++++++++++++++++++++++
let number = 1;

if (number > 0) {
  if (number % 2 === 0) {
    console.log("The number is positive and even.");
  } else {
    console.log("The number is positive but odd.");
  }
} else {
  console.log("The number is not positive.");
}
// OUTPUT :-    The number is positive but odd.

// ++++++++++++++++++++++++++++++++++++++++  6.] Use && Operator :-- ++++++++++++++++++++++++++
const DOB = true;
const Email = true;

if (DOB && Email) {
  console.log("User Can enter this website");
}

// ++++++++++++++++++++++++++++++++++++++++  7.] Use || operator :--- +++++++++++++++++++++++++++++++++
const EmailAccount = true;
const GoogleAccount = true;

if (EmailAccount || GoogleAccount) {
  console.log("enter the user ");
}

// ++++++++++++++++++++    8.]  Nullish Coalesing Operator (??) : null , Undefiend     +++++++++++++++++++++++++++
// It returns the right-hand operand only if the left-hand operand is null or undefined.
// Otherwise, it returns the left-hand operand.

// SYNTAX :-- let result = a ?? b;

// EXAMPLE :---
let num1;

num1 = 5 ?? 2; //OUTPUT :-5
num1 = null ?? 5; //OUTPUT :-5
num1 = undefined ?? 5; //OUTPUT :-5
num1 = null ?? 10 ?? 20; //OUTPUT :-10

console.log(num1);
