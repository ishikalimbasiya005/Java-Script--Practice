# ⚙️ JavaScript Advanced Concepts Demo

This project demonstrates key JavaScript object-oriented and low-level internal features like:

- Prototype
- Constructor Functions & `new` Keyword
- Classes (constructor, static)
- Function Binding (`bind`)
- Property Descriptors

---

## 🔍 Topics Covered

### ✅ Prototype
- Shared methods using `.prototype`
- Difference between prototype-based and object-literal structure

### ✅ Constructor & `new` Keyword
- Object creation with and without `new`
- Internals of how `new` works (creates, binds, returns object)

### ✅ Function Call with `call()`
- Pass context from one function to another
- Demonstrates `call()` with constructor chaining

### ✅ Class Concepts
- `constructor()` for initializing properties
- `static` methods directly callable on class (not instance)

### ✅ `bind()` Usage
- Fix `this` reference using `bind()` inside event listener
- Example: React-style class with `handleClick` method

### ✅ `Object.getOwnPropertyDescriptor()`
- Understand internal flags: `writable`, `enumerable`, `configurable`
- Protect or hide properties using `Object.defineProperty()`

### ✅ Looping Objects & Filtering Functions
- Show clean object values without executing or displaying methods
- Exclude non-enumerable properties using descriptors

---

## 💡 Key Takeaways

- Prototypes improve memory efficiency by sharing methods
- `new` automates object creation logic
- `static` belongs to class, not instance
- Use `bind()` to fix `this` inside event handlers
- Descriptors help control object property behavior
