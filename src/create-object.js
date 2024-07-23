"use strict";

// 1. Create object using Object literal
let person1 = {
  firstName: "John",
  lastName: "Doe",
};
// Add Properties
person1.age = 50;

// 2. Create object Using the Object constructor
let person2 = new Object();

// Add Properties
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;

// 3. Create object Using the Function constructor
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// 4. Create object Using Object.assign() method
const sourceObj = { firstName: "John", lastName: "Doe" };
let person3 = Object.assign({}, sourceObj);
console.log("person3", person3);

// 5. Create object Using Object.assign() method
const obj = { firstName: "John", lastName: "Doe" };
let person4 = Object.create(sourceObj);
console.log("person4", person4);

/* ######  Javascript Object methods     ####    */

const obj2 = { firstName: "John", lastName: "Doe", age: 50 };
const entries = Object.entries(obj2);
const obj3 = Object.fromEntries(entries);
console.log("entries", entries);
console.log("obj3", obj3);

// groupBy Groups object elements according to a function
const fruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result1 = Object.groupBy(fruits, myCallback);
const result2 = Map.groupBy(fruits, myCallback);
console.log("fruits", fruits);
console.log("result1", result1);
console.log("result2", result2);

// console.log("this", this);
// function test() {
//   console.log("this", this);
// }
// test();

function submitFn(e) {
  console.log("Event", e);
  console.log("this", this);
}

document.querySelector("button").addEventListener("click", submitFn);

name = "Rajan";
console.log(22, name);
