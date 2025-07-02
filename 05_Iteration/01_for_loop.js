//  ++++++++++++++++++++++++++++ Iterations OR Loops +++++++++++++++++++++++++++++++++++++++++++++++

// Jab loop chalti rahe , na ruke tab usko stop karne k liye :-- ctrl + C

// +++++++++++++++++++++++++++++++++++++++++++  FOR LOOP :---- +++++++++++++++++++++++++++++++++++++++++++++++++++

// Syntax :-------
// for (initialization; condition; Increment/Decrement) {
//     // code to execute in each iteration
//   }

// 1.] EXAMPLE :-------------
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 2.] EXAMPLE :-------------
for (let i = 0; i < 10; i++) {
  console.log(`Outer loop : ${i}`);
  for (let j = 0; j < 10; j++)
    console.log(`Inner loop : ${j} , Outer loop : ${i} `);
}

// 3.] EXAMPLE [Print Table] :-------------
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}

// 4.] EXAMPLE [Print Array] :-------------
const myArray = ["Radha", "Lakshmi", "Sita", "Parvati"];

// Check Length :--
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// +++++++++++++++++++++++++++++++++   Break [Break The Control Flow]:------------- ++++++++++++++++++++++++++++
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Stop the values 5`);
    break;
  }
  console.log(`The value of i is ${i}`);
}

// +++++++++++++++++++++++++++++++++++++++++++   Continue :--------------   +++++++++++++++++++++++++++++++++
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log(`Just Print 5`);
    continue;
  }
  console.log(i);
}
