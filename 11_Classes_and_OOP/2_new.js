// +++++++++++++++++++++++++++++++++++++++++++   New KeyWord    ++++++++++++++++++++++++++++++++++++++++

// The new keyword in JavaScript is a special keyword used to create a new object from a constructor function or a class.

// 🔍 What Does the new Keyword Do?
// When you use the new keyword, it performs the following four steps:
// 1] Creates a new empty object {}.
// 2] Assigns that object to this inside the constructor function.
// 3] Calls the constructor function with the given arguments.
// 4] Returns the object assigned to this (unless the constructor explicitly returns another object).

// Example With Function :-----------
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Ishika", 20);

console.log(person1.name); // Output: Ishika
console.log(person1.age); // Output: 20



// Example With Class :-----------------

// class Student {
//   constructor(name, course) {
//     this.name = name;
//     this.course = course;
//   }
// }
// // When You can not use "new" Keyword Return Error...
// const student1 = Student("Ishika", "BCA");
// console.log(student1.name);
// console.log(student1.course);

// Note :----
// The object will not be created here, and this.name = name will be assigned to the global object (window in browsers or global in Node.js).
