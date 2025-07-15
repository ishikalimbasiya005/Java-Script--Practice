// -------------------------------------🔹 class क्या है?  ----------------------------------------
// JavaScript में class एक blueprint है जिससे आप object बना सकते हो। जैसे template।
// Example :--------
//          class Car {
                  // properties and methods यहाँ होंगे
//          }



// -------------------------------------  🔹 constructor क्या है?  ------------------------------------
// constructor() एक special method है जो object बनते समय अपने आप call होता है। इसमें आप object की initial values set कर सकते हो।
// Example :----------------
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  showDetails() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  }
}
const myCar = new Car("Toyota", "Innova");
myCar.showDetails();  
// Output: Brand: Toyota, Model: Innova



// -----------------------------------------🔹 static क्या है?   ---------------------------------
// static method/class property को object से नहीं, class से directly call किया जाता है। ये method object पर नहीं, class पर apply होता है।
// Example :--------------
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathHelper.add(10, 20));  // Output: 30

// ये काम नहीं करेगा:
// const helper = new MathHelper();
// helper.add(10, 20); ❌

// 🔹 Real-Life Static Example:----------------------
class Calculator {
  static add(a, b) {
    return a + b;
  }

  static sub(a, b) {
    return a - b;
  }
}

console.log(Calculator.add(5, 3));  // 8
console.log(Calculator.sub(10, 4)); // 6



