const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.filter((item) => {
  if (item % 2 != 0) {
    return true;
  }
  return false;
});

console.log(newArr);

//-----------------------------------

const productList = [
  { name: "product 1", price: 200, inStock: true },
  { name: "product 2", price: 3634, inStock: false },
  { name: "product 3", price: 99, inStock: true },
  { name: "product 4", price: 300, inStock: true },
  { name: "product 5", price: 4000, inStock: false },
  { name: "product 6", price: 24, inStock: true },
  { name: "product 7", price: 56, inStock: true },
  { name: "product 8", price: 900, inStock: false },
  { name: "product 9", price: 33, inStock: true },
];

const filteredProducts = productList.filter((product) => {
  if (product.price > 99 && product.inStock === true) {
    return true;
  }
  return false;
});

console.log(filteredProducts);

// productList.forEach((product) => {
//   const keys = Object.keys(product);

//   keys.forEach((key) => {
//     console.log(`${key} : ${product[key]}`);
//   });
//   console.log("-------------------------------------");
// });

//--------------------------------------

const product = { name: "product 3", price: 99, inStock: true };

const key = "inStock";
console.log(product[key]);

const keys = Object.keys(product);
console.log(keys);

keys.forEach((key) => {
  console.log(`${key} : ${product[key]}`);
});
