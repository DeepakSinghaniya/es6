const arr = [
  { id: 1, name: "test", age: 21 },
  { id: 20, name: "test1", age: 99 },
  { id: 4, name: "test2", age: 33 },
  { id: 33, name: "test3", age: 22 },
];

const arrMap = arr.map(({ name, id, age }) => {
  return `I am ${name} and my id is ${id}. I am ${age} years old`;
});

console.log(arrMap);

const tempArr = [1, 3, 5, 4, 2, 6, 7, 8, 9];

const tempArr2 = tempArr.map((item) => {
  return item % 2 === 0 ? "even" : "odd";
});
console.log(tempArr);
console.log(tempArr2);
//---------------------------------------------------------------------
const print = (arr) => {
  const funForEach = (item) => {
    console.log(item);
  };
  arr.forEach(funForEach);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

print(arrMap);
