// let lang = "Javascript";
// function learn (topic) {
//     lang = topic;

//     if (true) {
//         const a = {
//             name: 'BMW', id: '456'
//         };
//         a.id = 1236;
//         console.log(a.id);
//     }

//     console.log(`I am learning ${lang}`);
// }
// learn("C");
// console.log(`I know ${lang}`);

// regular function

// function hello () {
//     console.log("Hello World");
//     return undefined;
// }
// hello();
// let message = hello();
// console.log(message);

// function expression

// const hello = function (message) {
//   console.log(`Hello ${message}`);
// };
// console.log(hello("world"));

// named function expression
// const hello = function hello(message) {
//   console.log(`Hello ${message}`);
// };
// hello("World");

// arrow function
// const hello = (message) => {
//   console.log(`Hello ${message}`);
// };
// hello("World");
// const age = (age) => ++age;
// console.log(age(4));

// const obj = () => {
//   return {
//     a: 5,
//     b: 6,
//   };
// };
// console.log(obj());

// anonymous function
// function hello() {
//   return () => {
//     console.log(`I am an anonymous function`);
//   };
// }
// console.log(hello());

// event handler
// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     alert("Hello");
// });

// primitive and reference value difference
// copy object
// let person1 = { name: "Alice", age: 25 };
// let person2 = person1; // ref same
// Shallow copy
// person2 = {...person1};
// let person2 = Object.assign({}, person1);
// Modern way
// let person2 = structuredClone(person1);
// person2.age = 15;
// console.log(person1.age);
// console.log(person2.age);

// copy array
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2[0] = 4;
// console.log(arr1); // 4, 2 ,3 -> Both array is changed / ref copied

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];  // spread operator
// let arr3 = arr1.slice(); // slice method
// let arr4 = Array.from(arr1);
// arr2[0] = 3;
// arr3[0] = 4;
// arr4[0] = 5;
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

// array methods
// find()
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const result = fruits.find((fruit) => {
//   return fruit === "Orange";
// });
// console.log(result);

// findIndex()
// const index = fruits.findIndex((fruit) => fruit === "Apple");
// console.log(index);

// filter
// const numbers = [10, 13, 15, 18, 26, 29, 48];
// const evens = numbers.filter((number) => number % 2 === 0);
// console.log(evens);

// slice()
// const result = fruits.slice(1, 4);
// console.log(result);
// console.log(fruits);

// splice() -> manipulate the original aray
// Array.from(fruits).splice() -> doesn't mute the main array
// const result = fruits.splice(1, 3, "Papaya", "Watermelon");
// console.log(result);
// console.log(fruits);

// concat() -> insert at last
// const result = fruits.concat('Papaya');
// console.log(result);
// console.log(fruits);

// push() -> insert at last
// const result = fruits.push("Watermelon"); // size of array
// console.log(result);
// console.log(fruits);

// map()
// const result = fruits.map(fruit => fruit + "$");
// console.log(result);
// console.log(fruits);

// reduce()
// const numbers = [2, 2, 2, 2, 2];
// const total = numbers.reduce((sum, acc) => sum + acc);
// console.log(total);
// console.log(numbers);

// for each
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((e) => console.log(e));
// for (num of numbers) {
//   console.log(num);
// }

// for (ind in numbers) {
//   console.log(numbers[ind]);
// }

// let name = "Bangladesh";
// let country = name;
// console.log(name);
// console.log(country);
// for (char of name) {
//   console.log(char + "i");
// }
// console.log(name);

// const obj = {
//   name: "arman",
//   age: 28,
// };
// // for in accessible for object
// for (x in obj) {
//     console.log("key" + " = " + "value");
//   console.log(x + " = " + obj[x]);
// }

// object
// const language = {
//   name: "Javascript",
//   year: 1995,
//   creator: "Brended Eich",
// };
// const arrayOfKeys = Object.keys(language);
// const arrayOfValues = Object.values(language);
// const entries = Object.entries(language);
// console.log(arrayOfKeys);
// console.log(arrayOfValues);

// array of arrays
// [
//   ["name", "Javascript"],
//   ["year", 1995],
//   ["creator", "Brended Eich"],
// ];
// console.log(entries);

// language.popularity = "100%"
// // dynamically change the object
// let a;
// a = "version";
// language[a] = 22.24;
// a = "mode";
// language[a] = "LTS";
// console.log(language);

// spread
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const basket = [...fruits];
// console.log(basket);
// console.log(fruits);

// const languages = [
//   {
//     name: "Javascript",
//     year: 1995,
//     creator: "Brended Eich",
//   },
//   {
//     name: "Python",
//     year: 1987,
//     creator: "Phython Master",
//   },
//   {
//     name: "C++",
//     year: 1980,
//     creator: "Einstein",
//   },
// ];
// const newLanguage = [...languages];
// newLanguage[0].name = "arman"
// console.log(newLanguage);

// const language = {
//   name: "Python",
//   year: 1987,
//   creator: "Phython Master",
// };
// const result = {...language};
// language.name = "JS";
// console.log(result);

// rest
// function sum(text, ...rest) {
//   const result = rest.reduce((sum, acc) => sum + acc + 0);
//   console.log(`${text} ${result}`)
// }
// console.log(sum("The sum is = " , 1, 2, 3, 4, 5));

// falsy value
// const falsy = [false, 0, -0, 0n, "", null, undefined, NaN];
// const falsyOnly = falsy.filter(()=> Boolean);
// console.log(falsyOnly);

// const values = [0, 1, "", "hello", null, undefined, false, 42, NaN];
// const truthyOnly = values.filter(Boolean);
// console.log(truthyOnly);

// const result = NaN;
// if(!NaN) {
//     console.log("falsy");
// } else {
//     console.log("truthy");
// }

// ternary operator
// const a = 6;
// console.log(a % 2 === 0 ? "even" : "odd");

// destructuring
// const user = {
//   id: 30,
//   name: "arman",
//   age: 29,
//   education: {
//     degree: "Graduate",
//     school: {
//       nameOfSchool: "CCPC",
//     },
//   },
// };
// const { name, age } = user;
// console.log(name, age);
// const { education } = user;
// console.log(education);
// const { education: { degree } = {} } = user;
// console.log(degree);
// const { education: { school: { nameOfSchool } = {} } = {} } = user;
// console.log(nameOfSchool);

// optional chaining
// const user = {
//   id: 30,
//   name: "arman",
//   age: 29,
//   education: {
//     degree: "Graduate",
//     school: {
//       nameOfSchool: "CCPC",
//     },
//   },
// };
// console.log(user?.education?.school?.nameOfSchool);

// nullish coalescing
// Nullish = Null/undefined
// if left value is (null or undefined) only then return the right side value
// let lang = undefined;
// console.log(lang ?? "JavaScript");
// logical OR
// work for all falsy values
// if left value is any falsy value only then return the right value
// lang = NaN;
// console.log(lang || "JavaScript");

// logical AND
// if left value is truthy then only then return the right value
// lang = false;
// console.log(lang && "JavaScript");

// 'https://jsonplaceholder.typicode.com/todos/1'
// async function getData () {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await response.json();
//     console.log(data);
// }
// getData();

// event delegator
// const list = document.getElementById("list");
// list.addEventListener("click", (e) => {
//   e.target.style.backgroundColor = "yellow";
// });

// event propagation
const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", listener);
form.addEventListener("click", listener, true);
button.addEventListener("click", listener);

function listener(event) {
  console.log(this.tagName);
  // console.log(event.currentTarget); // same
}
