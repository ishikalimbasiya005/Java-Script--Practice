const accountID = 12577;
let accountEmail = "ishika01@gmail.com";
var accountPassword = "12345"; //Suggestion: use let or const instead of var
sccountCity = "jaipur";
let accountState; // This called undefined value

// Change the value :------------

// accountID = 2;    //Not Allowed
accountEmail = "ishika007@gmail.com";
accountPassword = "121212";
accountcity = "Surat";

// only print one value
console.log(accountID);

// When you can print multiple value use this :-
console.table([
  accountID,
  accountEmail,
  accountPassword,
  accountcity,
  accountState,
]);
