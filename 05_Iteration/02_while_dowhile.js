// ++++++++++++++++++++++++++++++++++++++++++++ 1.] While LOOP :-------   ++++++++++++++++++++++++++++++++++++

// --> The condition is evaluated before the loop body is executed.
// --> If the condition is true, the loop executes.
// --> This continues until the condition becomes false.

// SYNTAX :---
// Initialization
// while (condition) {
//     // code block to be executed
// Increment/ Decrement
//   }

// 1.] EXAMPLE :---
let number = 0;

while (number <= 10) {
  console.log(`The number is : ${number}`);
  number = number + 2;
}

// 2.] EXAMPLE :---
let names = ["radha", "mira", "gopi", "sita"];

let arr = 0;
while (arr < names.length) {
  console.log(`${names[arr]}`);
  arr = arr + 1;
}

//  +++++++++++++++++++++++++++++++++++ 2.] Do_While LOOP  :-- ++++++++++++++++++++++++++++++++++++++++++++++++++

// A do...while loop executes the code block at least once, and then repeats the loop as long as the condition is true.

// SYNTAX :---
// Initialization
// do {
//     // code block to be executed
// Incerement/ Decrement
//   } while (condition);

// 1.] EXAMPLE :---
let numbers = 0;

do {
  console.log(`the number is : ${numbers}`);
  numbers++;
} while (numbers <= 10);

// 2.] EXAMPLE :---
let gods = ["radha", "sita", "parvati"];
let godarr = 0;
do {
  console.log(`${gods[godarr]}`);
  godarr++;
} while (godarr < gods.length);
