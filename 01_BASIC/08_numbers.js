                                  // Two type define for variables :-------------------- 
                // 1.] simple
                // 2.] define New Number ,String.....


            // 1.] Simple :----
const score = 400;
console.log(score);

            // 2.] Define New NUmber:---
const balance = new Number(400);
console.log(balance);   



                         // Java-Script allow change Number Type to String Type So,
                         
// 1.] toString():
console.log(balance.toString().length);  //OUTPUT : 3

// 2.] toFixed():
 //It used like E-Commerce Website when GST number is big you define tofixed(2) so, number value make small.
console.log(balance.toFixed(3)); // OUTPUT :- 400.000

// 3.] precision():
const balance1 = 43889.7288
console.log(balance1.toPrecision(3));  // OUTPUT : 4.39e+4

// 4.] toLocalstring():
const balance2 = 100234456
console.log(balance2.toLocaleString('en-IN')); //OUTPUT : 10,02,34,456

// 5.] toExponential():
const balance3 = 1000000
console.log(balance3.toExponential()); //OUTPUT : 1e+6







