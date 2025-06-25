                        // This Is Convert One Type To Another Type :----


                        // 1] Number() :--- Convert Number to Another Type
const score = 33;
// const score = "33abc";
// const score = true;
// const score = null;
// const score = undefined;

let IsNumber = Number(score); //Synatx :- Number(), String().....

        // This Define Type :---
// console.log(typeof IsNumber); 
        // This Define Value :---
// console.log(IsNumber);


                //  ~This is the output of the above code :-------------
// 33 => 33
// 33abc => NaN(Not a Number)
// true => 1; flase => 0
// null => 0
// undefined => NaN(Not a Number)



                         // 2] Boolean() :--- Convert Boolean to Another Type :--------
const boolean= "Ishika";

let IsBoolean = Boolean(boolean);

// console.log(typeof IsBoolean);
// console.log(IsBoolean); 

                    // This is the output of the above code :-------------
// 1 => true
// 0 => false
// "" => false
// "Ishika" => true


                        // 3] String() :--- Convert String to Another Type :--------
const string = "33";

let IsString= String(string); 

console.log(typeof IsString);
console.log(IsString); 

                    // This is the output of the above code :-------------
// 33 => 33
// But you can check type use "typeof" , it convert 33 Type Is String


                         // 4.] Other Example :---
console.log("5" + 2);   //52
console.log("5" - 2);   //3
console.log(true + 1);  //2
console.log(false + 1); //1


                


