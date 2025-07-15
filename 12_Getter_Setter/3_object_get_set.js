const user = {
  _email: "ishika005@gmail.com",
  _password: "ishika12345",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const obj = Object.create(user);
console.log(obj.email);
