const Name = new Object();
const Name1 = {};
console.log(Name);
console.log(Name1);

//OUTPUT BOTH :- {}

//------------------------ 2.] Object Constructor :--------
// Example 1 :---
const student = new Object();
student.id = "123abc";
student.age = 19;
student.email = "ishika@gmail.com";
console.log(student);
//OUTPUT :-  { id: '123abc', age: 19, email: 'ishika@gmail.com' }

// Example 2:---
const Username = {
  email: "ishika123@gmail.com",
  fullname: {
    lastname: {
      name: "ishika",
      age: 19,
    },
  },
};
console.log(Username.fullname.lastname.name); //OUTPUT :- ishika
// //You can use(.) and show values as your wish..

// Example 3:---
const number1 = {
  a: "1",
  b: "2",
};
const number2 = {
  c: "3",
  d: "4",
};
const number3 = {
  e: "5",
  f: "6",
};

// const number4 = Object.assign({},number1,number2,number3)
//'OR'
const number4 = { ...number1, ...number2, ...number3 };
console.log(number4);
//OUTPUT :-   { a: '1', b: '2', c: '3', d: '4', e: '5', f: '6' }

console.log(number1, number2, number3);
//OUTPUT :- { a: '1', b: '2' } { c: '3', d: '4' } { e: '5', f: '6' }

// Example 4 [ARRAY OF OBJECT]:-----
const Myuser = [
  {
    name: "radha",
    age: "19",
  },
  {
    name: "gopi",
    age: "20",
  },
  {
    name: "lakshmi",
    age: "18",
  },
];

console.log(Myuser);
//OUTPUT :-
// [
//     { name: 'radha', age: '19' },
//     { name: 'gopi', age: '20' },
//     { name: 'lakshmi', age: '18' }
// ]

console.log(Myuser[1].name);
// OUTPUT :-
// gopi

console.log(Object.keys(Myuser));
//OUTPUT :-
// [ '0', '1', '2' ]

console.log(Object.values(Myuser));
// OUTPUT:-
// [
//     { name: 'radha', age: '19' },
//     { name: 'gopi', age: '20' },
//     { name: 'lakshmi', age: '18' }
// ]

console.log(Object.entries(Myuser));
// OUTPUT :-
// [
//   [ '0', { name: 'radha', age: '19' } ],
//   [ '1', { name: 'gopi', age: '20' } ],
//   [ '2', { name: 'lakshmi', age: '18' } ]
// ]

console.log(number1.hasOwnProperty("a"));
//OUTPUT :- true
// This is not work in Array of object or Object k ander Objects

// ++++++++++++++++++++++++++    Object Dstructure :--    -+++++++++++++++++++++++++++++++
const Users = {
  Book: "Nani Ma ki kahani",
  Price: "200",
  email: "story@gmail.com",
};

// 1.] 1st Way :--
const { email, Price } = Users;
console.log(email, Price);

// 2.] 2nd Way :- you can use your own value ,convert   name long to short
const { email: myemail } = Users;
console.log(myemail);

// OR

console.log(Users.email);
