const tempArr = [1, 3, 5, 4, 2, 6, 7, 8, 9];
console.log(tempArr);

const tempArr2 = tempArr.map((item) => {
  return item % 2 === 0 ? "even" : "odd";
});

console.log(tempArr2);

const test = tempArr.forEach((item) => {
  console.log(item % 2 === 0 ? "even" : "odd");
});

console.log(test);
