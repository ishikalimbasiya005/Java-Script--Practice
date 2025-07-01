// "SINGLETONE" :--------------
// In JavaScript, a singleton is a design pattern that ensures only one instance of a class or object is created throughout the application.
// Only one object is created, and the same object is used everywhere.

// EXAMPLE :---

const KingOfCodeLand = (function () {
  let king;

  function createKing() {
    console.log("👑 New King Is Created..");
    return { name: "King JavaScript" };
  }

  return {
    getKing: function () {
      if (!king) {
        king = createKing();
      } else {
        console.log("🤴 Show Old King..!");
      }
      return king;
    },
  };
})();

//OUTPUT :----

// पहला राजा:
const king1 = KingOfCodeLand.getKing();
// Output: 👑 New King Is Created..

// कोई और राजा बनने आया:
const king2 = KingOfCodeLand.getKing();
// Output: 🤴 Show Old King..!

console.log(king1 === king2); //OUTPUT :- true

// -----------------------------Example of Sybol How to define :--------------

const myname = Symbol("key1");

const jsuser = {
  name: "ishika",
  "full name": " limbasiya ishika bharatbhai",
  [myname]: "Ishika",
};
console.log(jsuser);
//OUTPUT :---
// {
//     name: 'ishika',
//     'full name' : ' limbasiya ishika bharatbhai',
//     [Symbol(key1)]: 'Ishika'
//  }

//   Check Types :--
console.log(typeof [myname]); //OUTPUT :- object
console.log(typeof jsuser[myname]); //OUTPUT :- string
console.log(typeof myname); //OUTPUT :- symbol

// --------------------------TWo type of Object Declaration :---
// 1.]Object Literals
// 2.]Object consructor

//------------------------------- 1.] Object Literals :------

const jsusers = {
  name: "Ishika",
  "full name": "ishika patel",
  age: 19,
  email: "ishika@google.com",
  isLogged: "false",
  LoggedDays: ["Monday", "Saturday"],
};
//---------- Changed the Values:-
jsusers.email = "ishika@gmail.com";
console.log(jsuser);
// -----------Value is Freeze :--
Object.freeze(jsuser);
jsuser.email = "ishika055@gmail.com"; //Not Print This Value beacuse this value is freeze

console.log(jsusers);
// OUTPUT :--
//   {
//     name: 'Ishika',
//     age: 19,
//     email: 'ishika@gmail.com',
//     isLogged: 'false',
//     LoggedDays: [ 'Monday', 'Saturday' ]
//   }

// Not Write This Method:-
console.log(jsusers.email);
// Write This method :-
console.log(jsusers["email"]);
console.log(jsusers["full name"]);

//-------------------------------- Function Greeting :----
// you can use greeting so, you can "not write freeze" , another value return undefined
const user = {
  name: "ishika",
  age: 19,
};
console.log(user); //OUTPUT :-{ name: 'ishika', age: 19 }

// 1st Method :-
user.greeting = function () {
  console.log("Hello js user");
};
console.log(user.greeting); //OUTPUT :- [Function (anonymous)]
console.log(user.greeting()); //OUTPUT :-  Hello js user

// 2nd Method :-
user.greetingTwo = function () {
  console.log(`Hello js user,${this.name}`);
};
console.log(user.greetingTwo); //OUTPUT :- [Function (anonymous)]
console.log(user.greetingTwo()); //OUTPUT :-  Hello js user,ishika
