

// +++++++++++++++++++++++++++++++++   Prototype    ++++++++++++++++++++++++++++++++++++

// A prototype is an object that contains methods and properties which are shared by all objects created from that function.

// With Prototype :----------
function Person1(name) {
  this.name = name;
}

Person1.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

const p1 = new Person1("Ishika");
p1.sayHello(); 


// Without Prototype :---------
const person = {
  name: "Ishika",
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  }
};

person.sayHello();  


