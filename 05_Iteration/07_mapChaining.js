// Always use two variable .not work only one variables
// Map() is same  -> ForEach Loop().

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mynum = numbers.map((num) => num + 10);
console.log(mynum);
// OUTPU :-
// [
//         11, 12, 13, 14, 15,
//         16, 17, 18, 19, 20
// ]

//  ++++++++++++++++++++++++++++++++++++++ Chaining +++++++++++++++++++++++++++++++++++++++++++++=

// You can use multiple function in one time ,it's called chaining.

const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mynums = number1
  .map((num) => num * 10)
  //OUTPIT :-
  // [
  //     10, 20, 30, 40,  50,
  //     60, 70, 80, 90, 100
  //   ]

  .map((num) => num + 1)
  // OUTPUT :-
  // [
  //     11, 21, 31, 41,  51,
  //     61, 71, 81, 91, 101
  //   ]

  .filter((num) => num >= 40);
// OUTPUT :-
// [
//     41, 51,  61, 71,
//     81, 91, 101
//   ]
console.log(mynums);
