"use strict";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = ["a", "d", "s", "r"];
const arr3 = [
  { name: "Ann", books: ["HP", "Pyton"], age: 30 },
  { name: "Jhon", books: ["JS", "Hibernate"], age: 20 },
  { name: "Bill", books: ["Java", "SQL"], age: 35 },
];

function myReduceRight(arr, callback, innitialValue) {
  let result;
  if (innitialValue) {
    result = innitialValue;
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      result = callback(result, arr[i], i, arr);
    }
  } else {
    result = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i -= 1) {
      result = callback(result, arr[i - 1], i, arr);
    }
  }
  return result;
}

const arrArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(myReduceRight(arrArr, (a, b) => a.concat(b)));
console.log(myReduceRight(arr, (a, b) => a + b))
console.log(myReduceRight(arr2, (a, b) => a.concat(b)))
console.log(myReduceRight(arr3, (a, b) => [...a, ...b.books], []))
