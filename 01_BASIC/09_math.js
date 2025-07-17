console.log(Math);


// 1.] abs() :
const Number = -5;
console.log(Math.abs(Number));    //OUTPUT : 5

// 2.] round() :
const Number0 = 5.4;
console.log(Math.round(Number0));       // OUTPUT : 5
    // OR 
const Number1 = 5.7;
console.log(Math.round(Number1));        // OUTPUT : 6

// 3.] ceil() :
const Number2 = 5.4;
console.log(Math.ceil(Number2));        // OUTPUT : 6

// 4.] floor() :
const Number3 = 5.7;
console.log(Math.floor(Number3));       // OUTPUT : 5

// 5.] sqrt() :
const Number4 = 36;
console.log(Math.sqrt(Number4));        // OUTPUT : 6 , 6*6 = 36

// 6.] pow() :
const Number5 = 2;
console.log(Math.pow(Number5, 5));        // OUTPUT : 32 , 2*2*2*2*2 = 32

// 7.] min() & max() :
let numbers = [4, 7, 1, 9, 3];

let min1 = Math.min(...numbers);  // 1
let max1 = Math.max(...numbers);  // 9

console.log("Min:", min1);
console.log("Max:", max1);

//8.] random() :
console.log(Math.random()); // OUTPUT : Always Change (random number between 0 and 1)
console.log(Math.random() * 10); // OUTPUT : Always Change (random number between 0 and 10) 
console.log((Math.random() * 10) + 1);  // OUTPUT : Always Change (random number between 1 and 10, not 0 include) 
console.log(Math.floor(Math.random() * 10) + 1);    //OUTPUT : only Any one number print you can also use round and ceil

// OUTPUT : Always Change (random number between 21 and 30 include)
const min = 21;
const max = 30;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 


