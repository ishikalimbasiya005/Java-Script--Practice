
// Example 1 :--------------------
console.log(Math.PI);

Math.PI = 5;
console.log(Math.PI);
// Output :- 3.141592653589793
// You can not change the value of Math.PI because it is a read-only property.

const ourvalue = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(ourvalue);
// Output :
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }


// Example 2 :--------------------------------------
const details ={
    name : "ishika",
    age : "20",
}

console.log(Object.getOwnPropertyDescriptor(details));
// Output : Undefined
// Because the object is not a built-in object like Math, so it does not have any property descriptor.

console.log(Object.getOwnPropertyDescriptor(details, "name"));
// Output :-
// {
//   value: 'ishika',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// You can change the property values True  --> False 


// Example 3 :--------------------------------------

Object.defineProperty(details,"name",{
    writable  :false,
    enumerable : false,
})
console.log(Object.getOwnPropertyDescriptor(details, "name"));
// Output :--
// {
//   value: 'ishika',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

// Example 4:------------------------------------------

// 1] RONG Way :--
const detail ={
    name : "ishika",
    age : "20",
    ourfunction : function(){
        console.log("This output is rong way");
    }
}
for (const [key,value] of Object.entries(detail)) {
    console.log(`${key} : ${value}`);
}
// Output :--
// name : ishika
// age : 20
// ourfunction : function(){
//         console.log("This output is rong way");
//     }

// Note :-- this code is rong beacuse output show only pair(key,value) not show function output

// 2] RONG Way :--
const details2 ={
    name : "ishika",
    age : "20",
    City : "Suart",
    ourfunction : function(){
        console.log("This output is rong way");
    }
}   

for (const [key,value] of Object.entries(details2)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);   
    }
}
// Output :--
// name : ishika
// age : 20
// City : Suart

// Example 5 :---------------------------
const details3 ={
    name : "ishika",
    age : "20",
    City : "Suart",
    ourfunction : function(){
        console.log("This output is rong way");
    }
}   
Object.defineProperty(details3,"name",{
    enumerable : false,
})
console.log(Object.getOwnPropertyDescriptor(details3, "name"));

for (const [key,value] of Object.entries(details3)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);   
    }
}
// Output :-----
// Note :- name is not define because we set enumerable to false, so it is not show in output
// {
//   value: 'ishika',
//   writable: true,
//   enumerable: false,
//   configurable: true
// }
// age : 20
// City : Suart



