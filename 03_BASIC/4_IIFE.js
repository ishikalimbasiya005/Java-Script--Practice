// IIFE means "Immediately invoke function expression"

// Syntax :- ( //code )()

// ++++++++++++++++++++++++++++++++++++++++++++++  EXAMPLE :- 1
(function hello() {
  console.log(`hello world!`);
})();
// OUTPUT :- hello world!

// You can write one or more IIFE , so write and of IIFE "semiColon(;)"

// ++++++++++++++++++++++++++++++++++++++++++++    EXAMPLE :- 2
(() => {
  console.log(`hello , good morning!`);
})();
// OUTPUT :- hello , good morning!

// +++++++++++++++++++++++++++++++++++++++++++     EXAMPLE :- 3
((name) => {
  console.log(`hello!, ${name}`);
})("ishika");
// OUTPUT :- hello!, ishika
