                     // TWo Type of Data-Types :--
// 1.] Primitive Data-Type
// 2/] NON- Primitive Data-Type(Reference Data-Type)


// NOTE  :-----     JavaScript is a "dynamically typed language" , 
// which means you don't have to specify the data type of a variable when you declare it. 
// The data type is determined automatically at runtime based on the value assigned to the variable.


    //++++++++++++++++++ 1.] Primitive Data-Types :-- +++++++++++++++++++++++

let name ="Ishika"; // String

let age = 20   //Number //Use for Minimum value...
let bigInt = BigInt(123456789012345678901234567890); // Number  //Use for Maximum value...

let isStudent = true //Boolean

let X = null; //Null

let Name; //Undefined

let id = Symbol("123"); //Symbol
let anotherId = Symbol("123"); //Symbol
console.log(id === anotherId); // false, because symbols are unique

                // Check Type for all so :-
//console.log(typeof name); 
// console.log(typeof null); // This is type of "OBJECT"
// console.log(typeof Name); // This is type of "UNDEFINED"
// console.log(typeof id);



    //++++++++++++++++++ 2.] NON-Primitive Data-Types :-- +++++++++++++++++++++++

let hobbies = ["reading", "writing", "coding"] //Object 

let address = { //Object
    street: "123 Main St",
    city: "New York",
    country: "USA"
}

function greet() { //Function
    console.log("Hello, World!");
}

                        // Check Type for all so :-
// console.log(typeof hobbies);
// console.log(typeof address);
// console.log(typeof greet); 



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++


            // Stack and Heap Memory in JavaScript :------------------

    // 1.] Stack Memory (Include Primitive Data-Types):--
    // - Stack memory is used for static memory allocation.
let MyName = "Ishika";
let NewName = MyName;
NewName= "Limbasiya";
console.log(MyName);  //OUTPUT :- Ishika

    //2.] Heap Memory (Include NoN-Primitive Data_Types):--
    // - Heap memory is used for dynamic memory allocation.
let USerone = {name: "Ishika"}
let USertwo = USerone; 
USertwo.name = "Limbasiya";
console.log(USerone);   //OUTPUT :- { name: 'Limbasiya' }







