const objOne = { id: 1, name: "test", age: 46 };

const { id, name } = objOne;

// const id = objOne.id;
// const name = objOne.name;

console.log(id, name);

const myFun = ({ name, id }) => {
  console.log(name);
  console.log(id);
};

myFun(objOne);

//-------------------------------------
const arrOne = ["foo", "test", "bar", 4];

const [deepak, tannu] = arrOne;

// const deepak = arrOne[0]
// const tannu = arrOne[1]

console.log(deepak, tannu);

const a = { 0: "ok", 1: "ok1" };
const b = ["ok", "ok1"];

console.dir(a);
console.dir(b);
