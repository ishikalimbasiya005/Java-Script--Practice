//  +++++++++++++++++++++++++ without call function ++++++++++++++++++++++++++++++++++

//  function sayhello(username){
//     this.username = username
//     console.log("called");

// }

//  function hello(username ,email , password) {
//         sayhello(username);

//         this.email = email,
//         this.password = password
// }

// const ourmsg = new hello("ishika" , "ishika@gmail.com" , "ishika123")
// console.log(ourmsg);

// OUTPUT :---
//  called
// hello { email: 'ishika@gmail.com', password: 'ishika123' }



// +++++++++++++++++++++++++++ with call function ++++++++++++++++++++++++++++++++++

function sayhello(username) {
  this.username = username;
  console.log("called");
}

function hello(username, email, password) {
  sayhello.call(this, username);

  (this.email = email), (this.password = password);
}

const ourmsg1 = new hello("ishika", "ishika@gmail.com", "ishika123");
console.log(ourmsg1);

// OUTPUT :------
// called
// hello {
//   username: 'ishika',
//   email: 'ishika@gmail.com',
//   password: 'ishika123'
// }
