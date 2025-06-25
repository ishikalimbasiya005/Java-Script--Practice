
//Example of Concatenate String :-
const name= "Ishika";
const age= 20;
console.log(`Hello My Name is ${name} and I am ${age} years old`);


            // NOTE :-----
// Never use this syntax :-
// ([console.log("my name is "+ name + " and I am " + age + " years old");])


                                  // Second Type to define string :-

const MyName = new String ('ishika');
console.log(MyName);

// Check key value:-
console.log(MyName[0]);

//check prototype :- More Information chack using browesr console screen .....
console.log(MyName.__proto__);


                                //Check another Functions :-----------------------------

// 1.]charAt() :
console.log(MyName.charAt(3));

// 2.] toUpperCase():
console.log(MyName.toUpperCase());

// 3.] toLowerCase():
console.log(MyName.toLowerCase());

// 4.]length:
console.log(MyName.length);

// 5.]indexOf():
console.log(MyName.indexOf('i'));   //It define first character index of 'i' in string

// 6.] lastIndexOf():
console.log(MyName.lastIndexOf('i'));  //It define last character index of 'i' in string


// 7.] substring():
// It same slice but "not accept nagetive value" , and it set value automatic when you define "end to  start"
// It start first character and count Index value 0
const MyName1 = "Ishika";
console.log(MyName.substring(5,2)); //Not count last value

// 8.] slice():
//include nagetive value , but not set automatically when you define "end to start" it return empty
// it start index value 0 but negative value start last character and count -1...
const MyName2 = "Ishika";
console.log(MyName.slice(-2,5)); //Not count last value

// 9.] trim() :
const city = "    Surat    ";
console.log(city); //Print with space
console.log(city.trim()); //Remove space in string

// 10.] replace():
const url = "https://ishika003/ishika%20patel";
console.log(url.replace('%20', '-'));

// 11.]split():
const str = "Ishika Patel";
console.log(str.split(" ")); // change string to array


// 12.] match():
const str1 = "ishika patel";
console.log(str1.match("ishika"));  // when not match so it return null

// 13.] search():
const str2 = "ishika patel";
console.log(str2.search("patel")); // when not match so it return -1


// 14.] substr():
const str3 = "Ishika Limbasiya";
console.log(str3.substr(6, 10)); // it start from 0 index and count number given actuall length

//15/ ]Link():
const str4 = "Ishika Patel";
console.log(str4.link("https://ishika003")); //It return link with string


// Another String function avaliable in javascript you can learn for "javascript string function mdn....."
