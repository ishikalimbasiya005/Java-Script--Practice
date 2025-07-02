// Use redue Like Shoping website :-- Make The Bill.

const numbers = [1, 2, 3];

const mynum = numbers.reduce(function (acc, curr) {
  console.log(`acc : ${acc} and curr : ${curr}`);
  return acc + curr;
}, 0);
console.log(mynum);

// OUTPUT :-
// acc : 0 and curr : 1
// acc : 1 and curr : 2
// acc : 3 and curr : 3
// 6

//  ++++++++++++++++++++++++++++++++  Use The same in (=> arrow function)  : +++++++++++++++++++++++++++++++

const nums = [1, 2, 3];

const mynums = nums.reduce((acc, curr) => acc + curr, 0);
console.log(mynums);

// OUTPUT :- 6

// +++++++++++++++++++++++++++++++++++++ Another Example ++++++++++++++++++++++++++++++++++++++++++++++++

const myshopping = [
  {
    item: "apple",
    price: 900,
  },
  {
    item: "Mango",
    price: 2200,
  },
  {
    item: "Orange",
    price: 500,
  },
];

const Bill = myshopping.reduce((acc, itemname) => acc + itemname.price, 0);
console.log(Bill);
