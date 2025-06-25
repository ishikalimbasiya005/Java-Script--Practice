
//Use Date.Now() :--
const MyDate = Date.now();
console.log(MyDate);
//Output :- 1744413473666[Current Time Convert into MilliSecond]

// You can use both "date.now() & new Date()"

// Use new Date() :--
const myDate = new Date();

console.log(myDate); //Not Current Date is Proper Readable
console.log(myDate.toISOString()); // It return date in ISO format,Same for Current date
console.log(myDate.toJSON());
       // OUTPUT :- 2025-04-11T15:16:49.996Z
        //Above Same Output for Current Date But not proper Readbale


console.log(myDate.toString()); 
    //Current Date  is Readable  use toString()
    // OUTPUT :- Fri Apr 11 2025 23:16:49 GMT+0800 (Australian Western Standard Time)


console.log(myDate.toDateString()); 
// It reaturn only date ,readbale
// OUTPUT :- Fri Apr 11 2025

console.log(myDate.toLocaleString()); 
// It return date in Local format,Proper Readable 
// OUTPUT :- 11/4/2025, 11:16:49 pm

console.log(myDate.toLocaleDateString());
// It return date in Local format,Proper Readable
// OUTPUT :- 11/4/2025


                    //++++++++Find Date Type ++++++++++++ 
console.log(typeof myDate);                 //OUTPUT :- Object


    //++++++++++++++++++++ Create Our date and time ++++++++++++++++++++
const Currentdate = new Date(2025 , 0 , 12)
console.log(Currentdate.toString());
//Date Month start in 0 
// OUTPUT :- Sun Jan 12 2025 00:00:00 GMT+0800 (Australian Western Standard Time)

// Date Return with Time :-----
const DateTime = new Date(2025 , 4, 12 , 7, 3)
console.log(DateTime.toLocaleString());
//OUTPUT :- 12/05/2025, 7:03:00 am

// Create MM-DD-YY or YY_MM_DD :------
const CreateDate = new Date("2023-04-12") //you can also use "dd-mm--yy formate"
console.log(CreateDate.toLocaleString());
// OUTPUT :- 12/04/2023, 8:00:00 am

// Give Date -Time in millisecond :----
const Getdate = new Date(2023,2,14);
console.log(Getdate.getTime());       
//OUTPUT :- 1678723200000
//Convert into Millisecond ,This is not Write with "Date.now()" and (2023-02-14).....

// ===========Convert Into the Seconds ==============
// Use /1000 So, Convert Millisecond to Second 
// Remove the value after the (.) so use, Math.floor ,You can use round but Not Use ceil
console.log((Math.floor(Date.now()/1000)));


// Give Proper Month ,Date, Year Use ".get" :-----
const GetDate1 = new Date();
console.log(GetDate1.getDate()); //OUTPUT :- 12 // Start 1 
console.log(GetDate1.getMonth()); //OUTPUT :-3 , Month is 4 return 3 beacuse, start "0"
console.log(GetDate1.getDay()+1);     //OUTPUT :- 7 //Start "0", in sunday ,monday....., no 6 return 7
console.log(GetDate1.getFullYear()); //OUTPUT:- 2025
console.log(GetDate1.getHours());      //OUTPUT :- 9
console.log(GetDate1.getMilliseconds());        //OUTPUT :-961
console.log(GetDate1.getMinutes());     //OUTPUT :- 11
console.log(GetDate1.getSeconds());     //OUTPUT:- 27

// So,you can use many Millisecond,Second etc.....

// Short value Use :---------
const GetDate2 = new Date(2025, 3, 12); // April 12, 2025
const dayShort = GetDate2.toLocaleString('default', {
    weekday: "narrow"
});
console.log(dayShort);

// Also Use This :---
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const newDate = new Date();
console.log(`Today is: ${days[newDate.getDay()]}`);













