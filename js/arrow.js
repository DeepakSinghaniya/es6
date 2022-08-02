// Arrow Function

const myFun = () => {
  console.log("Hello Arrow Functon");
};

myFun();

const myFun2 = (n) => {
  console.log(n);
};

myFun2(8);

const myFun3 = (n) => {
  return n * n;
};

console.log(myFun3(2));

const myFun4 = (n) => n * n;

console.log(myFun4(4));

// String concat

let name = "test ";
let age = 25;

let myString = `my name is ${name} and my age is ${age}`;
// let myString2 = "my name is " + name + " and my age is " + age;
console.log(myString);
// console.log(myString2);
