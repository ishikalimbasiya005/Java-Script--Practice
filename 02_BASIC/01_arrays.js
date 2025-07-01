// ---------- Array Always define in square[] bracktes.-----------
// const Myarr = [1,2,3,4,5,"Ishika" , true] :: You can use any values
// Array always count "Index Value"
//  'shallow copies'[Heep Memory Types work] and 'deep copies'[Stack Memory type work] are used to create copies of objects or arrays.

// 1.] Push() :-
const Myarray = [1, 2, 3, 4];
Myarray.push(5);
console.log(Myarray); // OUTPUT :- [ 1, 2, 3, 4, 5 ]

// 2.] Pop() :-
const Myarray1 = [1, 2, 3, 4, 5, 6];
Myarray1.pop();
console.log(Myarray1); //OUTPUT :- [ 1, 2, 3, 4, 5 ]

// 3.] Unshift() :-
const Myarray2 = [1, 2, 3, 4, 5];
Myarray2.unshift(0);
console.log(Myarray2); //OUTPUT :- [ 0, 1, 2, 3, 4, 5 ]

// 4.] Shift() :-
const Myarray3 = [1, 2, 3, 4, 5];
Myarray3.shift();
console.log(Myarray3); //OUTPUT :- [ 2, 3, 4, 5 ]

// +++++++++++++++++++++ Questioner Types :---++++++++++++++++

// 1.] Include() :-
const array = [1, 2, 3, 4, 5];
console.log(array.includes(5)); //OUTPUT :- true

// 2.] indexof() :-
const array1 = [1, 2, 3, 4, 5];
console.log(array1.indexOf(9)); //OUTPUT :- -1
console.log(array1.indexOf(5)); //OUTPUT :- 4

// 3.] Join() :-
const array2 = [1, 2, 3, 4, 5];
const newarray = array2.join();
console.log(array1); //OUTPUT :- [ 1, 2, 3, 4, 5 ]
console.log(newarray); //OUTPUT :- 1,2,3,4,5
// This methos join 2 variables and change data type check this: ,
console.log(typeof newarray); //OUTPUT :- string ," 1st array type is Object"

// 4.] Slice() and Splice() :-
const arrayA = [1, 2, 3, 4, 5];
console.log("A ", arrayA); //This line print orignal value

const arrayB = arrayA.slice(1, 3);

console.log("A ", arrayA); // This line write Beacuse understand work of slice
console.log(arrayB); // This value print output of slice
// In Slice() work in string , "Not include 3 value" So, [1,3] value is clont 0,
// 1,2,3,4,5 = 2 ,3

const arrayC = [1, 2, 3, 4, 5];
console.log("B ", arrayC); //This line print orignal value

const arrayD = arrayC.splice(1, 3);

console.log("B ", arrayC); // This line write Beacuse understand work of splice
console.log(arrayD); // This value print output of splice
// In Splice() work in string , "include 3 value" So, [1,3] value is clont 0,
// 1,2,3,4,5 = 2 ,3 ,4
