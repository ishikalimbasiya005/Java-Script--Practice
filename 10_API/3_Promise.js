
// ++++++++++++++++++++++++++++++++++++++++       Promis   +++++++++++++++++++++++++++++++++++++++++++++++++++


// First Way :-----------------------
const promiseone = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Hello, your Task Are Done.");
    resolve();
  }, 1000);
});

promiseone.then(function () {
  console.log("Resolve Msg");
});



// Second Way :------------------
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Hello, your Task Are Done.");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Resolve Msg");
});



// Thired Way :----------------------------
const promisethree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ Name: "Ishika", Age: "20" });
  }, 1000);
});
promisethree.then(function (data) {
  console.log(data);
});



// Fourth Way :------------------------------
const promisefour = new Promise(function (resolve, reject) {
  let error = false; //true; --> show error message
  setTimeout(() => {
    if (!error) {
      resolve({ Name: "Ishika", Age: "20" });
    } else {
      reject("Your Task Are Not Done");
    }
  }, 1000);
});

promisefour
  .then(function (user) {
    return user.Name;
  })
  .then(function (Name) {
    console.log(Name);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Your Task Are Fully Done");
  });




//   Fifth Way :------------------------------
const promisefifth = new Promise(function (resolve, reject) {
  let error = false; //true; --> show error message
  setTimeout(() => {
    if (!error) {
      resolve({ Surname: "Limbasiya", Name: "Ishika" });
    } else {
      reject("Your Task Are Not Done");
    }
  }, 1000);
});

async function newdata() {
  try {
    const response = await promisefifth;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

newdata();




// Sixth Way [Used Fetch() ]:------------------------------

// async function fetchdata() {
//   try {
//     const response = await fetch("https://api.github.com/users/ishikalimbasiya005");

//     // Run But Not Proper Formate :---
//     // console.log(response);
//     // const data = response.json();

//     // Proper Formate :---
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchdata();


// Seventh Way [Used Fetch() ]:------------------------------
fetch("https://api.github.com/users/ishikalimbasiya005").then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error);
})