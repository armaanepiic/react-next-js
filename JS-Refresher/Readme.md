# JavaScript Refresher Guide

A comprehensive guide covering essential JavaScript concepts with practical examples. This guide is perfect for preparing for React Engineer interviews and strengthening your JavaScript fundamentals.

---

## Table of Contents
1. [Variables & Scope](#variables--scope)
2. [Functions](#functions)
3. [Primitive vs Reference Values](#primitive-vs-reference-values)
4. [Array Methods](#array-methods)
5. [Object Operations](#object-operations)
6. [Loops & Iteration](#loops--iteration)
7. [Spread & Rest Operators](#spread--rest-operators)
8. [Truthy & Falsy Values](#truthy--falsy-values)
9. [Destructuring](#destructuring)
10. [Optional Chaining & Nullish Coalescing](#optional-chaining--nullish-coalescing)
11. [Async/Await](#asyncawait)

---

## Variables & Scope

### Understanding `let`, `const`, and block scope

```javascript
let lang = "Javascript";

function learn(topic) {
    lang = topic; // modifies outer variable
    
    if (true) {
        const a = { name: 'BMW', id: '456' };
        a.id = 1236; // can modify object properties
        console.log(a.id); // 1236
    }
    
    console.log(`I am learning ${lang}`);
}

learn("C"); // I am learning C
console.log(`I know ${lang}`); // I know C
```

**Key Points:**
- `let` allows reassignment
- `const` prevents reassignment but allows object mutation
- Block scope (`{}`) contains variables

---

## Functions

### 1. Regular Function

```javascript
function hello() {
    console.log("Hello World");
    return undefined; // implicit if no return
}

hello(); // Hello World
let message = hello(); // undefined
```

### 2. Function Expression

```javascript
const hello = function(message) {
    console.log(`Hello ${message}`);
};

hello("world"); // Hello world
```

### 3. Named Function Expression

```javascript
const hello = function hello(message) {
    console.log(`Hello ${message}`);
};

hello("World"); // Hello World
```

### 4. Arrow Function

```javascript
// With block
const hello = (message) => {
    console.log(`Hello ${message}`);
};

// Single expression (implicit return)
const age = (currentAge) => ++currentAge;
console.log(age(4)); // 5

// Returning object (wrap in parentheses)
const obj = () => ({
    a: 5,
    b: 6
});
console.log(obj()); // { a: 5, b: 6 }
```

### 5. Anonymous Function

```javascript
function hello() {
    return () => {
        console.log(`I am an anonymous function`);
    };
}

const anonymousFunc = hello();
anonymousFunc(); // I am an anonymous function
```

### 6. Event Handler

```javascript
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    alert("Hello");
});
```

---

## Primitive vs Reference Values

### Understanding Copy Behavior

**Primitive types** (string, number, boolean, null, undefined, symbol, bigint) are copied by value.

**Reference types** (objects, arrays, functions) are copied by reference.

### Copying Objects

```javascript
let person1 = { name: "Alice", age: 25 };

// ❌ Reference copy (both point to same object)
let person2 = person1;
person2.age = 15;
console.log(person1.age); // 15 (modified!)

// ✅ Shallow copy methods:

// 1. Spread operator
let person3 = { ...person1 };

// 2. Object.assign()
let person4 = Object.assign({}, person1);

// 3. Modern: structuredClone (deep copy)
let person5 = structuredClone(person1);

person3.age = 30;
console.log(person1.age); // 25 (not modified)
```

### Copying Arrays

```javascript
let arr1 = [1, 2, 3];

// ❌ Reference copy
let arr2 = arr1;
arr2[0] = 4;
console.log(arr1); // [4, 2, 3] (modified!)

// ✅ Shallow copy methods:

// 1. Spread operator
let arr3 = [...arr1];

// 2. slice() method
let arr4 = arr1.slice();

// 3. Array.from()
let arr5 = Array.from(arr1);

arr3[0] = 10;
console.log(arr1[0]); // 4 (not modified)
```

---

## Array Methods

### 1. `find()` - Returns first matching element

```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const result = fruits.find((fruit) => fruit === "Orange");
console.log(result); // "Orange"
```

### 2. `findIndex()` - Returns index of first match

```javascript
const index = fruits.findIndex((fruit) => fruit === "Apple");
console.log(index); // 3
```

### 3. `filter()` - Returns array of all matches

```javascript
const numbers = [10, 13, 15, 18, 26, 29, 48];
const evens = numbers.filter((number) => number % 2 === 0);
console.log(evens); // [10, 18, 26, 48]
```

### 4. `slice()` - Returns shallow copy of portion (non-mutating)

```javascript
const result = fruits.slice(1, 4);
console.log(result); // ["Orange", "Lemon", "Apple"]
console.log(fruits); // Original unchanged
```

### 5. `splice()` - Adds/removes elements (mutating)

```javascript
const fruitsCopy = [...fruits];
const removed = fruitsCopy.splice(1, 3, "Papaya", "Watermelon");
console.log(removed); // ["Orange", "Lemon", "Apple"]
console.log(fruitsCopy); // ["Banana", "Papaya", "Watermelon", "Mango"]
```

### 6. `concat()` - Merges arrays (non-mutating)

```javascript
const result = fruits.concat("Papaya");
console.log(result); // [...fruits, "Papaya"]
console.log(fruits); // Original unchanged
```

### 7. `push()` - Adds to end (mutating)

```javascript
const length = fruits.push("Watermelon");
console.log(length); // New array length
console.log(fruits); // Modified array
```

### 8. `map()` - Transforms each element

```javascript
const result = fruits.map(fruit => fruit + "$");
console.log(result); // ["Banana$", "Orange$", ...]
console.log(fruits); // Original unchanged
```

### 9. `reduce()` - Reduces array to single value

```javascript
const numbers = [2, 2, 2, 2, 2];
const total = numbers.reduce((sum, acc) => sum + acc);
console.log(total); // 10
```

### 10. `forEach()` - Executes function for each element

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((e) => console.log(e));
// Logs: 1, 2, 3, 4, 5
```

---

## Object Operations

### Working with Objects

```javascript
const language = {
    name: "Javascript",
    year: 1995,
    creator: "Brendan Eich"
};

// Get all keys
const keys = Object.keys(language);
console.log(keys); // ["name", "year", "creator"]

// Get all values
const values = Object.values(language);
console.log(values); // ["Javascript", 1995, "Brendan Eich"]

// Get key-value pairs
const entries = Object.entries(language);
console.log(entries);
// [["name", "Javascript"], ["year", 1995], ["creator", "Brendan Eich"]]

// Dynamic property modification
language.popularity = "100%";
let property = "version";
language[property] = 22.24;
console.log(language);
// { name: "Javascript", year: 1995, creator: "Brendan Eich", 
//   popularity: "100%", version: 22.24 }
```

---

## Loops & Iteration

### `for...of` - Iterates over values

```javascript
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
    console.log(num); // 1, 2, 3, 4, 5
}

const name = "Bangladesh";
for (let char of name) {
    console.log(char); // B, a, n, g, l, a, d, e, s, h
}
```

### `for...in` - Iterates over keys/indices

```javascript
const obj = {
    name: "arman",
    age: 28
};

for (let key in obj) {
    console.log(`${key} = ${obj[key]}`);
}
// name = arman
// age = 28

// Also works with arrays (gives indices)
for (let index in numbers) {
    console.log(numbers[index]);
}
```

---

## Spread & Rest Operators

### Spread Operator (`...`) - Expands elements

```javascript
// Arrays
const fruits = ["Banana", "Orange", "Lemon"];
const basket = [...fruits];
basket[0] = "Apple";
console.log(fruits[0]); // "Banana" (unchanged)

// Objects
const language = {
    name: "Python",
    year: 1987
};
const copy = { ...language };
copy.name = "JS";
console.log(language.name); // "Python" (unchanged)

// ⚠️ Shallow copy warning
const languages = [
    { name: "Javascript", year: 1995 },
    { name: "Python", year: 1987 }
];
const newLanguages = [...languages];
newLanguages[0].name = "arman";
console.log(languages[0].name); // "arman" (modified!)
// Use structuredClone() for deep copy
```

### Rest Operator (`...`) - Collects remaining arguments

```javascript
function sum(text, ...numbers) {
    const result = numbers.reduce((sum, num) => sum + num, 0);
    console.log(`${text} ${result}`);
}

sum("The sum is =", 1, 2, 3, 4, 5); // The sum is = 15
```

---

## Truthy & Falsy Values

### Falsy Values (8 total)

```javascript
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

// Filter out falsy values
const values = [0, 1, "", "hello", null, undefined, false, 42, NaN];
const truthyOnly = values.filter(Boolean);
console.log(truthyOnly); // [1, "hello", 42]
```

### Testing Values

```javascript
if (!NaN) {
    console.log("falsy"); // This executes
} else {
    console.log("truthy");
}

// Ternary operator
const a = 6;
console.log(a % 2 === 0 ? "even" : "odd"); // "even"
```

---

## Destructuring

### Object Destructuring

```javascript
const user = {
    id: 30,
    name: "arman",
    age: 29,
    education: {
        degree: "Graduate",
        school: {
            nameOfSchool: "CCPC"
        }
    }
};

// Basic destructuring
const { name, age } = user;
console.log(name, age); // arman 29

// Nested destructuring
const { education } = user;
console.log(education.degree); // Graduate

// Deep nested with default values
const { education: { degree } = {} } = user;
console.log(degree); // Graduate

const { education: { school: { nameOfSchool } = {} } = {} } = user;
console.log(nameOfSchool); // CCPC
```

### Array Destructuring

```javascript
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first); // red
console.log(second); // green
```

---

## Optional Chaining & Nullish Coalescing

### Optional Chaining (`?.`) - Safe property access

```javascript
const user = {
    id: 30,
    name: "arman",
    education: {
        school: {
            nameOfSchool: "CCPC"
        }
    }
};

// Safe access (no error if property doesn't exist)
console.log(user?.education?.school?.nameOfSchool); // "CCPC"
console.log(user?.address?.city); // undefined (no error)
```

### Nullish Coalescing (`??`) - Default for null/undefined

```javascript
// Returns right side ONLY if left is null or undefined
let lang = undefined;
console.log(lang ?? "JavaScript"); // "JavaScript"

lang = null;
console.log(lang ?? "JavaScript"); // "JavaScript"

lang = "";
console.log(lang ?? "JavaScript"); // "" (empty string is NOT nullish)
```

### Comparison with Logical OR (`||`)

```javascript
// || returns right side for ANY falsy value
let lang = "";
console.log(lang || "JavaScript"); // "JavaScript"

lang = 0;
console.log(lang || "JavaScript"); // "JavaScript"

// Use ?? when you want to preserve falsy values except null/undefined
```

### Logical AND (`&&`) - Conditional execution

```javascript
// Returns right side ONLY if left is truthy
let lang = "Python";
console.log(lang && "JavaScript"); // "JavaScript"

lang = false;
console.log(lang && "JavaScript"); // false
```

---

## Async/Await

### Fetching Data from APIs

```javascript
// Modern async/await syntax
async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        // { userId: 1, id: 1, title: "...", completed: false }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getData();
```

### Key Concepts:
- `async` function always returns a Promise
- `await` pauses execution until Promise resolves
- Use `try/catch` for error handling
- Perfect for working with REST APIs (as mentioned in the Roxnor internship requirements!)

## Resources

- MDN Web Docs: [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Practice: [JavaScript.info](https://javascript.info/)
- API Testing: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
