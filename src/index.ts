let age = 38;
console.log(age);
//age='test';

let firstName = "Santosh";
console.log(firstName);

let learner = true;
console.log(learner);

console.log("Testing");

//Arrays
let arr: Array<string> = ["Test", "Nothing"];

let arrs: number[] = [1, 2, 3, 4];

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

let obj: { firstName: string; age: number; id: number } = {
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

let fun = (a: number, b: number): number => a + b;

console.log(fun(5, 9));

let addArr = (items: number[]): number => items.reduce((a, b) => a + b, 0);

console.log(addArr([1, 2, 3, 4, 5, 6]));

// Template litterals
let strRetun = (first: string, last: string): string => `${first}  ${last}`;

console.log("Santosh", "Reddy");

//Tuples

let tuplesExample: [number, string, boolean] = [1, "test", false];

console.log(tuplesExample);

let latLong = (num1: number, num2: number): [number, number] => [num1, num2];

//destructuring
const [lat, long] = latLong(1.234, 474.474);

console.log(`${lat}, ${long}`);

//Named Tuples

let user: [id: number, name: string] = [1, "test"];

//interfaces
interface Author {
    name: string,
    avathar: string
}

const users: Author = { name: 'Santosh', avathar: 'img/avathar.png' }

console.log(users.name);

interface Post {
    author: Author,
    tags: string[],
    rating: number
}

let testing: Post = {
    author: { name: 'Santosh', avathar: 'img/avathar.png' },
    tags: ['Test', 'Testing'],
    rating: 5
}
let createPost = (post: Post) => {
    console.log(`${post.author.name} tags: ${post.tags} rating: ${post.rating}`)

}

createPost(testing)

let newArr: Post[] = [];

newArr.push(testing);
console.log(newArr);

// type alias

type users1 = [name: string, age: number]

let get = (name: string, age: number): users1 => [name, age]

console.log(get('Reddy', 38))

type users2 = { name: string, age: number }

type Id = number | string;

let testingFun = (id: Id) => {
    //type guard
    if (typeof id === 'string') {

    } else if (typeof id === "number"){

    }
}