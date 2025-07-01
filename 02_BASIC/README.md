# 📘 JavaScript Array & Object Notes

This document includes short notes and examples of important JavaScript concepts such as arrays, objects, methods, and more.

---

## 📚 Array Basics

- Arrays are defined using square brackets `[]`.
- They can contain mixed types: numbers, strings, booleans, etc.
- Arrays are zero-indexed.

### 🔁 Common Methods:

| Method        | Description                             | Example Output                   |
|---------------|-----------------------------------------|----------------------------------|
| `push()`      | Adds to end                             | `[1, 2, 3, 4, 5]`                |
| `pop()`       | Removes from end                        | `[1, 2, 3, 4]`                   |
| `unshift()`   | Adds to beginning                       | `[0, 1, 2, 3, 4, 5]`             |
| `shift()`     | Removes from beginning                  | `[2, 3, 4, 5]`                   |

---

## ❓ Question-Like Methods

- `includes(5)` → `true`
- `indexOf(9)` → `-1`
- `join()` → Converts array to string: `"1,2,3,4,5"`

---

## ✂️ Slice vs Splice

| Method   | Affects Original? | Description                      |
|----------|-------------------|----------------------------------|
| `slice(1, 3)` | ❌ No         | Returns new array: `[2, 3]`      |
| `splice(1, 3)`| ✅ Yes        | Removes 3 items: `[2, 3, 4]`     |

---

## 🧘‍♂️ Combine & Flatten

- `push(array)` → adds array as single element
- `concat(array)` → combines arrays (single level)
- `...spread` → merges arrays with multiple values
- `flat(depth)` → flattens nested arrays

---

## 🧪 Type Checking

| Method             | Output                        |
|--------------------|-------------------------------|
| `Array.isArray("str")` | `false`                  |
| `Array.from("abc")`    | `['a','b','c']`          |
| `Array.of(a, b)`       | `[a, b]`                 |

---
## Other Program included :
## Singleton Pattern
## Symbols
## Objects :
  - 1.  Object Literal
    2.  Object Constructor
    3.  Array of Objects
    4.  Object Destructuring etc.

**✨ Happy Coding! ✨**

