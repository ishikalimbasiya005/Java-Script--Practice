// JavaScript me true or flase k alava 2 types value hoti hey :---
// 1.] Truthy
// 2.] Falsy

// +++++++++++++++++++++++++  1.] Truthy :---------------

const Email = " ";
if (Email) {
  console.log("Allowed ");
} else {
  console.log("Not Allowed");
}
// OUTPUT :-  Allowed

// ++++++++++++++++++++++++  2.] Falsy :---------------
const Emailes = "";
if (Emailes) {
  console.log("Allowed ");
} else {
  console.log("Not Allowed");
}
// OUTPUT :- Not Allowed

// List Of What is Truthy values & what is falsy values :-------------------------------------

// 1.] Falsy values :---
// -> 0
// -> -0
// -> false
// -> ""
// -> BigInt 0n
// -> null
// -> undefined
// -> NaN

// 2.] Truthy values :-----
// -> "0" or '0'
// -> "-0" or '-0'
// -> true
// -> "false"
// -> []
// -> {}
// -> function(){}
// -> " "

// ++++++++++++++++++++++++++++Check type of length is Empty or not :-----------------------
const Number = [];
if (Number.length === 0) {
  console.log("this is Empty");
} else {
  console.log("this is not empty");
}

//  +++++++++++++++++++++++++++  Check type of object empty of not :---------------------------
const emptyObject = { username: "ishika" };
if (Object.keys(emptyObject).length === 0) {
  console.log("this is Empty");
} else {
  console.log("this is not empty");
}

//  +++++++++++++++++++++++   Compare "false" in different values check in broweser:----  +++++++++++++++++++++
//               fasle == 0
//               fasle == ""
//               0 ==  ""

//  OUTPUTS :- true
