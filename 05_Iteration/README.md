# 📘 JavaScript Iterations & Loops (Complete Guide)

---

## 🔁 1. For Loop

- A control structure that runs a block of code a specific number of times.
- Syntax: `for (initialization; condition; increment/decrement)`
- Best when the number of iterations is known in advance.

---

## 🔁 2. While Loop

- Executes a block of code as long as a given condition is true.
- The condition is checked **before** each iteration.
- Useful when the number of iterations is not known.

---

## 🔁 3. Do...While Loop

- Executes the block of code **at least once**, then checks the condition.
- The condition is evaluated **after** each iteration.
- Best used when you want the loop to run at least once.

---

## 🔁 4. For...of Loop

- Used to iterate over **iterables** like arrays, strings, maps, sets.
- Does **not** work on plain objects directly.
- Syntax: `for (const item of iterable)`

---

## 🔁 5. For...in Loop

- Used to iterate over the **enumerable properties** of an object.
- Also works with arrays but returns the index (as string).
- Syntax: `for (const key in object)`

---

## 🔁 6. forEach() Method

- Executes a callback function once for each array element.
- Parameters include: item, index, array.
- Does **not return** a new array.
- Does **not support** break or continue.
- Best used for running side effects (e.g., logging).

---

## 🔁 7. filter() Method

- Creates a **new array** with all elements that pass a test function.
- Returns values that meet the specified condition.
- Supports return statements, unlike `forEach()`.
- Commonly used for filtering arrays based on conditions.

---

## 🔁 8. map() Method

- Returns a **new array** by applying a function to each array element.
- Each element is transformed and returned in the same index.

---

## 🔗 9. Chaining

- Combines multiple array methods (like `map()`, `filter()`) in a single expression.
- Improves code readability and conciseness.
- Runs in the order written, top to bottom.

---

## 🔁 10. reduce() Method

- Reduces all elements of an array to a **single value** (e.g., sum, total).
- Accepts two parameters: accumulator and current value.
- Useful in scenarios like bill totals, combined scores, etc.

---

## ⚠️ Additional Notes

- `break` → Terminates a loop entirely.
- `continue` → Skips the current iteration and moves to the next.
- `forEach()` cannot be broken or returned from early.
- `for...of` works on iterable values (array, string, Map).
- `for...in` works on object keys (property names).
- `map()` and `filter()` return new arrays; `forEach()` does not.

---

🎉 **Happy Coding!**
