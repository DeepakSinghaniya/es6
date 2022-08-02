// Array
const arr = [1, 2, 3];
arr.push(4);

console.log(arr);

// Object

const obj = { id: 01, name: "Test" };
obj.age = 21;

console.log(obj);
console.log(obj.name);

//-------------------------------------------------

//Copy by referance
const arrOne = [1, 2, 3, 4];
const arrTwo = arrOne;
arrTwo.push(5);

console.log(arrOne);
console.log(arrTwo);

//copy by value
const arrThree = [1, 2, 3, 4];
const arrFour = [...arrThree];
arrFour.push(5);

console.log(arrThree);
console.log(arrFour);

//-----------------------------------

//copy by referance
const objOne = { id: 01, name: "Test" };
const objTwo = objOne;
objTwo.age = 21;

console.log(objOne);
console.log(objTwo);

//copy by value

const objThree = { id: 01, name: "Test" };
const objFour = { ...objThree };
objFour.age = 21;

console.log(objThree);
console.log(objFour);
