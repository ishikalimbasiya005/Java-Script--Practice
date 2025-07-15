class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    // return this._password.toUpperCase();
                    // OR
    return `${this._password.toUpperCase()}ishika`;
  }

  set password(value) {
    this._password = value;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }
}

const ishika = new user("ishika@gmail.com", "ishika123");
console.log(ishika.password);
console.log(ishika.email);
