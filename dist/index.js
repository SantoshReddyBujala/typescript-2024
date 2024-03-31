"use strict";
let age = 38;
console.log(age);
//age='test';
let firstName = "Santosh";
console.log(firstName);
let learner = true;
console.log(learner);
console.log("Testing");
//Arrays
let arr = ["Test", "Nothing"];
let arrs = [1, 2, 3, 4];
arr.push("Testing");
arr.push("Doing");
console.log(arr);
arrs.push(5);
console.log(arrs);
arrs.pop();
console.log(arrs);
arr.pop();
console.log(arr);
arr.slice(0, 1);
console.log(arr);
let things = [1, "yes", true];
console.log(things);
const t = things[1];
console.log(t);
//Objects
let obj = {
    firstName: "Santosh",
    age: 38,
    id: 36763,
};
console.log(obj.firstName);
obj.firstName = "Santu";
console.log(obj);
let person = { name: "Santosh", age: 38 };
console.log(person);
//Functions
let fun = (a, b) => a + b;
console.log(fun(5, 9));
let addArr = (items) => items.reduce((a, b) => a + b, 0);
console.log(addArr([1, 2, 3, 4, 5, 6]));
// Template litterals
let strRetun = (first, last) => `${first}  ${last}`;
console.log("Santosh", "Reddy");
//Tuples
let tuplesExample = [1, "test", false];
console.log(tuplesExample);
let latLong = (num1, num2) => [num1, num2];
//destructuring
const [lat, long] = latLong(1.234, 474.474);
console.log(`${lat}, ${long}`);
//Named Tuples
let user = [1, "test"];
const users = { name: 'Santosh', avathar: 'img/avathar.png' };
console.log(users.name);
let testing = {
    author: { name: 'Santosh', avathar: 'img/avathar.png' },
    tags: ['Test', 'Testing'],
    rating: 5
};
let createPost = (post) => {
    console.log(`${post.author.name} tags: ${post.tags} rating: ${post.rating}`);
};
createPost(testing);
let newArr = [];
newArr.push(testing);
console.log(newArr);
let get = (name, age) => [name, age];
console.log(get('Reddy', 38));
